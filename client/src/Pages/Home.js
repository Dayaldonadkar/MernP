import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState({});
  const [show, setshow] = useState(false);
  const callAboutPage = async () => {
    const res = await fetch("/about", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    setUserData(data);
    setshow(true);
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen text-xl md:text-2xl lg:text-3xl xl:text-xl font-medium">
      {show ? (
        <div className="flex flex-col justify-center items-center h-screen text-xl md:text-2xl lg:text-3xl xl:text-xl font-medium space-y-2">
          <p className="text-sm">Welcome</p>
          <h1>{userData.name}</h1>
          <p className="text-base">Happy to see you back</p>
        </div>
      ) : (
        <h1 className="flex justify-center items-center h-screen text-xl md:text-2xl lg:text-3xl xl:text-xl font-medium">
          We Are The Mern Developer
        </h1>
      )}
    </div>
  );
};

export default Home;
