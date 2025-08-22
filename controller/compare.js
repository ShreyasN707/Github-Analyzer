const { cache } = require('./Apicaching')
const { analyzerfetch } = require('./apifetch');
require('dotenv').config();

const compare = async (req, res) => {
  const user1 = req.body.user1;
  const user2 = req.body.user2;

  //single mode user data separator
  if (!user1) {
    return res.status(400).render("index", { error: "Please enter a username", data: null });
  }

  if (user1 && !user2) {

    //cahing and checking the cache
    let cachedUser1 = cache.get(user1);

    if (cachedUser1) {

      return res.status(200).render('result', { user: cachedUser1 });
    }

    //fetching
    let result = await analyzerfetch(user1);

    cache.set(user1, result) //setting the cache of user 1

    console.log(`New request on PORT: ${process.env.PORT}`)
    return res.status(200).render('result', { user: result });
  }

  //compare mode user data separator
  if (user1 && user2) {

    let caheresult1 = cache.get(user1);//get user1 cache if exist
    let caheresult2 = cache.get(user2);//get user2 cache if exist

    if (!caheresult1) {

      const result1 = await analyzerfetch(user1);
      cache.set(user1, result1) //setting cache for user1
      caheresult1 = result1;
    }

    if (!caheresult2) {

      const result2 = await analyzerfetch(user2);
      cache.set(user2, result2) //setting cache for user2
      caheresult2 = result2;
    }



    return res.status(200).render('compared', { data: { user1: caheresult1, user2: caheresult2 }, error: null });
  }

};

module.exports = { compare };
