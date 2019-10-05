const fetch = require('node-fetch');
const API_KEY = `PXZD0QBQQZTN4V5U`;

module.exports = (req, res, next) => {
  Promise.all(req.body.stocksArr.map(stock =>
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(json => { return { value: json['Global Quote'] ? json['Global Quote']['05. price'] : `Failed to Fetch`, stock: stock } })
  ))
    .then(arr => {
      res.locals.stocksValueArr = arr;
      return next();
    });
};
