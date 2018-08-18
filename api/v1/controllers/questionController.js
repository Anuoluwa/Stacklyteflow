import questions from '../models/questions';

const answers = [];

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
      title: req.body.title,
      body: req.body.body,
    };
    // if (typeof req.body.title !== 'undefined' && typeof req.body.title !== 'undefined') {
    //   res.status(404).json({ message: 'Not created, No empty values' });
    // }
    questions.push(question);
    res.status(201).json({ message: 'Your question was created successfully', data: questions });
  }

  static setAnswer(req, res) {
    // const questionId = req.params.id;
    const answer = {
      id: answers.length + 1,
      title: req.body.title,
    };
    /* eslint-disable */
    // const question = questions.filter(r => r.id == questionId)[0];
    /* eslint-enable */
    // const arrIndex = questions.indexOf(question);
    answers.push(answer);
    res.status(200).json({ data: answers, data2: questions });
  }
}
