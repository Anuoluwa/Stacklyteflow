import pool from '../config/config';

/** Class representing a question. */
export default class Answers {
  /**
 * /POST a single question
 *
 * @async
 * @function post a question in the database with user id
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
  static async createAnswer(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      const { rows } = await pool.query(`INSERT INTO answers (reply, user_id, question_id) 
    VALUES($1, $2, $3) RETURNING *`,
      [req.body.reply, req.userid, id]);
      res.status(200).json({
        status: '200 OK',
        message: 'Operation successful!',
        question: rows,
      });
    } catch (error) {
      res.send({ message: `Error ${error}` });
    }
  }

  static async updateAnswer(req, res) {
    try {
      const id = parseInt(req.params, 10);
      const { rows } = await pool.query(
        `UPDATE answers SET reply=$1 WHERE answer_id=$2 AND question_id=$3
         OR user_id=$3  RETURNING *`,
        [req.body.reply, id, req.userid],
      );
      res.status(200).json({
        status: 'success',
        message: 'Answer updated!',
        data: rows,
      });
    } catch (error) {
      res.send({ message: `Error ${error}` });
    }
  }

  /**
 * /POST a single question
 *
 * @async
 * @function post a question in the database with user id
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
  static async createComment(req, res) {
    try {
      const id = parseInt(req.params, 10);
      const { rows } = await pool.query(`INSERT INTO comments (comment, user_id, answer_id) 
    VALUES($1, $2, $3) RETURNING *`,
      [req.body.comment, req.userid, id]);
      res.status(200).json({
        status: '200 OK',
        message: 'Operation successful!',
        question: rows,
      });
    } catch (error) {
      res.status(500).json({ message: `Bad request : Error: ${error}` });
    }
  }
}
