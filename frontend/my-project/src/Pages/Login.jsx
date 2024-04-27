import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import axios from "axios";

// import LoginValidation from "../Functions/LoginValidation";
export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:5173/", values);

    const email = values.email[0];
    const password = values.password[0];

    // Log the email and password
    console.log(`Email: ${email}, Password: ${password}`);
    console.log(result);
  };

  return (
    <>
      <div className="flex  vh-100 place-content-center m-60">
        <div className="bg-gray-700 p-3 rounded w-80 h-25 ">
          <p>Log in Page</p>
          <form className="mb-3" action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="rounded w-full"
                onChange={handleInput}
                name="email"
              />
              {/* {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="rounded w-full"
                onChange={handleInput}
                name="password"
              />
              {/* {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )} */}
            </div>
            <button
              type="submit"
              className="btn p-2 rounded bg-green-400 border place-self-center"
            >
              <strong>Log In</strong>
            </button>
            {/* <p>You agree to our terms and policies</p> */}
            <Link
              to="/Signup"
              className="btn p-2 rounded bg-green-400 border place-self-center"
            >
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
