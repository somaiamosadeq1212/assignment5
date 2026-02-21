import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

export default function App() {
  const [tab, setTab] = useState("login");
  const header =
    tab === "login"
      ? {
        title: "Welcome back",
        subtitle: "Log in with your email and password. No backend — we simulate submission.",
      }
      : {
        title: "Create your account",
        subtitle: "Register with basic validation (required fields + password match).",
      };


  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1 className="title">{header.title}</h1>
          <p className="subtitle">{header.subtitle}</p>
        </div>

        <div className="tabs"  >
          <button
            className="tabBtn"
            role="tab"
            aria-selected={tab === "login"}
            onClick={() => setTab("login")}
            type="button"
          >
            Login
          </button>
          <button
            className="tabBtn"
            aria-selected={tab === "register"}
            onClick={() => setTab("register")}
            type="button"
          >
            Register
          </button>
        </div>

        <div className="content" >
          {tab === "login" ? (
            <LoginForm onSwitchToRegister={() => setTab("register")} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setTab("login")} />
          )}
        </div>
      </div>
    </div>
  );
}
