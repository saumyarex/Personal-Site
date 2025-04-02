import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Authlayout({ children, authentication = true }) {
  const [loader, setLoader] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useSelector((state) => state.auth.status);

  React.useEffect(() => {
    // If we're on the homepage, don't redirect
    if (location.pathname === "/") {
      setLoader(false);
      return;
    }

    if (authentication && authStatus !== authentication) {
      console.log(authStatus);
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/admin-panel");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate, location.pathname]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default Authlayout;
