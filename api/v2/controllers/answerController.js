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
  /**
 * update an existing answer in the database
 *
 * @async
 * @function to update an existing answer
 * @param {req} url - the request cycle from express that carries client requests
 * @param {res} url - the response cycle from express that carries client requests
 * @return {data} The data from the database.
 */

  static async updateAnswer(req, res) {
    try {
      const validQuestionId = await pool.query('SELECT * FROM questions WHERE user_id =$1',
        [req.userid]);
      console.log(validQuestionId);
      if (validQuestionId.rows.length == 0) {
        return res.send({ message: 'question ID does not exist!' });
      }
      const validAnswerId = await pool.query('SELECT * FROM answers WHERE user_id =$1',
        [req.userid]);
      if (validAnswerId.rows.length === 0) {
        return res.send({ message: 'Answer ID does not exist!' });
      }
      if (validQuestionId.rows[0].user_id === req.user_id) {
        await pool
          .query(
            'UPDATE answers SET status = $1 WHERE answer_id=$2 returning *',
            ['Accept', req.params.id],
          );
      }
      if (validAnswerId.rows[0].user_id === req.user_id) {
        return res.send({ message: 'Unathorized' });
      }
      await pool.query(
        'UPDATE answers SET reply=$1 RETURNING *',
        [req.reply],
      );
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
