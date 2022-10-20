import React from "react";

const VehicleList = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <table style={{ border: "1px solid #999", width: "95%" }}>
        <tr style={{ borderBottom: "4px solid black" }}>
          <th style={{ borderBottom: "4px solid black" }}>Name</th>
          <th style={{ borderBottom: "4px solid black" }}>Plate Number</th>
          <th style={{ borderBottom: "4px solid black" }}>Contact</th>
        </tr>
        <tr>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            James Milner
          </td>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            CGX-2453
          </td>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            123-456-7890
          </td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            Timi Alabi
          </td>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            CGX-2453
          </td>
          <td
            style={{
              textAlign: "center",
              borderBottom: "0.5px solid #999",
              padding: "5px",
            }}
          >
            587-581-9115
          </td>
        </tr>
      </table>
    </div>
  );
};

export default VehicleList;
