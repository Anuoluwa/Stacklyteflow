import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../config/config';


/** class representing an authentication with static method for signup and login */
export default class Auth {
/**
 * @static
 * @param {req} obj request-response cycle
 * @param {res} obj request-response cycle
 * @return sign up details if response=200
 * @return statuscode 404 if email and username do not exists
 *
 * */
  static async signUp(req, res) {
    try {
      const sqlUser = {
        text: 'SELECT * FROM users WHERE email=$1',
        values: [req.body.email],
      };
      const validAccount = await pool.query(sqlUser);
      if (validAccount.rows.length > 0) {
        return res.status(400).json({
          message: 'email already exists',
        });
      }
      const hashedPassword = bcrypt.hashSync(req.body.password, 1);
      const sql = {
        text: 'INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *',
        values: [req.body.username, req.body.email, hashedPassword],
      };
      const userDetails = await pool.query(sql);
      res.status(200).json({
        status: '200 OK',
        message: 'Registered successfully!',
        details: userDetails.rows[0],
      });
    } catch (error) {
      res.status(500).json({ message: `Bad request : Error: ${error}` });
    }
  }

  /**
   * @static
   * @param {request} obj request-response cycle
   * bcrpt is hashing of password string
   * @param {response} obj request-response cycle
   * @return token for other protected endpoints
   *
   * */

  static login(req, res) {
    const sql = {
      text: 'SELECT * FROM users WHERE email = $1 ',
      values: [req.body.email],
    };
    pool.query(sql, (err, response) => {
      if (err) {
        return res.status(404).json({ message: 'Email and password do not exist' });
      }
      if (!response.rows[0]) {
        return res.status(404).json({ message: 'Email and password do not exist, please sign up' });
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, response.rows[0].password);
      if (req.body.email !== response.rows[0].email || !passwordIsValid) {
        return res.status(404).send({ auth: false, token: null, message: 'Unauthorized! Invalid email or password' });
      }
      if (req.body.email === response.rows[0].email && passwordIsValid) {
        const token = jwt.sign(
          { id: response.rows[0].user_id, email: req.body.email }, process.env.SECRET_KEY,
          {
            expiresIn: '1hr',
          },
        );
        res.status(200).json({ status: '200 OK', authentication: 'Successful', token });
      }
    });
  }
}
