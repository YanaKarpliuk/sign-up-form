import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import Notiflix, { Notify } from "notiflix";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [result, setResult] = useState({ completed: false });

  function handleChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
    validateInput(e);
  }

  function validateInput(e) {
    setError((prev) => {
      const stateObj = { ...prev, [e.target.name]: e.target.value };
      if (e.target.name === "email") {
        if (!e.target.value) {
          stateObj[e.target.name] = "Please enter your email";
        } else {
          stateObj[e.target.name] = "";
        }
      }
      return stateObj;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Notify.failure('The passwords do not match')
    } else {
      setResult((prev) => {
        return {
          ...prev,
          completed: !prev.completed,
        };
      });
    }
  }

  return (
    <div className="App">
      {result.completed ? (
        <Result checkOn={formData.checkbox} />
      ) : (
        <Form
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
