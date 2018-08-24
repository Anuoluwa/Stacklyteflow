import pool from '../config/config';

export default class Questions {
  static async GetAllQuestions(req, res) {
    // const { id } = req.userid;
    const { rows } = await pool
      .query('SELECT * FROM questions');
    res.status(200).json({
      status: '200 OK',
      message: 'Operation successful!',
      questions: rows,
    });
  }

  static async GetOneQuestion(req, res) {
    // const { userId } = req.userid;
    const { id } = parseInt(req.params.id, 10);
    const { rows } = await pool
      .query('SELECT * FROM questions WHERE id = $1',
        [id]);
    res.status(200).json({
      status: '200 OK',
      message: 'Operation successful!',
      question: rows[0],
    });
  }
}
