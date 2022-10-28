import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import FormData from "./FormData";

const Form = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { amount, description, date };
    fetch("http://localhost:1337/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => alert("inserted"))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    const token = Cookies.get("token");
    fetch("http://localhost:1337/api/", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((datas) => setData(datas))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <br /> <br /> <br />
      <div>
        {data?.map((allData) => (
          <FormData alldata={allData} />
        ))}
      </div>
    </div>
  );
};

export default Form;
