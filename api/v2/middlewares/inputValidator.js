class ValidateInput {
  static QuestionInput(req, res, next) {
    const { title, body } = req.body;
    if (!title || title.length < 19 || title.length > 201) {
      return res.status(400).end('"title" must be a string with length between 50 and 200');
    }
    if (!body || body.length < 39 || body.length > 501) {
      return res.status(400).end('"body" must be a string with length between 40 and 500');
    }
    next();
  }

  static AnswerInput(req, res, next) {
    const { reply } = req.body;
    if (!reply || reply.length < 19 || reply.length > 201) {
      return res.status(400).end('"reply" must be a string with length between 50 and 200');
    }
    next();
  }

  static CommentInput(req, res, next) {
    const { comment } = req.body;
    if (!comment || comment.length < 19 || comment.length > 201) {
      return res.status(400).end('"comment" must be a string with length between 50 and 200');
    }
    next();
  }
}
export default ValidateInput;
