import React from "react";
import { Sidebar, Container, Button, AllPosts } from "../components";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authenticationService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logoutUser() {
    try {
      const userLogout = await authenticationService.logout();

      if (userLogout) {
        dispatch(logout());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <div className="flex fixed z-10 top-1 right-3">
        <div className="hover:cursor-pointer mt-3 mr-4">
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_2)">
              <path
                d="M40.5 27C39.2625 27 38.25 28.0125 38.25 29.25V40.995C38.25 42.2325 37.2375 43.245 36 43.245H13.5C12.2625 43.245 11.25 42.2325 11.25 40.995V18C11.25 16.7625 12.2625 15.75 13.5 15.75H24.75C25.9875 15.75 27 14.7375 27 13.5C27 12.2625 25.9875 11.25 24.75 11.25H11.25C8.775 11.25 6.75 13.275 6.75 15.75V42.75C6.75 45.225 8.775 47.25 11.25 47.25H38.25C40.725 47.25 42.75 45.225 42.75 42.75V29.25C42.75 28.0125 41.7375 27 40.5 27Z"
                fill="white"
              />
              <path
                d="M47.295 11.25H42.75V6.705C42.75 5.49 41.76 4.5 40.545 4.5H40.4775C39.24 4.5 38.25 5.49 38.25 6.705V11.25H33.7275C32.5125 11.25 31.5225 12.24 31.5 13.455V13.5225C31.5 14.76 32.49 15.75 33.7275 15.75H38.25V20.2725C38.25 21.4875 39.24 22.5 40.4775 22.4775H40.545C41.76 22.4775 42.75 21.4875 42.75 20.2725V15.75H47.295C48.51 15.75 49.5 14.76 49.5 13.545V13.455C49.5 12.24 48.51 11.25 47.295 11.25Z"
                fill="white"
              />
              <path
                d="M31.5 20.25H18C16.7625 20.25 15.75 21.2625 15.75 22.5C15.75 23.7375 16.7625 24.75 18 24.75H31.5C32.7375 24.75 33.75 23.7375 33.75 22.5C33.75 21.2625 32.7375 20.25 31.5 20.25Z"
                fill="white"
              />
              <path
                d="M31.5 27H18C16.7625 27 15.75 28.0125 15.75 29.25C15.75 30.4875 16.7625 31.5 18 31.5H31.5C32.7375 31.5 33.75 30.4875 33.75 29.25C33.75 28.0125 32.7375 27 31.5 27Z"
                fill="white"
              />
              <path
                d="M31.5 33.75H18C16.7625 33.75 15.75 34.7625 15.75 36C15.75 37.2375 16.7625 38.25 18 38.25H31.5C32.7375 38.25 33.75 37.2375 33.75 36C33.75 34.7625 32.7375 33.75 31.5 33.75Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_2">
                <rect width="54" height="54" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Button className="m-r5" onClick={logoutUser}>
          Logout
        </Button>
      </div>

      <div className="grid gap-10 grid-cols-12">
        <div className=" top-10 fixed">
          <Sidebar
            name="Saumya Nayak"
            email="saumya224@gmail.com"
            phoneNo={8319868056}
            location={"Raipur, CG, India"}
          />
        </div>
        <div className="col-span-12 mt-20 ml-60">
          <AllPosts />
        </div>
      </div>
    </Container>
  );
}

export default AdminPanel;
