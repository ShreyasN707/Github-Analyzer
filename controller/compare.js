// controller/compare.js
const { analyzerfetch } = require('./apifetch');
require('dotenv').config();

const compare = async (req, res) => {
  const user1 = req.body.user1;
  const user2 = req.body.user2;


  if (!user1) {
    return res.render("index", { error: "Please enter a username", data: null });
  }

  if (user1 && !user2) {
    let result = await analyzerfetch(user1);
    console.log(`New request on PORT: ${process.env.PORT}`)
    return res.render('result', { user: result});
  }

  if (user1 && user2) {
    const result1 = await analyzerfetch(user1);
    const result2 = await analyzerfetch(user2);
    // You can combine the results if needed or send both
    return res.render('compared', { data: { user1: result1, user2: result2 }, error: null });
  }

};

module.exports = { compare };
