import axios from "axios";

export const getGithubContributions = async (username) => {
  const response = await axios.get(
    `https://github-contributions-api.jogruber.de/v4/${username}`
  );

  return response.data;
};