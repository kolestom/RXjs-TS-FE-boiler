import { FC, useEffect } from "react";
import { $messages, loadData } from "../states/messages";
import useRXjs from "../hooks/useRXjx";
import { logout, $user } from "../states/user";
import { fullUrl } from "../config";
import { getSecret } from "../api/own";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Callback } from "./Callback";
import { Protected } from "./Route";

const Main: FC = () => {
  const messages = useRXjs($messages);
  const user = useRXjs($user);

  const navigate = useNavigate()
  navigate("/", {
    
  })

  return (
    <main>
      <div>Main</div>
      {user && <p>Hello, {user.email}</p>}
      <a href={fullUrl}>Login</a>
      <button onClick={logout}>Logout</button>

      <Routes>
        <Route
          path="/dashboard"
          element={
            <Protected hasAccess={!!user}>
              <div>Dashboard</div>
            </Protected>
          }
        />
        <Route path="/first" element={<div>First</div>} />
        <Route path="/second" element={<div>Second</div>} />
        <Route path="/third" element={<div>Third</div>} />
        <Route path="/callback" element={<Callback />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <button onClick={getSecret}>Secret</button>
      <button onClick={loadData}>Load Data</button>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <h2>Sender: {message.sender}</h2>
            <h2>Receiver: {message.receiver}</h2>
            <p>Message: {message.message}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
