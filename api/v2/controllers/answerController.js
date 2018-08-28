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
    await pool.query(`INSERT INTO answers (reply, user_id, question_id) 
    VALUES($1, $2, $3) RETURNING *`,
    [req.body.reply, req.userid, id], (err, result) => {
      if (err) throw err;
      res.status(200).json({
        status: '200 OK',
        message: 'Operation successful!',
        question: result.rows,
      });
    });
  }

  static async updateAnswer(req, res) {
    const id = parseInt(req.params, 10);
    await pool.query(
      `UPDATE answers SET reply=$1 WHERE answer_id=$2,question_id=$3
         OR user_id=$3  RETURNING *`,
      [req.body.reply, req.body.status, id], (err, result) => {
        if (err) throw err;
        res.status(200).json({
          status: 'success',
          message: 'Answer updated!',
          Response: result.rows,
        });
      },
    );
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
      await pool.query(`INSERT INTO comments (comment, user_id, answer_id) 
    VALUES($1, $2, $3) RETURNING *`,
      [req.body.comment, req.userid, id], (err, result) => {
        if (err) throw err;
        res.status(200).json({
          status: '200 OK',
          message: 'Operation successful!',
          question: result.rows,
        });
      });
    } catch (error) {
      res.status(400).json({ message: `Bad request : Error: ${error}` });
    }
  }
}
