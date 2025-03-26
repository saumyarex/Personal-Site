import React, { useState } from "react";

const PostUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    demoLink: "",
    codeLink: "",
    featured: false,
    tags: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert tags string to array
      const formattedData = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      // Replace with actual upload logic
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formatted data:", formattedData);
      setSubmitStatus("success");
      setFormData({
        title: "",
        description: "",
        image: "",
        demoLink: "",
        codeLink: "",
        featured: false,
        tags: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Upload error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-700 shadow-lg max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-white mb-6">Upload New Post</h3>

      {submitStatus === "success" && (
        <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded mb-6 flex items-start">
          <svg
            className="w-5 h-5 mr-2 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Post uploaded successfully!</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded mb-6 flex items-start">
          <svg
            className="w-5 h-5 mr-2 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Failed to upload post. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter post description"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-300 mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="demoLink" className="block text-gray-300 mb-2">
              Demo Link
            </label>
            <input
              type="url"
              id="demoLink"
              name="demoLink"
              value={formData.demoLink}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter demo URL"
            />
          </div>

          <div>
            <label htmlFor="codeLink" className="block text-gray-300 mb-2">
              Code Link
            </label>
            <input
              type="url"
              id="codeLink"
              name="codeLink"
              value={formData.codeLink}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter code repository URL"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tags" className="block text-gray-300 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="react, typescript, tailwind"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4 bg-gray-700 border-gray-600 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
          />
          <label htmlFor="featured" className="ml-2 text-gray-300">
            Mark as featured post
          </label>
        </div>

        <div>
          <button
            type="submit"
            className={`w-full px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              "Upload Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostUploadForm;
