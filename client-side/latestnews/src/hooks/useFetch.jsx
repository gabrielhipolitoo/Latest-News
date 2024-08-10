import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [response, setResponse] = useState();
  const [lengthDocuments, setlengthDocuments] = useState();

  const fetchApi = async (data, method) => {
    const configRequest = {
      sendMail: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      lengthDocuments: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    };
    try {
      const response = await fetch(
        "http://localhost:3000/lengthdocuments",
        configRequest[method],
      );
      const result = await response.json();
      setlength(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return { lengthDocuments, response, setResponse, fetchApi };
}
export default UseFetch;
