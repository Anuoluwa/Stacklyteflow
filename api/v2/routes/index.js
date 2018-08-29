import express from 'express';
import Question from '../controllers/questionController';
import Answer from '../controllers/answerController';
import Validator from '../middlewares/inputValidator';


import Auth from '../auth/authController';
import verifyToken from '../middlewares/verifyToken';

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
router.post('/questions', Validator.QuestionInput, verifyToken, Question.createQuestion);
router.delete('/questions/:id', verifyToken, Question.removeQuestion);
router.post('/questions/:id/answers', Validator.QuestionInput, verifyToken, Answer.createAnswer);
router.put('/questions/:id/answers/:id', verifyToken, Answer.updateAnswer);
router.post('/answers/:id/comments', Validator.AnswerInput, verifyToken, Answer.createComment);
router.get('users/questions', verifyToken, Question.GetUserQuestions);


export default router;
