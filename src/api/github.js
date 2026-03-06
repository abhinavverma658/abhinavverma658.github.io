import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

export const getGithubContributions = async (username) => {
  const query = {
    query: `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `
  };

  const response = await axios.post(
    "https://api.github.com/graphql",
    query,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    }
  );

  return response.data.data.user.contributionsCollection
    .contributionCalendar.totalContributions;
};
