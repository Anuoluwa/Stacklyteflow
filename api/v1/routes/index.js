import express from 'express';

import Question from '../controllers/questionController';

const router = express.Router();

router.get('/', (req, res) => res.send('Success, Welcome to v1!'));
router.get('/questions', Question.GetAllQuestions);
router.get('/questions/:id', Question.GetOneQuestion);
router.post('/questions', Question.setQuestion);
router.post('/answers', Question.setAnswer);

export default router;
