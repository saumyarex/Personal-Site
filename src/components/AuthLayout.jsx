import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Authlayout({ children, authentication = true }) {
  const [loader, setLoader] = React.useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  React.useEffect(() => {
    if (authentication && authStatus !== authentication) {
      console.log(authStatus);
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/admin-panel");
    }
    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default Authlayout;
