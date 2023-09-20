import { useState, useEffect } from "react";

import axios from "axios";

function Parcelas() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await axios.get(
          "https://4fkarxqfid.execute-api.us-east-1.amazonaws.com/dev/hello"
        );

        const responseData = response.data;


        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); 
  console.log(data);
  return (
    <div className='App'>
      <h1>Example GET 1</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Parcelas;
