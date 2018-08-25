import pool from '../config/config';

export default class Questions {
  static async GetAllQuestions(req, res) {
    const { rows } = await pool
      .query('SELECT * FROM questions');
    res.status(200).json({
      status: '200 OK',
      message: 'Operation successful!',
      questions: rows,
    });
    if (rows.length == 0) {
      return res.status().json({ message: 'No question is available' });
    }
  }

  static async GetOneQuestion(req, res) {
    const { rows } = await pool
      .query('SELECT * FROM questions WHERE question_id = $1',
        [req.params.id]);
    res.status(200).json({
      status: '200 OK',
      message: 'Operation successful!',
      question: rows[0],
    });
  }
}
