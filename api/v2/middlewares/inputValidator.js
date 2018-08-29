class ValidateInput {
  static QuestionInput(req, res, next) {
    const { title, body } = req.body;
    if (!title || title.length < 19) {
      return res.status(400)
        .end('"title" must be a string with length between 20 and 200');
    }
    if (title.length > 201) {
      return res.status(400)
        .end('"title" must be a string with length between 20 and 200');
    }
    if (!body || body.length < 19) {
      return res.status(400)
        .end('"body" must be a string with length between 20 and 500');
    }
    if (body.length > 201) {
      return res.status(400)
        .end('"body" must be a string with length between 20 and 500');
    }
    next();
  }

  static AnswerInput(req, res, next) {
    const { reply } = req.body;
    if (!reply || reply.length < 19 || reply.length > 201) {
      return res.status(400)
        .end('"reply" must be a string with length between 20 and 200');
    }
    if (reply.length > 201) {
      return res.status(400)
        .end('"reply" must be a string with length between 20 and 200');
    }
    next();
  }

  static CommentInput(req, res, next) {
    const { comment } = req.body;
    if (!comment || comment.length < 19 || comment.length > 201) {
      return res.status(400).end('"comment" must be a string with length between 50 and 200');
    }
    if (comment.length > 201) {
      return res.status(400)
        .end('"comment" must be a string with length between 50 and 200');
    }
    next();
  }
}
export default ValidateInput;
