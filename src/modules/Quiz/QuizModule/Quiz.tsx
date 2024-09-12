import QuestionLayout from '../../../components/QuestionLayout';
import { quizData } from '../../../mockData/madrssData';

const Quiz = () => {
  return <QuestionLayout itemInfo={quizData[0]} questionNumber={1} />;
};

export default Quiz;
