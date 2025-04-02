import { Client, Account, ID, Databases, Storage, Query,ImageFormat } from "appwrite";
import config from "../config/config.js";

export class ProjectUploadServices {
  client;
  account;
  databases;
  storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async postProjectInfo({
    title,
    description,
    imageid,
    tags,
    demoLink = "",
    codeLink,
    featured = false,
    status = "true",
    category
  }) {
    try {
      const result = await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteProjectCollectionID,
        ID.unique(),
        {
          title,
          description,
          imageid,
          tags,
          demoLink,
          codeLink,
          featured,
          status,
          category,
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
    imageid,
    tags,
    demoLink = "",
    codeLink,
    featured = false,
    status = "true",
    id,
    category,
  }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteProjectCollectionID,
        id,
        {
          title,
          description,
          imageid,
          tags,
          demoLink,
          codeLink,
          featured,
          status,
          category,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProjectsInfo(noOfpost) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteProjectCollectionID,
        [Query.limit(noOfpost)]
      );
    } catch (error) {
      console.log("getAllProjectInfo error :", error);
    }
  }

  //images upload logic
  async uploadImage(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
    }
  }

  getImagePreview(fileId) {
    try {
      const imagePreview = this.storage.getFilePreview(
        config.appwriteBucketID,
        fileId,
        ImageFormat.Jpg
      );
      console.log(imagePreview);
      return imagePreview;
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
