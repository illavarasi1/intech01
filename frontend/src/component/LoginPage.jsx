import { useForm } from "react-hook-form";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./service/service";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


    const onSubmit = async (data) => {
      try {
         await loginUser(data); 
   
        alert("Login Successful");
        reset();
        navigate("/additem");
      } catch (err) {
        console.error(err.response ? err.response.data : err);
        alert("Login Failed");
        reset();
      }
    };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
