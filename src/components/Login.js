import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/login.css";
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

export const Login = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);

  // Set role for user Logged
  async function getUserFirestore(uid) {
    const docRef = doc(db, `users/${uid}`);
    const docSnap = await getDoc(docRef);
    const role = docSnap.data().role;
    return role;
    // Conseguimos el rol del usuario
  }

  const setUserWithFirestoreRole = (userFromFirebase) => {
    // Traer el usuario por ID - Usar un metodo getUserFirestore
    getUserFirestore(userFromFirebase.uid).then((role) => {
      // Armar el objeto con el usuario y el rol
      const userWithRole = {
        uid: userFromFirebase.uid,
        email: userFromFirebase.email,
        role: role,
      };
      setUser(userWithRole);
      if (userWithRole?.role === "admin") {
        Swal.fire({
          title: "Log in success!",
          text: `Welcome ${userWithRole.email.toLowerCase()}`,
          icon: "success",
          confirmButtonText: "Go ahead",
          confirmButtonColor: "#1dcf06",
          cancelButtonColor: "#d33",
        }).then((result) => {
          // Una vez logeado, navegar al dashboard
          result.isConfirmed && navigate("/admin/productlist");
        });
      } else {
        Swal.fire({
          title: "Log in success!",
          text: `Welcome ${userWithRole.email.toLowerCase()}`,
          icon: "success",
          confirmButtonText: "Go ahead",
          confirmButtonColor: "#1dcf06",
          cancelButtonColor: "#d33",
        }).then((result) => {
          // Una vez logeado, navegar al home
          result.isConfirmed && navigate("/");
        });
      }
    });
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const email = data.email;
    const password = data.password;

    try {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        onAuthStateChanged(auth, (userFromFirebase) => {
          if (userFromFirebase) {
            if (!user) {
              setUserWithFirestoreRole(userFromFirebase);
            } else {
              setUser(null);
            }
          }
        });
      });
    } catch (error) {}
  };

  return (
    <div className="d-flex flex-column align-items-center pt-2">
      <div className="">
        <h2>Welcome to Free Market</h2>
        <p className="text-center">You'll find everything you need</p>
      </div>
      <div className="form__cont my-3">
        <Card>
          <form
          className="d-flex flex-column align-items-center p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Email:</label>
          <input
            className="form__inp"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              maxLength: {
                value: 30,
                message: "Field must be less than 30 characters",
              },
            })}
          />

          {/* errors will return when field validation fails  */}
          {errors.email && <span>{errors.email.message}</span>}

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

          <input className="form__sub mt-4" type="submit" value="LOG IN" />
          <p className="formu__signUp mt-4">
            Don't have an account yet?{" "}
            <Link to="/register" className="formu__signUp__link">
              SIGN UP
            </Link>
          </p>
        </form>
        </Card>
        
      </div>
    </div>
  );
};
