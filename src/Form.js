import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="email"
        name="email"
        value={props.formData.email}
        placeholder="Email address"
        onChange={props.onChange}
        className="input-text"
        required
      />
      {props.error.email && <span className="error-msg">{props.error.email}</span>}
      <input
        type="password"
        name="password"
        value={props.formData.password}
        placeholder="Password"
        onChange={props.onChange}
        className="input-text"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={props.formData.confirmPassword}
        placeholder="Confirm password"
        onChange={props.onChange}
        className="input-text"
        required
      />
      {props.formData.password !== props.formData.confirmPassword ? <span className="error-msg">The passwords do not match</span> : ""}
      <div className="checkbox-container">
        {" "}
        <input
          type="checkbox"
          id="joinedNewsletter"
          name="checkbox"
          checked={props.formData.checkbox}
          onChange={props.onChange}
          className="input-checkbox"
        />
        <label htmlFor="joinedNewsletter">I want to join the newsletter</label>
      </div>

      <button className="btn">Sign up</button>
    </form>
  );
}
