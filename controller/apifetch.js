const axios = require('axios');

const analyzerfetch = async (req, res) => {
    const username = req.body.username;
    const token = process.env.TOKEN;

    if (!username) {
        return res.render("index", { error: "Please enter a username", data: null });
    }

    const query = `
        query {
            user(login: "${username}") {
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

    let totalStars = 0;
    let totalForks = 0;
    let languages = {};

    user.repositories.nodes.forEach(repo => {
        totalStars += repo.stargazerCount;
        totalForks += repo.forkCount;

        repo.languages.nodes.forEach(lang => {
            languages[lang.name] = (languages[lang.name] || 0) + 1;
        });
    });

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

    console.log(result)
    // res.json({ data: result, error: null });
    res.status(200).render('result',{data:result,error:null})
};

module.exports = { analyzerfetch };
