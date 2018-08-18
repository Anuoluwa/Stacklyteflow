import questions from '../models/db';

export default class Questions {
  static async GetAllQuestions(req, res) {
    try {
      return await res.json(questions);
    } catch (err) {
      res.status(404).json({ err });
    }
  }

  static async GetOneQuestion(req, res) {
    try {
      const questionId = await req.params.id;
      /* eslint-disable */
      const questionItem = await questions.filter(question => question.id == questionId)[0];
      /* eslint-enable */
      if (typeof questionItem === 'undefined') {
        res.status(404).json({ message: 'Question does not exist!' });
      }
      return res.status(200).json(questionItem);
    } catch (err) {
      res.status(404).json({ message: err });
    }
  }

  static setQuestion(req, res) {
    const question = {
      id: questions.length + 1,
      date: req.body.date,
      title: req.body.title,
      body: req.body.body,
    };
    questions.push(question);
    res.status(201).json({ questions });
  }

  // static async setQuestions(req, res) {
  //   const question = {
  //     id: questions.length + 1,
  //     date: req.body.date,
  //     title: req.body.title,
  //     body: req.body.body,
  //     answer: req.body.answer,
  //   };
  //   const result = await questions.push(question);
  //   res.status(201).json(result);
  // }
}
