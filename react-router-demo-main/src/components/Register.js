import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    toast.success("You have successfully registered!");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2001);
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Welcome to the Registration Page</h1>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Register;
