import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const storeToken = async () => {
  await AsyncStorage.setItem(
    "token_user",
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODM2MjliMzc4OGY4NThkYjNmMDZkZjExYzZhMzMwNyIsInN1YiI6IjY1ZDg2YmE4MTQ5NTY1MDE3YmY2MDNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0xPnrIFrlKiYkW2rRl0YuwR0ChK1T_GXQmOCgjSBvTk"
  );
};

storeToken();

const useOptions = async (url) => {
  const token = await AsyncStorage.getItem("token_user");
  return {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  };
};

export const getMovies = async (url, setData) => {
  try {
    await axios(await useOptions(url)).then((response) => {
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
    await axios(await useOptions(url)).then((response) => {
      setData(response.data.genres);
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllPeople = async (allPeopleUrl, setData) => {
  // const [pagesDone, setPagesDone] = useState(true);
  try {
    let allPeople = [];
    let currentPage = 1;

    while (true) {
      // console.log(allPeopleUrl);

      const response = await axios(
        await useOptions(`${allPeopleUrl}page=${40}`)
      );

      for (const person of response.data.results) {
        // console.log(currentPage, person.id);
        console.log(
          response.data.page === response.data.total_pages,
          person.id
        );

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
        // setPagesDone(false)
      }

      currentPage++;
    }

    setData(allPeople);
  } catch (error) {
    console.error(error, "error");
  }
};
