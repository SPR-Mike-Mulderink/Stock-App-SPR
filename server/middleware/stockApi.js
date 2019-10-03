export default (req, res, next) => {
  res.locals.data = `Mike is Winning`;
  next();
};