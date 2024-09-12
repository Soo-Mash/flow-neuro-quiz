import { QuestionDataItem } from '../../types/dataTypes';
import './index.scss';

export interface QuestionLayoutProps {
  itemInfo: QuestionDataItem;
  questionNumber: number;
}

const QuestionLayout = ({ itemInfo, questionNumber }: QuestionLayoutProps) => {
  return (
    <>
      <div className="question-layout">
        <div className="context-section">
          <p className="question-number-text">Question {questionNumber}/9</p>
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
        {/* 1-6 radio group section goes here */}
      </div>
    </>
  );
};

export default QuestionLayout;
