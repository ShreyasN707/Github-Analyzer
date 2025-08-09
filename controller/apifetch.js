// ✅ analyzerfetch.js
const axios = require('axios');

const analyzerfetch = async (username) => {
    const token = process.env.TOKEN;

    const query = `
        query {
            user(login: "${user1}") {
                name
                bio
                avatarUrl
                login
                followers {
                    totalCount
                }
                repositories(first: 100, ownerAffiliations: OWNER) {
                    totalCount
                    nodes {
                        stargazerCount
                        forkCount
                        languages(first: 5) {
                            nodes {
                                name
                            }
                        }
                    }
                }
                pullRequests {
                    totalCount
                }
                issues {
                    totalCount
                }
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                    }
                }
            }
        }
    `;

    const response = await axios.post(
        'https://api.github.com/graphql',
        { query },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const user = response.data.data.user;

    // processing logic...

    const result = {
        name: user.name,
        username: user.login,
        avatar: user.avatarUrl,
        bio: user.bio,
        followers: user.followers.totalCount,
        publicRepos: user.repositories.totalCount,
        totalCommits: user.contributionsCollection.contributionCalendar.totalContributions,
        totalPRs: user.pullRequests.totalCount,
        totalIssues: user.issues.totalCount,
        totalStars,
        totalForks,
        languages,
    };

    return result;
};

module.exports = { analyzerfetch };
