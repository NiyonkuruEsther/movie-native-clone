import axios from "axios";

export const getItems = async (url, setData) => {
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
    // .then((response) => response.json())
    .then((response) => {
      setData(response.data.results);
      // console.log(response.data.results.map((item) => item.poster_path));
    })
    .catch((error) => {
      console.error(error);
    });
};
