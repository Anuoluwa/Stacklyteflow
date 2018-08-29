class authValidator {
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
