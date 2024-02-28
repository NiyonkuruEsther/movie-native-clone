import axios from "axios";

const useOptions = (url) => {
  return {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODM2MjliMzc4OGY4NThkYjNmMDZkZjExYzZhMzMwNyIsInN1YiI6IjY1ZDg2YmE4MTQ5NTY1MDE3YmY2MDNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0xPnrIFrlKiYkW2rRl0YuwR0ChK1T_GXQmOCgjSBvTk"
    }
  };
};
export const getMovies = async (url, setData) => {
  try {
    await axios(useOptions(url)).then((response) => {
      setData({
        movies: response.data.results
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const getGenre = async (url, setData) => {
  try {
    await axios(useOptions(url)).then((response) => {
      setData(response.data.genres);
    });
  } catch (error) {
    console.error(error);
  }
};
