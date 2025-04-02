import React from "react";
import { Container, PostUploadForm } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function AddProject() {
  const dispatch = useDispatch();

  const user = localStorage.getItem("user");
  if (user) {
    dispatch(login(JSON.parse(user)));
  }

  return (
    <Container>
      <PostUploadForm />
    </Container>
  );
}

export default AddProject;
