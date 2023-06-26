import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { PageHeader } from "./common/PageHeader";
import { useState } from "react";
import { useFormik } from "formik";
import Joi from "joi";
import Input from "./common/Input";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { useAuth } from "../context/auth.context";

const SignIn = () => {
  const [error, setError] = useState();

  const { login, user } = useAuth();

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string().min(6).max(1024).required().label("Password"),
    }),
    async onSubmit(values) {
      try {
        await login(values);
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="row d-flex justify-content-center align-items-center h-100 my-5">
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded">
        <PageHeader
          title={
            <>
              Sign In To RUN<i className="bi bi-4-circle"></i>U
            </>
          }
          description="Connect with your account!!"
        />

        <form onSubmit={form.handleSubmit} noValidate>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-outline mb-4">
            <Input
              {...form.getFieldProps("email")}
              type="email"
              label="Email"
              required
              placeholder="email"
              error={form.touched.email && form.errors.email}
            />
          </div>

          <div className="form-outline mb-4">
            <Input
              {...form.getFieldProps("password")}
              type="password"
              label="Password"
              required
              placeholder="password"
              error={form.touched.password && form.errors.password}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              disabled={!form.isValid}
              type="submit"
              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
            >
              Sign In
            </button>
          </div>

          <p className="text-center text-muted mt-2 mb-0">
            Need an account?{" "}
            <NavLink to="/sign-up" className="fw-bold text-body">
              <u>Sign up here</u>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
