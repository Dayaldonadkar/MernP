import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PasswordIcon from "@mui/icons-material/Password";
import WorkIcon from "@mui/icons-material/Work";

const Register = () => {
  return (
    <div className="flex justify-center bg-[#F6F7FA] h-screen">
      <div className="flex  justify-center w-[80%] xl:w-[85%] py-3">
        <div className="flex flex-col justify-center px-8 w-[93%] h-[40%] sm:w-[50%] sm:h-[35%] lg:w-[40%] lg:h-[45%] bg-white mt-28">
          <h1 className="text-2xl pb-3">SignUp</h1>
          <div className=" space-y-5 py-2">
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <Person2Icon fontSize="smaller" />
              <input
                type="text"
                placeholder="Your Name"
                className="outline-none pl-2"
              />
            </div>
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <MailIcon fontSize="smaller" />
              <input
                type="text"
                placeholder="Your Email"
                className="outline-none pl-2"
              />
            </div>
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <LocalPhoneIcon fontSize="smaller" />
              <input
                type="text"
                placeholder="Your Phone"
                className="outline-none pl-2"
              />
            </div>
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <WorkIcon fontSize="smaller" />
              <input
                type="text"
                placeholder="Work"
                className="outline-none pl-2"
              />
            </div>
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <PasswordIcon fontSize="smaller" />
              <input
                type="text"
                placeholder="Password"
                className="outline-none pl-2"
              />
            </div>
            <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
              <PasswordIcon fontSize="smaller" />
              <input
                type="text"
                placeholder="Confirm Password"
                className="outline-none pl-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
