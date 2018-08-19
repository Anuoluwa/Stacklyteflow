function validateAnswer(req, res, next) {
  let { answer } = req.body;
  answer = typeof answer === 'string' && answer.trim().length > 15;
  if (!answer) {
    const err = res.status(400).json({
      message: 'Answer is required, and cannot be less than 6 characters',
    });
    next(err);
  }
  return next();
}

export default validateAnswer;
