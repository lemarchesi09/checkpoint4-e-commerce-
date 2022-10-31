import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export const Register = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data, e) => {

      const newUser ={
        user: data.user,
        password: data.password,
        active: false,
      }
    }
    return(
    <section className="login__bg">
      <div >

      
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className="d-flex flex-column align-items-center border border-primary p-3 rounded" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>New Username:</label>
          <input
            className="form__inp"
            type="text"
            placeholder="Create New Username"
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
            placeholder="Create Password"
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

          <input className="form__sub__btn" type="submit" value="SIGN UP" />
          <p className="formu__signUp">
            Already have an account?{" "}
            <Link to="/" className="formu__signUp__link">
              LOG IN
            </Link>
          </p>
        </form>
      </div>
    </section>
    )
}