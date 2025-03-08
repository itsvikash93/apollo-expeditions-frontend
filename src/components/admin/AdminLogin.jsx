import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/admin/login", data);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className={`border p-2 w-full rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className={`border p-2 w-full rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#3D8D7A] text-white p-2 rounded w-full hover:bg-[#3D8D7A]/80"
        >
          Login
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
