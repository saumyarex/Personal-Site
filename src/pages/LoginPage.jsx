import React from "react";
import { LoginForm, Container } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function LoginPage() {
  const dispatch = useDispatch();

  const user = localStorage.getItem("user");
  if (user) {
    dispatch(login(JSON.parse(user)));
  }
  return (
    <Container className="h-lvh ">
      <div className="mt-40 mx-10">
        <LoginForm />
      </div>
    </Container>
  );
}

export default LoginPage;
