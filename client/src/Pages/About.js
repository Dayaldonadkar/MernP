import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>
      <form method="GET">
        <h1>{userData.name}</h1>
        <p>{userData.work}</p>
        <p>{userData.email}</p>
        <p>{userData._id}</p>
        <p>{userData.phone}</p>
      </form>
    </div>
  );
};

export default About;
