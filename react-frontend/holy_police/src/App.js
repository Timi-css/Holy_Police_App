import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, VehicleRegistration } from "./components";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<VehicleRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
