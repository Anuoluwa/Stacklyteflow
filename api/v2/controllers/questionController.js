import pool from '../config/config';

export default class Questions {
  static async GetAllQuestions(req, res) {
    const { userId } = req.userid;
    const { rows } = await pool.query('SELECT * FROM users WHERE user_id=$1 ORDER BY id ASC', [userId]);
    res.status(200).json({
      status: 200,
      message: 'Operation successful!',
      questions: rows,
    });
  }


  static async GetOneQuestion(req, res) {
    const { userId } = req.userid;
    const { id } = parseInt(req.params.id, 10);
    const { rows } = await pool
      .query('SELECT * FROM users WHERE id = $1 AND user_id=$1 ORDER BY id ASC',
        [id, userId]);
    res.status(200).json({
      status: 200,
      message: 'Operation successful!',
      question: rows[0],
    });
  }
}
