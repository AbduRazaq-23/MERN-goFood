import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/users/getuser",
          { withCredentials: true }
        );

        !res ? navigate("/") : res.data.data.type !== "admin" && navigate("/");
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
