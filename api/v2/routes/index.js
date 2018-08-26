import express from 'express';
import Question from '../controllers/questionController';
import Auth from '../auth/authController';
// import verifyToken from '../middlewares/verifyToken';

const router = express.Router();
/**
 * @ v2
 * with persistence database
 * welcome message
 */
router.get('/', (req, res) => res.send({ message: 'Successful!, Welcome to LiteStack API v2!' }));
/**
 *  for questions authentication controller
 *
 *
 */
router.post('/auth/signup', Auth.signUp);
router.post('/auth/login', Auth.login);
/** @router for questions controller */
router.get('/questions', Question.GetAllQuestions);
router.get('/questions/:id', Question.GetOneQuestion);


export default router;
