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
    try {
      const { rows } = await pool
        .query('SELECT * FROM questions WHERE question_id = $1',
          [req.params.id]);
      if (rows.length === 0) {
        res.status(404).json({
          status: '404 NOT FOUND',
          message: `The question with this id: ${req.params.id} does not exist!`,
          question: rows[0],
        });
      } else {
        const rowsAns = await pool.query('SELECT * FROM answers WHERE question_id=$1', [req.params.id]);
        res.status(200).json({
          status: '200 OK',
          message: 'Operation successful!',
          question: rows[0].answers = rowsAns.rows,
        });
      }
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
    try {
      const { check } = await pool
        .query('SELECT * FROM questions WHERE question_id = $1 AND user_id =$2',
          [req.params.id, req.userid]);
      const { rows } = await pool
        .query('DELETE FROM questions WHERE question_id = $1 AND user_id =$2',
          [req.params.id, req.userid]);
      if (rows.length === 0) {
        res.status(200).json({
          status: '200',
          message: `The question with this id: ${req.params.id} has been removed!`,
        });
      }
      if (check) {
        res.status(401).json({
          status: '401 Unauthorized',
          message: 'You are not the owner of the question!',
          question: rows[0],
        });
      }
    } catch (error) {
      res.send({ message: `Error ${error}` });
    }
  }

  /**
 * /GET all questions
 *
 * @async
 * @function get all questions in the database
 * @param {req} url - The request obj that handles request that is coming in.
 * @param {res} url - The response obj that handles response from request.
 * @return {HTTP status<objec>, json} The rows of data  from the URL.
 */
  static async GetUserQuestions(req, res) {
    const { rows } = await pool
      .query('SELECT * FROM questions WHERE user-id=$1 VALUES($1)', [req.userid]);
    res.status(200).json({
      message: 'Operation successful!',
      status: '200 OK',
      questions: rows,
    });
    if (rows.length == 0) {
      return res.status().json({ message: 'No question is available' });
    }
  }

  static async Mostanswers(req, res) {
    try {
     //  const SQL = {
        TEXT: `select title, body, reply, count(answers.question_id) from questions
    join answers
    on answers.question_id = questions.question_id
    group by reply, title, body, answers.question_id
    order by answers.question_id desc`,
        // VALUES: [SQL],
    //  };
    } catch (error) {
      res.status(404).json();
    }
  }

  static async GetAllQuestionsAnswers(req, res) {
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
}
