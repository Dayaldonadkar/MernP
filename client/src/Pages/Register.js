import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

const Register = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className="py-24 md:py-32 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="#">
                <img
                  className="h-16"
                  src="flex-ui-assets/logos/flex-circle-green.svg"
                  alt=""
                />
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Join our community
              </h3>
              <p className="text-lg text-coolGray-500 font-medium">
                Start your journey with our product
              </p>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Name*
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Email*
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Password*
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Work
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  placeholder="Work"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  phone
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="Number"
                  placeholder="Your Phone"
                />
              </div>

              <a
                className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
              >
                Sign Up
              </a>
              <a
                className="inline-flex items-center justify-center py-3 px-7 mb-6 w-full text-base text-coolGray-500 font-medium text-center leading-6 bg-white border border-coolGray-100 hover:border-coolGray-200 rounded-md shadow-sm"
                href="#"
              >
                <img
                  className="mr-2"
                  src="flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
                  alt=""
                />
                <span>Sign in with Google</span>
              </a>
              <p className="text-center">
                <span className="text-xs font-medium">
                  Already have an account?
                </span>
                <a
                  className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                  href="#"
                >
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;

// import React from "react";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// const meta = {
//   title: "",
//   meta: [],
//   link: [],
//   style: [],
//   script: [],
// };

// export default function Index() {
//   return (
//     <React.Fragment>
//       <HelmetProvider>
//         <Helmet {...meta}></Helmet>
//       </HelmetProvider>
//       <section className="py-24 lg:pb-32 bg-gray-100 overflow-hidden">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-lg text-center mx-auto">
//             <h2 className="font-heading mb-4 text-3xl tracking-tighter">
//               Create an account
//             </h2>
//             <p className="mb-12 text-xl tracking-tight">
//               Free 1 month trial No credit card required
//             </p>
//             <div className="mb-6 p-9 bg-white border border-gray-200 rounded-2xl">
//               <form className="flex flex-wrap -m-2" action="#">
//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="signUpInput3-1"
//                       type="text"
//                       placeholder="First Name & Last Name"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="email"
//                       type="text"
//                       placeholder="Enter your email"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="Your Phone"
//                       type="Number"
//                       placeholder="Your phone"
//                     />
//                   </label>
//                 </div>

//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="signUpInput3-3"
//                       type="text"
//                       placeholder="Work"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="work"
//                       type="password"
//                       placeholder="Password"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full p-2">
//                   <label className="block">
//                     <input
//                       className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 rounded-lg focus:border-gray-700 transition duration-200"
//                       id="signUpInput3-2"
//                       type="password"
//                       placeholder="confirm password"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full p-2">
//                   <a
//                     className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
//                     href="#"
//                   >
//                     Create Free Account
//                   </a>
//                   <div className="flex items-center -m-2.5 mb-4">
//                     <div className="flex-1 p-2.5">
//                       <div className="h-px bg-gray-300" />
//                     </div>
//                     <div className="auto p-2.5">
//                       <span className="text-xl text-gray-600 tracking-tight">
//                         or
//                       </span>
//                     </div>
//                     <div className="flex-1 p-2.5">
//                       <div className="h-px bg-gray-300" />
//                     </div>
//                   </div>
//                   <a
//                     className="flex justify-center px-5 py-4 w-full font-semibold tracking-tight bg-gray-100 hover:bg-gray-200 rounded-md focus:ring-4 focus:ring-indigo-300 transition duration-200"
//                     href="#"
//                   >
//                     <img
//                       className="mr-3"
//                       src="basko-assets/images/sign-up/sign-up.svg"
//                       alt=""
//                     />
//                     <span>Sign up with Google</span>
//                   </a>
//                 </div>
//               </form>
//             </div>
//             <p className="text-gray-600 font-medium tracking-tight">
//               <span>Already have an account?</span>
//               <a
//                 className="text-indigo-500 hover:text-indigo-600 transition duration-200"
//                 href="#"
//               >
//                 Sign in
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// }

// // import React from "react";
// // import Person2Icon from "@mui/icons-material/Person2";
// // import MailIcon from "@mui/icons-material/Mail";
// // import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// // import PasswordIcon from "@mui/icons-material/Password";
// // import WorkIcon from "@mui/icons-material/Work";

// // const Register = () => {
// //   return (
// //     <div className="flex justify-center bg-[#F6F7FA] h-screen">
// //       <div className="flex  justify-center w-[80%] xl:w-[85%] py-3">
// //         <div className="flex flex-col justify-center px-8 w-[93%] h-[40%] sm:w-[50%] sm:h-[35%] lg:w-[40%] xl:w-[30%] lg:h-[45%] bg-white mt-28 rounded-lg shadow-xl">
// //           <h1 className="text-2xl pb-3">SignUp</h1>
// //           <div className=" space-y-5 py-2">
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <Person2Icon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="outline-none pl-2"
// //               />
// //             </div>
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <MailIcon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Your Email"
// //                 className="outline-none pl-2"
// //               />
// //             </div>
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <LocalPhoneIcon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Your Phone"
// //                 className="outline-none pl-2"
// //               />
// //             </div>
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <WorkIcon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Work"
// //                 className="outline-none pl-2"
// //               />
// //             </div>
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <PasswordIcon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Password"
// //                 className="outline-none pl-2"
// //               />
// //             </div>
// //             <div className="flex items-center space-x-1 border-b border-[#AEACAE]">
// //               <PasswordIcon fontSize="smaller" />
// //               <input
// //                 type="text"
// //                 placeholder="Confirm Password"
// //                 className="outline-none pl-2"
// //               />
// //             </div>

// //             <button
// //               type="button"
// //               class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
// //             >
// //               Register
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
