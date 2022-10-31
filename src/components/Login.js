import { Register } from "./Register"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../styles/login.css";

export const Login = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div className="d-flex flex-column align-items-center">
            Home
            <div className="">
                <h1>Welcome to Free Market</h1>
                <p>You'll find everything you need</p>
            </div>
            <div className="form__cont">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="d-flex flex-column align-items-center border border-top-0 border-primary p-3 rounded-bottom" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>Username:</label>
                <input
                className="form__inp"
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
                {...register("user", {
                    required: {
                    value: true,
                    message: "Username is required",
                    },
                    maxLength: {
                    value: 20,
                    message: "Field must be less than 20 characters",
                    },
                })}
                />
    
                {/* errors will return when field validation fails  */}
                {errors.user && <span>{errors.user.message}</span>}
    
                <label>Password:</label>
                <input
                className="form__inp"
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                {...register("password", {
                    required: {
                    value: true,
                    message: "Password is required",
                    },
                    maxLength: {
                    value: 20,
                    message: "Field must be less than 20 characters",
                    },
                    minLength: {
                    value: 6,
                    message: "Field must contain more than 6 characters",
                    },
                })}
                />
                {errors.password && <span>{errors.password.message}</span>}
    
                <input className="form__sub" type="submit" value="LOG IN" />
                <p className="formu__signUp">
                Don't have an account yet?{" "}
                <Link to="/register" className="formu__signUp__link">
                    SIGN UP
                </Link>
                </p>
            </form>
            </div>
        </div>
    )
}

