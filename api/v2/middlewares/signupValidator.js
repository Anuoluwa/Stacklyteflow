class signupValidator {
  static validUser(req, res, next) {

    const username = typeof req.body.username === 'string';
    const email = typeof req.body.email === 'string'
    && req.body.email.trim() !== '';
    const password = typeof req.body.password === 'string' && req.body.password.trim() !== ''
    && req.body.password.trim().length >= 6;
    const validUsername = /[a-z]{6,10}$/g.test(username);
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);

    if (!validUsername) {
      return res.send({
        status: '400 Bad request',
        message: `Username should have lowercase characters, 
        not less than 6 and not more than 12`,
      });
    }
    if (!validEmail) {
      return res.send(400).json({
        status: '400 Bad request',
        message: 'Ensure your email is in proper format',
      });
    }
    if (!validPassword) {
      return res.send(400).json({
        status: '400 Bad request',
        message: 'email format is invalid',
      });
    }
    return next();
  }
}
export default signupValidator;
