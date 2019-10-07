module.exports = (req, res, next) => {

  const { API_KEY, fetch } = require('./middleware');

  Promise.all(req.body.stocksArr.map(stock =>
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(json => { return { value: json['Global Quote'] ? json['Global Quote']['05. price'] : `Failed to Fetch`, stock: stock } })
      .catch(error => {
        console.log(`Caught error in Fetch Request for ${stock}. The returned error is --> : ${error}`);
      })
  ))
    .then(array => {
      res.locals.stocksValueArr = array;
      return next();
    })
    .catch(error => {
      console.log(`Caught error in Promise.all Fetch Request. Tee returned error is --> : ${error}`);
    });

};
