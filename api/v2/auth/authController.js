// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../config/config';


export default class Auth {
  static signUp(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    if (typeof hashedPassword !== 'string') {
      res.json({ message: 'Invalid password..' });
    }
    const sql = {
      text: 'INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *',
      values: [req.body.username, req.body.email, hashedPassword],
    };
    pool.query(sql, (err, response) => {
      if (err) {
        return res.status(500).json({ message: 'Email and username already taken' });
      }
      return res.status(200).json(response.rows[0]);
    });
  }

}
