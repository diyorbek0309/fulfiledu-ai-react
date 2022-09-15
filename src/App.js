import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [count, setCount] = useState(1);

  useEffect(() => {
    console.log("useEffect ishladi");
    if (count % 10 === 0) {
      alert("Salom");
    }
  }, [count]);

  setInterval(() => {
    setCount(++count);
  }, 1000);

  return (
    <div className="App">
      {/* <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="students/:studentID" element={<StudentProfile />} />
      </Routes> */}
      <h1>Hozirgi qiymat: {count}</h1>
    </div>
  );
}

export default App;
