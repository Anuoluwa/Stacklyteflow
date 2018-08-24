import pool from '../config/config';

export default class Questions {
  static async GetAllQuestions(req, res) {
    const { userId } = req.user.id;
    const { rows } = await pool
      .query('SELECT * FROM questions AND user_id=$1 ORDER BY id ASC',
        [userId]);
    res.status(200).json({
      message: 'Operation was Successful',
      Question: rows[0],
    });
  }

  static async GetOneQuestion(req, res) {
    const { userId } = req.user.id;
    const { id } = parseInt(req.params, 10);
    const { rows } = await pool
      .query('SELECT * FROM questions WHERE id = $1 AND user_id=$2 ORDER BY id ASC',
        [id, userId]);
    res.status(200).json({
      message: 'Operation was successful',
      Question: rows[0],
    });
  }
}
