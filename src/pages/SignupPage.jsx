import React from "react";
import { Container, SignupForm } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function SignupPage() {
  const dispatch = useDispatch();

  const user = localStorage.getItem("user");
  if (user) {
    dispatch(login(JSON.parse(user)));
  }
  return (
    <Container className="h-lvh">
      <div className="mt-20 mx-10">
        <SignupForm />
      </div>
    </Container>
  );
}

export default SignupPage;
