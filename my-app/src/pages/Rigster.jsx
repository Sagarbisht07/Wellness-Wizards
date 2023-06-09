import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Rigster = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    weight: 0,
    height: 0,
    email: "",
    password: "",
  });

  const { name, weight, height, email, password } = data;
  const baseUrl = "https://wellness-q8lu.onrender.com";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !weight || !height || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(`${baseUrl}/users/register`, data).then((res) => {
        Swal.fire("", "Register Successfull!", "success");
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <img
        src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
        alt="loading"
        width={"60%"}
      />
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://blog.myfitnesspal.com/wp-content/uploads/2020/08/This-Is-the-Quickest-Way-to-Boost-Your-Mood-2-1140x545.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        paddingTop: "4%",
      }}>
      <div
        class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-100"
        style={{
          opacity: "0.9",
        }}>
        <div class="flex justify-center mx-auto">
          <img class="w-1/2" src="logonew.png" alt="" />
        </div>

        <form onSubmit={handleSubmit} class="mt-6">
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              name
            </label>
            <input
              value={name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Height
            </label>
            <input
              value={height}
              onChange={(e) => setData({ ...data, height: e.target.value })}
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label for="username" class="block text-sm text-gray-800 ">
              Weight
            </label>
            <input
              value={weight}
              onChange={(e) => setData({ ...data, weight: e.target.value })}
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <a href="#" class="text-xs  dark:text-gray-400 hover:underline">
                Forget Password?
              </a>
            </div>

            <input
              value={password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-100 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-6">
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
          </a>

          <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div class="flex items-center mt-6 -mx-2">
          <button
            type="button"
            class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span class="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          <a
            href="#"
            class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
        </div>

        <h1 class="mt-8 text-xl font-light text-center text-blue-400">
          <Link to="/login" class="font-medium text-blue-600 hover:underline">
            Go to Login Page
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Rigster;
