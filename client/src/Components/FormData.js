import React from "react";

const FormData = (props) => {
  const { amount, description, date, _id } = props.alldata;
  const deleteone = (_id) => {
    fetch("http://localhost:1337/api/delete/" + _id, {
      method: "DELETE",
    })
      .then(() => alert("deleted"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr key={_id}>
            <td>{amount}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>
              <button
                onClick={() => {
                  deleteone(_id);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
