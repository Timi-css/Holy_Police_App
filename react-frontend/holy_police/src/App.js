import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  HomePage,
  RegisterVehicle,
  SuccessPage,
  Login,
  VehicleList,
} from "./components";

function App() {
  const [data, setData] = React.useState(null);
  console.log(data);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/registervehicle" element={<RegisterVehicle />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/login:id" element={<Login />} />
        <Route path="/vehiclelist" element={<VehicleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
