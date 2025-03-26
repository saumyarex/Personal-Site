const config = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteUserCollectionID: String(
    import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID
  ),
  appwriteProjectCollectionID: String(
    import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID
  ),
  appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
