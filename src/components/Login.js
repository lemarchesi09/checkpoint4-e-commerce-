import { Register } from "./Register";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/login.css";
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, doc, getDocs, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { user, setUser, useUserContext } from "../context/userContext";
import Swal from "sweetalert2";

export const Login = () => {
  const { user, setUser } = useUserContext();
  const [usersDB, setUsersDB] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);

  // console.log('User en login', userLogged);

  const usersCollection = collection(db, "users");

  const getUsers = async () => {
    const dataUsers = await getDocs(usersCollection);
    const usersList = dataUsers.docs;
    console.log("usersDB", usersList);
    setUsersDB(usersList);
    console.log(usersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // onAuthStateChanged(auth, (userFromFirebase) => {
  //     if (userFromFirebase){
  //         setUser(userFromFirebase)
  //     }else {
  //         setUser(null);
  //     }
  // })

  // Set role for user Logged
  const getUserFirestore = async (uid) => {
    const docRef = doc(db, `users/${uid}`);
    const docSnap = await getDoc(docRef);
    const role = docSnap.data().role;
    return role;
    // Conseguimos el rol del usuario
  };

  const setUserWithFirestoreRole = (userFromFirebase) => {
    // Traer el usuario por ID - Usar un metodo getUserFirestore
    getUserFirestore(userFromFirebase.uid).then((role) => {
      // console.log("role", role);
      // Armar el objeto con el usuario y el rol
      const userWithRole = {
        uid: userFromFirebase.uid,
        email: userFromFirebase.email,
        role: role,
        
      };
      console.log("user with role", userWithRole);
      setUser(userWithRole);
      if (userWithRole?.role === "admin") {
        console.log("es admin");
        Swal.fire({
          title: "Log in success!",
          text: `Welcome ${userWithRole.email.toUpperCase()}`,
          icon: "success",
          confirmButtonText: "Go ahead",
          confirmButtonColor: "#8c7851",
          cancelButtonColor: "#d33",
        }).then((result) => {
          // Una vez logeado, navegar al dashboard
          result.isConfirmed && navigate("/admin")
        });
      } else {
        console.log("es usuario");
        Swal.fire({
          title: "Log in success!",
          text: `Welcome ${userWithRole.email.toUpperCase()}`,
          icon: "success",
          confirmButtonText: "Go ahead",
          confirmButtonColor: "#8c7851",
          cancelButtonColor: "#d33",
        }).then((result) => {
          // Una vez logeado, navegar al dashboard
          result.isConfirmed && navigate("/")
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
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const userLogged = {
          email: userCredential.user.email,
          id: userCredential.user.uid,
        };
        console.log("userCredential", userCredential);
        console.log("userLogged", userLogged);

        onAuthStateChanged(auth, (userFromFirebase) => {
          console.log("userFromFirebase.uid", userFromFirebase.uid);
          if (userFromFirebase) {
            if (!user) {
              setUserWithFirestoreRole(userFromFirebase);
              console.log("user desde onAuth setUserwithRole", user);
            } else {
              setUser(null);
            }
          }

          //     // const userFinded = usersDB.find(user => user.id === userLogged.id)
          // if (userFinded) {
          //     // Seting user in Context with setUser imported
          //     console.log(userFinded);
          //     setUser(userFinded)
          //     console.log('user logged successfully', user.role);
          //     });
        });
        // Esta hecho, pero tiene que ser asincrono
        console.log("user fuera de setuserwithrole", user);
      });
    } catch (error) {
      console.log("Error", error);
    }
    console.log("user antes de salir de setuserwithrole", user);
  };

  return (
    <div className="d-flex flex-column align-items-center pt-2">
      <div className="">
        <h2>Welcome to Free Market</h2>
        <p>You'll find everything you need</p>
      </div>
      <div className="form__cont">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          className="d-flex flex-column align-items-center border border-top-0 border-primary p-3 rounded-bottom"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}
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
  );
};
