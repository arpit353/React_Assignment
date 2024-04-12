import React from "react";
import './Table.css'

function Table() {
  return (
    <div>
      <table className="table table-dark table-borderless">
        <tbody >
          <tr className="table-secondary">
            <td className="table-secondary table-background">01</td>
            <td className="table-secondary table-background">02</td>
            <td className="table-secondary table-background">03</td>
          </tr>
          <tr className="table-secondary">
            <td className="table-secondary table-background">We stay connected</td>
            <td className="table-secondary table-background">We believe in diversity & inclusion</td>
            <td className="table-secondary table-background">We celebrate success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;