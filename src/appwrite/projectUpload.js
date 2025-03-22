import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import {
  appWriteURL,
  appwriteProjectID,
  appwriteDatabaseID,
  appwriteProjectCollectionID,
  appwriteBucketID,
} from "../config/config.js";

export class ProjectUploadServices {
  client;
  account;
  databases;
  storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(appWriteURL)
      .setProject(appwriteProjectID);

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async postProjectInfo({
    title,
    description,
    image,
    tags,
    demoLink = "",
    codeLink,
    featured = "false",
    slug,
    status,
  }) {
    try {
      const result = await this.databases.createDocument(
        appwriteDatabaseID,
        appwriteProjectCollectionID,
        slug,
        {
          title,
          description,
          image,
          tags,
          demoLink,
          codeLink,
          featured,
          status,
        }
      );

      if (result) {
        console.log("Uploaded successfully");
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateProjectInfo({
    title,
    description,
    image,
    tags,
    demoLink = "",
    codeLink,
    featured = "false",
    slug,
    status,
  }) {
    try {
      return await this.databases.updateDocument(
        appwriteDatabaseID,
        appwriteProjectCollectionID,
        slug,
        {
          title,
          description,
          image,
          tags,
          demoLink,
          codeLink,
          featured,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProjectInfo() {
    try {
      return await this.databases.listDocuments(
        appwriteDatabaseID,
        appwriteProjectCollectionID,
        [Query.limit(25), Query.equal("status", "active")]
      );
    } catch (error) {
      console.log(error);
    }
  }

  //images upload logic
  async uploadImage(file) {
    try {
      return await this.storage.createFile(appwriteBucketID, ID.unique(), file);
    } catch (error) {
      console.log(error);
    }
  }

  getImagePreview(fileId) {
    try {
      return this.storage.getFilePreview(appwriteBucketID, fileId);
    } catch (error) {
      console.log(error);
    }
  }

  //   async updateImage(file, fileId) {
  //     try {
  //       return await this.storage.updateFile(appwriteBucketID, fileId);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}

const projectUploadServices = new ProjectUploadServices();

export default projectUploadServices;
