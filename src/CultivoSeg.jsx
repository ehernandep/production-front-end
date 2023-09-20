import { useState, useEffect } from "react";

import axios from "axios";

function CultivoSeg() {
  // Define a state variable to store the data from the GET request
  const [data, setData] = useState([]);

  /* useEffect(() => {
    // Create an asynchronous function to make the GET request
    async function fetchData() {
      try {
        // Use Axios to make a GET request to a URL (replace with your API endpoint)
        const response = await axios.get(
          "https://4fkarxqfid.execute-api.us-east-1.amazonaws.com/dev/hello",
          {
            withCredentials: true, // Send cookies or credentials if necessary
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:5173", // Make sure this matches your configured CORS origins
              // Add any other headers if needed
            },
          }
        );
        // Extract the data from the response
        const responseData = response.data;

        // Update the state with the fetched data
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // Call the fetchData function when the component mounts
    fetchData();
  }, []); */
  console.log(data);
  return (
    <div className='App'>
      <h1>Example GET 2</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CultivoSeg;
