import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const VehicleList = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const response = await fetch("http://localhost:5000/api/users/vehiclelist");
    setName(await response.json());
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <table
        style={{
          borderBottom: "1px solid #999",
          width: "95%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <tbody>
          <tr style={{ borderBottom: "4px solid black" }}>
            <th style={{ borderBottom: "4px solid black" }}>Name</th>
            <th style={{ borderBottom: "4px solid black" }}>Plate Number</th>
            <th style={{ borderBottom: "4px solid black" }}>Contact</th>
          </tr>
          {name.map((data) => {
            return (
              <tr
                style={{
                  borderBottom: "0.5px solid #000",
                }}
              >
                <td
                  style={{
                    textAlign: "center",
                    borderBottom: "0.5px solid #555",

                    padding: "5px",
                  }}
                >
                  {data.FullName}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    borderBottom: "0.5px solid #555",
                    padding: "5px",
                  }}
                >
                  {data.NumberPlate}
                </td>
                <td
                  style={{
                    borderBottom: "0.5px solid #555",
                  }}
                >
                  <a
                    href="/"
                    style={{
                      color: "#A02064",
                      textDecoration: "none",
                    }}
                  >
                    {data.Phone}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
