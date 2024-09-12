import { useState } from 'react';
import QuestionLayout from '../../../components/QuestionLayout';
import { quizData } from '../../../mockData/madrssData';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const Quiz = () => {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber ?? '1', 10);

  return (
    <>
      <QuestionLayout
        itemInfo={quizData[questionNumberInt - 1]}
        questionNumber={questionNumberInt}
      />
      <Button />
    </>
  );
};

export default Quiz;
