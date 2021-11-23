import { signIn } from "../actions/actions";
import { useDispatch } from "react-redux";

const FormSignIn = () => {
  const dispatch = useDispatch();
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    dispatch(signIn({ name: "Lorena", email: "lorena@gmail.com" }));
  };
  return (
    <div className="spacing">
      <form className="column-content" onSubmit={handleSubmitForm}>
        <input className="input-form" placeholder="Email"></input>
        <input className="input-form" placeholder="Password"></input>

        <div className="row-content spacing">
          <button className="btn" type="submit">
            Sign In
          </button>
          <button className="btn-outlined">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
