import QuestionLayout from '../../components/QuestionLayout';
import { quizData } from '../../mockData/madrssData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import ShapeDown from '../../assets/ShapeDown.png';
import { FormValues } from '../../types/dataTypes';
import './index.scss';

interface ResultsProps {
  formValues: FormValues;
}

const Results = ({ formValues }: ResultsProps) => {
  const navigate = useNavigate();

  const [total, setTotal] = useState<number>(0);
  const [animatedTotal, setAnimatedTotal] = useState<number>(0); // Stores the animated counter

  const areAllQuestionsAnswered = (): boolean => {
    return formValues.every((value) => value !== null);
  };

  const calculatedTotal = () => {
    const arr = [...formValues];
    if (areAllQuestionsAnswered()) {
      let sum = 0;
      arr.forEach((el) => {
        if (el) return (sum += el);
        else return '10';
      });
      console.log(sum);
      return sum;
    } else return 0;
  };

  const diagnoseSeverity = () => {
    switch (true) {
      case total >= 0 && total <= 12:
        return 'no or minimal depression';
      case total >= 13 && total <= 19:
        return 'light depression';
      case total >= 20 && total <= 34:
        return 'moderate depression';
      case total >= 35:
        return 'severe depression';
      default:
        return 'Invalid score';
    }
  };

  const handleClose = () => {
    navigate('/welcome');
  };

  // Ease-in-out cubic function
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 14 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    if (areAllQuestionsAnswered()) {
      const totalValue = calculatedTotal();
      setTotal(totalValue);

      let startValue = 0;
      const duration = 5000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = (currentTime - startTime) / duration;
        const easingProgress = easeInOutCubic(Math.min(elapsedTime, 1));
        const updatedValue = Math.min(
          totalValue,
          startValue + easingProgress * totalValue
        );

        setAnimatedTotal(Math.floor(updatedValue));

        if (updatedValue < totalValue) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    } else {
      navigate('/welcome');
    }
  }, [formValues]);

  return (
    <div className="results-page">
      <div>
        <div className="top-section-container">
          <img src={ShapeDown} className="rounded-bottom-jpg" />
          <>
            <Container
              className="top-section-text"
              maxWidth="md"
              sx={{ paddingLeft: '10px', paddingRight: '10px' }}
            >
              <p className="score-title-text">Your score</p>
              <p className="score-total-text">
                {animatedTotal}
                <span className="score-maximum-text">/54</span>
              </p>
              <p className="score-sub-text">No Symptoms</p>
            </Container>
          </>
        </div>
        <Container
          className="bottom-text-section"
          maxWidth="md"
          sx={{ paddingLeft: '10px', paddingRight: '10px' }}
        >
          <p className="explanation-title-text">What does this mean?</p>
          <p className="explanation-description-text">
            {diagnoseSeverity() !== 'Invalid score' && (
              <>
                This score indicates that you have <br />
                {diagnoseSeverity()} symptoms
              </>
            )}
          </p>
          <p className="explanation-disclaimer-text">
            Remember that this questionnaire is not a complete diagnosis, but
            rather a guideline.
          </p>
        </Container>
      </div>

      <Container
        className="footer-btn-section"
        maxWidth="md"
        sx={{ paddingLeft: '10px', paddingRight: '10px' }}
      >
        <Button
          variant="contained"
          className="close-button"
          onClick={handleClose}
        >
          Close
        </Button>
      </Container>
    </div>
  );
};

export default Results;
