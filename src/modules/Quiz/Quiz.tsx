import QuestionLayout from '../../components/QuestionLayout';
import { quizData } from '../../mockData/madrssData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

type FormValues = (number | null)[];
const initialFormValues = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const Quiz = () => {
  const navigate = useNavigate();
  const { questionNumber: questionNumberString } = useParams();
  const questionNumber = parseInt(questionNumberString ?? '1', 10);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [itemClicked, setItemClicked] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formValuesArray = [...formValues];
    const newValue = parseInt((event.target as HTMLInputElement).value, 10);
    formValuesArray.splice(questionNumber - 1, 1, newValue);
    setFormValues(formValuesArray);
  };

  const handleItemClicked = (newValue: number) => {
    console.log('CLICKED');
    let formValuesArray = [...formValues];
    formValuesArray.splice(questionNumber - 1, 1, newValue);
    setFormValues(formValuesArray);
    setItemClicked(true);
  };

  useEffect(() => {
    let timeoutId: number;
    if (formValues[questionNumber - 1] !== null && itemClicked) {
      // set timeout to navigate to next quiz after 2 seconds
      timeoutId = setTimeout(() => {
        if (questionNumber === 9) {
          navigate('/quiz/results');
        } else navigate(`/quiz/question/${questionNumber + 1}`);
        setItemClicked(false);
      }, 3000);
    }
    // clear timeout if the value changes or the component unmounts
    return () => clearTimeout(timeoutId);
  }, [itemClicked, formValues, questionNumber]);

  return (
    <>
      <button
        onClick={() => {
          console.log('SIMON values', formValues);
        }}
      >
        show values
      </button>
      {/* <button
        onClick={() => {
          console.log('SIMON itemClicked', itemClicked);
        }}
      >
        show itemClicked
      </button>
      <>itemClicked:{itemClicked}</> */}
      <QuestionLayout
        itemInfo={quizData[questionNumber - 1]}
        questionNumber={questionNumber}
        currentValue={formValues[questionNumber - 1]}
        handleRadioChange={handleRadioChange}
        handleItemClicked={handleItemClicked}
      />
      <Button />
    </>
  );
};

export default Quiz;
