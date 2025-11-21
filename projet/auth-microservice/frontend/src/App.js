import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div>
      {page === "signup" && <SignUp />}
      {page === "signin" && <SignIn />}
      <button onClick={()=>setPage(page==="signup"?"signin":"signup")}>
        Switch Page
      </button>
    </div>
  );
}

export default App;
