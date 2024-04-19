import React from "react";
import logo from "../assets/logo.png";
import useAuthCalls from "../service/useAuthCalls";
import { Formik } from "formik";
import { loginSchema } from "../components/LoginForm";
import LoginForm from "../components/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <>
      <Helmet>
        <title>Login | Stock Management System</title>
        <meta name="description" content="Your page description" />
      </Helmet>

      <div className="min-h-screen flex items-center bg-gradient-to-r from-[#ABFB60] to-white">
        <section className="custom-box-shadow relative flex flex-wrap lg:items-center w-[80%] xl:w-[50%] mx-auto rounded-[2rem] ">
          <div className="relative w-full sm:h-96  lg:w-1/2">
            <img
              alt="Welcome"
              src={logo}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl text-gray-500">
                Login to your Account
              </h1>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            ></Formik>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
