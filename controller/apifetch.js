const axios = require('axios');
require('dotenv').config();

const analyzerfetch = async (user1) => {
  const token = process.env.TOKEN;

  const query = `
    query {
      user(login: "${user1}") {
        name
        bio
        login
        avatarUrl
        followers {
          totalCount
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
          nodes {
            name
            stargazerCount
            forkCount
            languages(first: 5) {
              nodes {
                name
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await axios.post(
    'https://api.github.com/graphql',
    { query },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const user = response.data.data.user;

  // Process languages
  let languageCount = {};
  user.repositories.nodes.forEach(repo => {
    repo.languages.nodes.forEach(lang => {
      languageCount[lang.name] = (languageCount[lang.name] || 0) + 1;
    });
  });

  // Process commit activity
  const activityLabels = [];
  const activityData = [];
  user.contributionsCollection.contributionCalendar.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      activityLabels.push(day.date);
      activityData.push(day.contributionCount);
    });
  });

  // Calculate total stars
  let totalStars = 0;
  user.repositories.nodes.forEach(repo => {
    totalStars += repo.stargazerCount;
  });

  return {
    name: user.name,
    login: user.login,
    bio: user.bio,
    avatarUrl: user.avatarUrl,
    followers: { totalCount: user.followers.totalCount },
    repositories: { nodes: user.repositories.nodes },
    totalStars,
    activity: {
      labels: activityLabels,
      data: activityData,
    },
    languages: {
      labels: Object.keys(languageCount),
      data: Object.values(languageCount),
    },
  };
};

module.exports = { analyzerfetch };
