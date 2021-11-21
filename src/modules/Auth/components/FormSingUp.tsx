import { useDispatch } from "react-redux";
import { signUp } from "../actions/actions";

const FormSignUp = () => {
  const dispatch = useDispatch();

  // TODO: change any
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    dispatch(signUp({ name: "Lorena", email: "lorena@gmail.com", password: "password"}));
  };
  return (
    <div className="spacing">
      <form className="column-content" onSubmit={handleSubmitForm}>
        <input className="input-form" placeholder="Name"></input>
        <input className="input-form" placeholder="Email"></input>
        <input className="input-form" placeholder="Password"></input>
        <label>
          <input type="checkbox"></input>I agree to the{" "}
          <span className="primary-text">Terms</span> and{" "}
          <span className="primary-text">Privacy Policy</span>
        </label>

        <div className="row-content spacing">
          <button className="btn" type="submit">Sign Up</button>
          <button className="btn-outlined">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
