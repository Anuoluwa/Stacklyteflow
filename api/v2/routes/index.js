import 'babel-polyfill';
import express from 'express';
import Question from '../controllers/questionController';
import Auth from '../auth/authController';


const router = express.Router();

/**
 * @version v2
 * with persistence database
 * welcome message
 */

router.get('/', (req, res) => res.send('Successful!, Welcome to LiteStack API v2!'));

/**
 * @router for questions authentication controller
 *
 *
 */
router.post('auth/signup', Auth.signUp);
router.post('auth/login', Auth.login);

/** @router for questions controller */

router.get('/questions', Question.GetAllQuestions);


export default router;
