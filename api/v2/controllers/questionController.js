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
}
