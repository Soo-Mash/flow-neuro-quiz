import QuestionLayout from '../../components/QuestionLayout';
import { quizData } from '../../mockData/madrssData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { FormValues } from '../../data/dataAndTypes';

interface QuizProps {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const Quiz = ({ formValues, setFormValues }: QuizProps) => {
  const navigate = useNavigate();
  const { questionNumber: questionNumberString } = useParams();
  const questionNumber = parseInt(questionNumberString ?? '1', 10);
  const [itemClicked, setItemClicked] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formValuesArray = [...formValues];
    const newValue = parseInt((event.target as HTMLInputElement).value, 10);
    formValuesArray.splice(questionNumber - 1, 1, newValue);
    setFormValues(formValuesArray);
  };

  const handleItemClicked = (newValue: number) => {
    let formValuesArray = [...formValues];
    formValuesArray.splice(questionNumber - 1, 1, newValue);
    setFormValues(formValuesArray);
    setItemClicked(true);
  };

  useEffect(() => {
    let timeoutId: number;
    if (formValues[questionNumber - 1] !== null && itemClicked) {
      // set timeout to navigate to next quiz after 600ms seconds
      timeoutId = setTimeout(() => {
        if (questionNumber === 9) {
          navigate('/quiz/results');
        } else navigate(`/quiz/question/${questionNumber + 1}`);
        setItemClicked(false);
      }, 600);
    }
    // clear timeout if the value changes or the component unmounts
    return () => clearTimeout(timeoutId);
  }, [itemClicked, formValues, questionNumber]);

  return (
    <Container maxWidth="md" sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <QuestionLayout
        itemInfo={quizData[questionNumber - 1]}
        questionNumber={questionNumber}
        currentValue={formValues[questionNumber - 1]}
        handleRadioChange={handleRadioChange}
        handleItemClicked={handleItemClicked}
      />
      <Button />
    </Container>
  );
};

export default Quiz;
