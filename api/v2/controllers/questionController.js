import pool from '../config/config';

/** Class representing a question. */
export default class Questions {
  /**
 * /GET all questions
 *
 * @async
 * @function get all questions in the database
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
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

  /**
 * /GET a single question
 *
 * @async
 * @function get a question in the database
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
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

  /**
 * /GET a single question
 *
 * @async
 * @function post a question in the database with user id
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
  static async createQuestion(req, res) {
    await pool.query(`INSERT INTO questions (title, body, user_id,
       created_at) VALUES($1, $2, $3, Now()) RETURNING *`,
    [req.body.title, req.body.body, req.userid], (err, result) => {
      if (err) throw err;
      res.status(200).json({
        status: '200 OK',
        message: 'Operation successful!',
        question: result.rows,
      });
    });
  }

  /**
 * /DELETE a question by user
 *
 * @async
 * @function delete a question in the database
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<object>, json} The rows of data  from the URL.
 */
  static async removeQuestion(req, res) {
    // const { id } = parseInt(req.params.id, 10);
    const deleteOne = {
      text: 'DELETE FROM questions WHERE question_id = $1 AND user_id = $2',
      values: [parseInt(req.params.id, 10), req.user_id],
    };
    pool.query(deleteOne, (err, result) => {
      if (err) {
        throw err.stack;
      }
      res.status(200).json({
        status: '200',
        message: `Question with ${req.params.id} removed successful!`,
        questions: result.rows,
      });
    });
  }
}
