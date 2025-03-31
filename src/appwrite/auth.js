import { Client, Account, ID, Databases } from "appwrite";
import config from "../config/config.js";

export class Authentication {
  //Appwrite authentication logic
  client;
  account;
  databases;
  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async signup({ email, password }) {
    try {
      const user = await this.account.create(ID.unique(), email, password);

      if (user) {
        console.log("Register successfuly");
        console.log(user);
        this.login({ email, password });
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );

      if (session) {
        console.log("login successful");
        console.log(session);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
  }

  async userProfile({ name, email, phoneNo, location }) {
    try {
      const result = await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteUserCollectionID,
        ID.unique(),
        {
          name,
          email,
          phoneNo,
          location,
        }
      );

      if (result) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    return await this.account.deleteSession("current");
  }
}

const authenticationService = new Authentication();

export default authenticationService;
