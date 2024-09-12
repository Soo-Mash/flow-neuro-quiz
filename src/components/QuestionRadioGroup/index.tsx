import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from '@mui/material';
import { QuestionDataItem } from '../../types/dataTypes';

import './index.scss';

export interface QuestionRadioGroupProps {
  itemInfo: QuestionDataItem;
  questionNumber: number;
  selectedValue: number | null;
  setSelectedValue: React.Dispatch<React.SetStateAction<number | null>>;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const QuestionRadioGroup = ({
  itemInfo,
  questionNumber,
  selectedValue,
  setSelectedValue,
  handleRadioChange,
  error,
}: QuestionRadioGroupProps) => {
  return (
    <>
      <FormControl sx={{ m: 0 }} error={error} variant="standard">
        <RadioGroup
          aria-label="quiz-radio-group"
          name="quiz"
          value={selectedValue}
          onChange={handleRadioChange}
          className="radio-group"
        >
          <FormControlLabel
            value={0}
            control={<Radio />}
            label={itemInfo.responses[0]}
          />
          <FormControlLabel value={1} control={<Radio />} label={''} />
          <FormControlLabel
            value={2}
            control={<Radio />}
            label={itemInfo.responses[1]}
          />
          <FormControlLabel value={3} control={<Radio />} label={''} />
          <FormControlLabel
            value={4}
            control={<Radio />}
            label={itemInfo.responses[2]}
          />
          <FormControlLabel value={5} control={<Radio />} label={''} />
          <FormControlLabel
            value={6}
            control={<Radio />}
            label={itemInfo.responses[3]}
          />
        </RadioGroup>
        {/* <FormHelperText>{helperText}</FormHelperText> */}
      </FormControl>
    </>
  );
};

export default QuestionRadioGroup;
