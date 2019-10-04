const fetch = require('node-fetch');
const API_KEY = `PXZD0QBQQZTN4V5U`;

module.exports = (req, res, next) => {
  const stocksArr = req.body.stocksArr;
  const stocksValueArr = [];

  async function fetchAsync() {
    for (let i = 0; i < stocksArr.length; i += 1) {
      const stock = stocksArr[i];
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`);
      const data = await response.json();
      const globalQuote = data['Global Quote'] ? data['Global Quote']['05. price'] : data;
      stocksValueArr.push({ stock, globalQuote });
    };
  };

  if (stocksArr == undefined || stocksArr.length <= 0) {
    next();
  } else {
    fetchAsync()
      .then(() => {
        res.locals.stocksValueArr = stocksValueArr;
        next()
      });
  };
};
