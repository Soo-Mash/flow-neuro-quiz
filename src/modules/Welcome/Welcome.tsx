import QuestionLayout from '../../components/QuestionLayout';
import { quizData } from '../../mockData/madrssData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import FlowLogo from '../../assets/FlowLogo.webp';
import Button from '@mui/material/Button';
import { initialFormValues } from '../../types/dataTypes';
import { FormValues } from '../../types/dataTypes';
import clsx from 'clsx';

import './index.scss';

interface WelcomeProps {
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const Welcome = ({ setFormValues }: WelcomeProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false); // State to track if the image is loaded

  const handleStartQuiz = () => {
    navigate('/quiz/question/1');
  };

  useEffect(() => {
    setFormValues(initialFormValues);
    localStorage.removeItem('formValuesLocal');
  });

  return (
    <Container className="welcome-page">
      <div className="img-container">
        <img
          src={FlowLogo}
          className={clsx('welcome-logo', { loaded: imageLoaded })}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className={clsx('welcome-bottom-section', { loaded: imageLoaded })}>
        <p className="explanation-title-text">
          Welcome to the Depression Self-Assessment
        </p>
        <p className="explanation-description-text">
          A Simple Questionnaire to Understand Your Mental Health
        </p>
        <p className="explanation-disclaimer-text">
          This 9-question survey will help you assess your mental state, with
          answers on a scale of 0 to 6. Your total score will give insight into
          your emotional health, ranging from minimal to severe depression.
        </p>
        <p className="explanation-disclaimer-text">
          Start when you're ready, and remember, the results are not a clinical
          diagnosis but a helpful guideline.
        </p>
      </div>
      <div className="footer-btn-section">
        <Button
          variant="contained"
          className="start-button"
          onClick={handleStartQuiz}
        >
          Start Assessment
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
