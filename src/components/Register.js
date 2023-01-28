import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import "../styles/login.css";
import Card from "react-bootstrap/Card";

export const Register = () => {
  // Firestore Users DB
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  // Firebase Register auth
  const registerUser = async (name, email, password, role) => {
    const result = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      return userCredential;
    });
    const userRef = doc(firestore, `users/${result.user.uid}`);
    setDoc(userRef, { name, email, role, id: result.user.uid });
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = data.role;
    try {
      registerUser(name, email, password, role);
      alert("Creado con exito");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2 className="d-flex justify-content-center pt-2">Create a New User</h2>
      <div className="d-flex justify-content-center my-3">
        <Card>
          <form
          className="d-flex flex-column align-items-center p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Name:</label>
          <input
            className="form__inp"
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
              maxLength: {
                value: 15,
                message: "Field must be less than 15 characters",
              },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label>New Email:</label>
          <input
            className="form__inp"
            type="email"
            placeholder="example@something.com"
            autoComplete="off"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              maxLength: {
                value: 20,
                message: "Field must be less than 20 characters",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
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
          <label>Role</label>
          <select
            {...register("role", {
              required: {
                value: true,
                message: "Role is required",
              },
            })}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          {errors.role && <span>{errors.role.message}</span>}
          <input className="form__sub mt-4" type="submit" value="SIGN UP" />
          <p className="formu__signUp mt-4">
            Already have an account?{" "}
            <Link to="/login" className="formu__signUp__link">
              LOG IN
            </Link>
          </p>
        </form>
          </Card>
      </div>
    </section>
  );
};
