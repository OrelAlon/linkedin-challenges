import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password || !passwordConfirm)
      setMsg("All fields must be filled in");

    if (password !== passwordConfirm) {
      setMsg("password not match");
    }
    if (password.length < 8) {
      setMsg("password must be more than 8 char");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password'
        name='password-confirm'
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' />

      <h2> {msg}</h2>
    </form>
  );
}
