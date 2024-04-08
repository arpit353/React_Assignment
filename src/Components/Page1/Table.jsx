import React from "react";

function Table() {
  return (
    <div>
      <table className="table table-dark table-borderless">
        <tbody>
          <tr className="table-secondary">
            <td className="table-secondary">01</td>
            <td className="table-secondary">02</td>
            <td className="table-secondary">03</td>
          </tr>
          <tr className="table-secondary">
            <td className="table-secondary">We stay connected</td>
            <td className="table-secondary">We believe in diversity & inclusion</td>
            <td className="table-secondary">We celebrate success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
