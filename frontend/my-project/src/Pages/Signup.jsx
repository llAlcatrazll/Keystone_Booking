import { useState } from "react"; // Make sure to import useState
import axios from "axios";
// import httpAdapter from "axios/lib/adapters/http";

// axios.defaults.adapter = httpAdapter; // Set the HTTP adapter once outside of the function

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // Store a single string value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:5173/signup", values);

    console.log(result);
    // .then((response) => {
    //   console.log(response.status, response.data);
    // })
    // .catch((error) => {
    //   console.error("Error posting data: ", error);
    // });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //   .post("http://localhost:8081/signup", values)
  //   .then((res) => {
  //     .then((res) => {
  // const validationErrors = SignupValidaiton(values);
  // setErrors(validationErrors);
  // // setErrors(SignupValidaiton(values));
  // if (errors.name === "" && errors.email === "" && errors.password === "") {
  //   axios
  //     .post("http://localhost:8081/signup", values)
  //     .then((res) => {
  //       console.log(res.data); // Log the response data
  //       console.log(res.headers); // Log the response headers
  //     })
  //     .catch((err) => console.log(err));
  // }
  // };

  return (
    <>
      <div className="flex  vh-100 place-content-center m-60">
        <div className="bg-gray-700 p-3 rounded w-80 h-25 ">
          <h2>Sign up Form</h2>
          <form className="mb-3" action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Enter name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded w-full"
                name="name"
                onChange={handleInput}
              />{" "}
              {/* {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="rounded w-full"
                name="email"
                onChange={handleInput}
              />{" "}
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
                name="password"
                onChange={handleInput}
              />{" "}
              {/* {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )} */}
            </div>
            <button
              className="btn p-2 rounded bg-green-400 border place-self-center"
              type="submit"
            >
              <strong>Sign Up</strong>
            </button>
            {/* <p>You agree to our terms and policies</p> */}
            {/* <Link
              to="/Signup"
              className="btn p-2 rounded bg-green-400 border place-self-center"
              type="submit"
            >
              Create Account
            </Link> */}
          </form>
        </div>
      </div>
    </>
  );
}
