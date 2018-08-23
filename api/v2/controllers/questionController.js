import pool from '../config/config';
/** for database testing */
export default class Questions {
  static GetAllQuestions(req, res) {
    pool.query('SELECT * FROM users', (err, response) => {
      if (err) {
        throw err;
      }
      return res.status(200).json(response.rows);
    });
  }
}
