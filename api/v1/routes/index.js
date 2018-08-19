import express from 'express';
import Question from '../controllers/questionController';
import Answer from '../controllers/answerController';
import validateQuestion from '../middlewares/validateQuestion';
import validateAnswer from '../middlewares/validateAnswer';


const router = express.Router();

router.get('/', (req, res) => res.send('Success, Welcome to v1!'));
router.get('/questions', Question.GetAllQuestions);
router.get('/questions/:id', Question.GetOneQuestion);
router.post('/questions', validateQuestion, Question.setQuestion);
router.post('/questions/:id/answer', validateAnswer, Answer.setAnswer);

export default router;
