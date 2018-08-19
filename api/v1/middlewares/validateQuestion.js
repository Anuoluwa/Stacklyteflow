function validateQuestion(req, res, next) {
  let { title, body } = req.body;
  title = typeof title === 'string' && title.trim().lenght > 6;
  body = typeof body === 'string' && body.trim().length > 14;
  if (!title) {
    const err = res.status(400).json({
      message: 'Title is required, and cannot be less than 6 characters',
    });
    next(err);
  }
  if (!body) {
    const err = res.status(400).json({
      message: 'Body is required, and cannot be less than 15 characters',
    });
    next(err);
  }
  return next();
}

export default validateQuestion;
