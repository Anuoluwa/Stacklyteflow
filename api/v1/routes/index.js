import express from 'express';

import Question from '../controllers/questionController';

const router = express.Router();

// router.get('/', (req, res) => res.send('Hello World! we are live'));
router.get('/questions', Question.AllQuestions);

export default router;
