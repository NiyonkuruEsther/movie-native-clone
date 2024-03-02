import AsyncStorage from "@react-native-async-storage/async-storage";
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

const storeToken = async () => {
  await AsyncStorage.setItem("token-user", "tokenuser");
};

export const getMovies = async (url, setData) => {
  try {
    await axios(useOptions(url)).then((response) => {
      setData({
        movies: response.data.results
      });
      // console.log(response.data.results);
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

export const getAllPeople = async (allPeopleUrl, setData) => {
  try {
    let allPeople = [];
    let currentPage = 1;

    while (true) {
      const response = await axios(useOptions(`${allPeopleUrl}page=${1}`));

      for (const person of response.data.results) {
        const { data } = await axios(
          useOptions(
            `https://api.themoviedb.org/3/person/${person.id}/movie_credits?language=en-US`
          )
        );

        const personDetails = { ...person, details: { ...data } };
        allPeople.push(personDetails);
      }

      if (response.data.page === response.data.total_pages) {
        break;
      }

      currentPage++;
    }

    setData(allPeople);
  } catch (error) {
    console.error(error, "error");
  }
};
