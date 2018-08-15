import questions from '../models/db';

export default class Questions {
  static getAllQuestions(req, res) {
    if (!questions) {
      res.status(404).json({ message: 'No resource found' });
    } else res.json(questions);
  }
}
