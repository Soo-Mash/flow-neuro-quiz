import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import QuestionLayout from '../../components/QuestionLayout';
import Quiz from './QuizModule/Quiz';

const QuizRouter: FC = () => (
  <>
    <Routes>
      {/* unhandled paths: redirects to welcome */}
      <Route path="*" element={<Navigate to="/welcome" />} />
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/null" element={<Navigate to="/welcome" />} />
      <Route path="/undefined" element={<Navigate to="/welcome" />} />
      {/* handled paths */}
      <Route path="question/:questionNumber" element={<Quiz />} />
      {/* <Route path="result/" element={<QuizResult />} /> */}
    </Routes>
  </>
);
export default QuizRouter;
