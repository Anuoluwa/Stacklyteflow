import questions from '../models/db';

export default class Questions {
  static async AllQuestions(req, res) {
    try {
      return await res.json(questions);
    } catch (err) {
      res.status(404).json({ message: 'Resource not found!', error: err });
    }
  }
}
