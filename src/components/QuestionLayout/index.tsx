import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionDataItem } from '../../data/dataAndTypes';
import QuestionRadioGroup from '../QuestionRadioGroup';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './index.scss';

export interface QuestionLayoutProps {
  itemInfo: QuestionDataItem;
  questionNumber: number;
  currentValue: number | null;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemClicked: (newValue: number) => void;
}

const QuestionLayout = ({
  itemInfo,
  questionNumber,
  currentValue,
  handleRadioChange,
  handleItemClicked,
}: QuestionLayoutProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="question-layout">
        <div className="context-section">
          <Grid container spacing={1} className="quiz-progress-section">
            <Grid size={3}>
              {questionNumber > 1 && (
                <Button
                  sx={{
                    p: 0,
                    m: 0,
                    alignContent: 'start',
                    minWidth: '0',
                    minHeight: '0',
                    color: '#232323',
                  }}
                  onClick={() => {
                    navigate(`/quiz/question/${questionNumber - 1}`);
                  }}
                >
                  <ArrowBack />
                </Button>
              )}
            </Grid>
            <Grid size={6}>
              <p className="question-number-text">
                Question {questionNumber}/9
              </p>
            </Grid>
            <Grid size={3} />
          </Grid>

          <h2>{itemInfo.title}</h2>
          <p className="question-text">{itemInfo.question}</p>
          {itemInfo.paragraph && (
            <p className="question-paragraph">{itemInfo.paragraph}</p>
          )}
        </div>
        <hr className="horizontal-rule"></hr>
        <div className="radio-group-section"></div>
      </div>
      <div className="radio-group-section">
        <QuestionRadioGroup
          itemInfo={itemInfo}
          selectedValue={currentValue}
          handleRadioChange={handleRadioChange}
          handleItemClicked={handleItemClicked}
          error
        />
      </div>
    </>
  );
};

export default QuestionLayout;
