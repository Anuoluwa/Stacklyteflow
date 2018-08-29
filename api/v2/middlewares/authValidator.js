/**
 * A class to represent validation conditions.
 * @class authValidator
 *
 * @constructor none
 *@static
 * @method gives validation condition to input to auth/signin controller
 * @method gives validation condition to input to auth/login controller
 */
class authValidator {
  /**
     * Middleware for validation for all users input to question controller .
     * @param {req} str - The req is the receiver of inputs from client.
     * @param {res} str - The res is the carries response to user end from server.
     * @return {res.status()} A response object and emit appropriate errors.
     */

  static signup(req, res, next) {
    const { username, email, password } = req.body;
    const validUsername = /^[a-zA-Z\-]+$/.test(username);
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);
    if (!validUsername) {
      return res.status(400).end(`"username" should not contain special characters,
         numbers and whitespace`);
    }
    if (!username || username.length < 5 || username.length > 10) {
      return res.status(400)
        .end('"username" must be a string with length between 6 and 10');
    }
    if (!email) {
      return res.status(400)
        .end('"email" must be not empty');
    }
    if (!validEmail) {
      return res.status(400).end('"email" should be in the proper format');
    }
    if (!password || password.length < 5) {
      return res.status(400)
        .end('"password" must be a string with length between 6 and 12');
    }
    if (password.length > 13) {
      return res.status(400)
        .end('"password" must be a string with length between 6 and 12');
    }
    if (!validPassword) {
      return res.status(400).end('"password" must be a string with length between 8 and 12');
    }
    next();
  }
  /**
     * Middleware for validation for all users input to question controller .
     * @param {req} str - The req is the receiver of inputs from client.
     * @param {res} str - The res is the carries response to user end from server.
     * @return {res.status()} A response object and emit appropriate errors.
     */

  static login(req, res, next) {
    const { email, password } = req.body;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);
    if (!email) {
      return res.status(400).end('"email" must be not empty');
    }
    if (!validEmail) {
      return res.status(400)
        .end('"email" should be in the proper format');
    }
    if (!password || password.length < 5) {
      return res.status(400)
        .end('"password" must be a string with length between 6 and 12');
    }
    if (password.length > 13) {
      return res.status(400)
        .end('"password" must be a string with length between 6 and 12');
    }
    if (!validPassword) {
      return res.status(400).end('"password" must be a string with length between 6 and 12');
    }

    return next();
  }
}
export default authValidator;
