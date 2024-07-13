import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth-service";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "", // Use "email" instead of "mail"
    password: "",
    role: "", // Add a role field if necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, role } = userData; // Ensure "email" is used here
      await authService.register(name, email, password, role); // Adjust authService function signature if necessary
      console.log("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email} // Ensure this matches the state property
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Rôle
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;
