import pool from '../config/config';

export default class Questions {
  static async GetAllQuestions(req, res) {
    const { rows } = await pool.query('SELECT * FROM users');
    res.status(200).json({
      status: 200,
      message: 'Operation successful!',
      question: rows,
    });
  }


  static async GetOneQuestion(req, res) {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.status(200).json({
      status: 200,
      message: 'Operation successful!',
      question: rows[0],
    });
  }
}
