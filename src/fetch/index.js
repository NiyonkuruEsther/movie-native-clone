import axios from "axios";

export const getItems = async (url, setData, responseFormat) => {
  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODM2MjliMzc4OGY4NThkYjNmMDZkZjExYzZhMzMwNyIsInN1YiI6IjY1ZDg2YmE4MTQ5NTY1MDE3YmY2MDNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0xPnrIFrlKiYkW2rRl0YuwR0ChK1T_GXQmOCgjSBvTk"
    }
  };

  await axios(options)
    .then((response) => {
      setData(response.data[responseFormat]);
      console.log(response.data["results"]);
    })
    .catch((error) => {
      console.error(error);
    });
};
