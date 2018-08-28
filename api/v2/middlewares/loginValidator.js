class loginValidator {
  static validUser(req, res, next) {
    const email = typeof req.body.email === 'string'
      && req.body.email.trim() !== '';
    const password = typeof req.body.password === 'string' && req.body.password.trim() !== ''
      && req.body.password.trim().length >= 6;
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    const validPassword = /^[a-zA-Z0-9.\-$@*!]{6,12}$/g.test(password);

    if (validEmail === 'undefined' || validPassword === 'undefined') {
      return res.send(400).json({
        status: '400 Bad request',
        message: 'Please provide details of your login',
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
export default loginValidator;
