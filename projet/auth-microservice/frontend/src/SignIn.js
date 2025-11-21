import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://auth-backend.localhost/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    });
    if(res.status === 200) {
      alert("Connexion réussie !");
      window.location.href = "http://heart-frontend.localhost";
    } else {
      alert("Erreur login/password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
    </form>
  );
}
