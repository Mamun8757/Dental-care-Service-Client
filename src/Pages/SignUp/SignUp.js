import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("registered user", user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div>
      <div className="hero py-10 bg-slate-100">
        <div className="hero-content w-full flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/log-in" className="label-text-alt link link-hover">
                    Already, have an account? Login Here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn headerBtn-color">Register</button>
              </div>
            </form>
            {/* <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success"
            >
              Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
