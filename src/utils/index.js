import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await tmdbApi.get("/authentication/token/new");
    if (data.success) {
      const request_token = data.request_token;

      localStorage.setItem("request_token", request_token);

      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log("There was an error creating a token.");
    console.error(error);
  }
};

export const createSessionID = async () => {
  const token = localStorage.getItem("request_token");
  if (token) {
    try {
      const {
        data: { session_id },
      } = await tmdbApi.post("/authentication/session/new", {
        request_token: token,
      });

      localStorage.setItem("session_id", session_id);

      return session_id;
    } catch (error) {
      console.error(error);
    }
  }
};
