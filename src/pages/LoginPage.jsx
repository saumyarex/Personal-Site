import React from "react";
import { LoginForm, Container } from "../components";

function LoginPage() {
  return (
    <Container className="h-lvh ">
      <div className="mt-40 mx-10">
        <LoginForm />
      </div>
    </Container>
  );
}

export default LoginPage;
