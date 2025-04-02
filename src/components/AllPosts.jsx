import React, { useEffect } from "react";
import { ProjectCard } from "./";
import projectUploadServices from "../appwrite/projectUpload";
import { useDispatch } from "react-redux";
import { setPosts } from "../store/postsSlice";

function AllPosts({ className = "" }) {
  const dispatch = useDispatch();
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await projectUploadServices.getAllProjectsInfo(10);
        //console.log(res);

        setProjects(res.documents);
        dispatch(setPosts(res.documents));
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); // Empty de

  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {projects.map((post) => (
        <div key={post.$id || post.title}>
          <ProjectCard
            title={post.title}
            description={post.description}
            image={projectUploadServices.getImagePreview(post.imageid)}
            tags={post.tags}
            demoLink={post.demoLink}
            codeLink={post.codeLink}
            featured={post.featured}
          />
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
