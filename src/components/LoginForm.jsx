import { Form } from "formik";
import { object, string } from "yup";
import { NavLink } from "react-router-dom";
import { EmailIcon, PasswordIcon } from "../helper/icons";

export const loginSchema = object({
  email: string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: string()
    .required("Password is required.")
    .min(8, "Password must contain at least 8 characters.")
    .matches(/\d+/, "Password must contain at least one digit.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(
      /[@$!%*?&]+/,
      "Password must contain at least one special character (@$!%*?&)."
    ),
});

const inputData = [
  {
    label: "email",
    name: "email",
    type: "email",
    placeholder: "Enter email",
  },
  {
    label: "password",
    name: "password",
    type: "password",
    placeholder: "Enter password",
  },
];
const LoginForm = ({ handleChange, values, touched, errors, handleBlur }) => {
  return (
    <Form>
      <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        {inputData.map(({ label, name, type, placeholder}) => (
          <div key={name}>
            <label htmlFor={label} className="sr-only">
              {label}
            </label>
            <div className="relative">
              <input
                name={name}
                type={type}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={placeholder}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
            </div>
            {touched[name] && Boolean(errors[name]) && (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-2">
                {errors[name]}
              </span>
            )}
          </div>
        ))}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <NavLink to={"/register"} className="underline" href="">
              Sign up
            </NavLink>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-gray-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
