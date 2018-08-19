import answers from '../models/answers';
import questions from '../models/questions';
import collection from '../middlewares/helper';

export default class Answers {
  static setAnswer(req, res) {
    const questionId = parseInt(req.params.id, 10);
    const questionKey = collection.getOne(questions, questionId);
    const { answer } = req.body;
    if (questionKey < 1) {
      res.status(404).json({
        message: 'Resource not found',
      });
    }
    const newAnswer = {
      id: answers.length + 1,
      answer,
      questionId,
    };
    answers.push(newAnswer);
    return res.status(201).json({
      message: 'Answer created successfully',
      data: newAnswer,
      AllAnswers: answers,
    });
  }
}
