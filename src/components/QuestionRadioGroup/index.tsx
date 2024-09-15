import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioProps,
  FormHelperText,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import '@fontsource/open-sans';

import { QuestionDataItem } from '../../types/dataTypes';
import { SxProps, Theme } from '@mui/material';
import './index.scss';

const radioLabelStyle: SxProps<Theme> | undefined = {
  fontFamily: 'Open sans',
  fontWeight: 400,
};

interface CustomRadioProps {
  number: number;
  checked: boolean;
  handleItemClicked: (newValue: number) => void;
}

const CustomRadio = ({
  number,
  checked,
  handleItemClicked,
}: CustomRadioProps) => {
  // Trigger the onClick event when Enter key is pressed
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') handleItemClicked(number);
  };
  return (
    <div
      className={clsx('custom-radio', {
        'unchecked ': !checked,
        'checked ': checked,
      })}
      aria-label={`Radio option ${number}`}
      tabIndex={0}
      role="radio" // aria attribute to show element type to screenreaders
      aria-checked={checked} // aria attribute to show checked state to screenreaders
      onKeyDown={handleKeyDown}
    >
      <div className="radio-number">{number}</div>
    </div>
  );
};

export interface QuestionRadioGroupProps {
  itemInfo: QuestionDataItem;
  selectedValue: number | null;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemClicked: (newValue: number) => void;
  error: boolean;
}

const QuestionRadioGroup = ({
  itemInfo,
  selectedValue,
  handleRadioChange,
  handleItemClicked,
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
            control={
              <CustomRadio
                number={0}
                checked={selectedValue === 0}
                handleItemClicked={handleItemClicked}
              />
            }
            label={
              <Typography sx={radioLabelStyle}>
                {itemInfo.responses[0]}
              </Typography>
            }
            onClick={() => handleItemClicked(0)}
          />
          <FormControlLabel
            value={1}
            control={
              <CustomRadio
                number={1}
                checked={selectedValue === 1}
                handleItemClicked={handleItemClicked}
              />
            }
            label={''}
            onClick={() => handleItemClicked(1)}
          />
          <FormControlLabel
            value={2}
            control={
              <CustomRadio
                number={2}
                checked={selectedValue === 2}
                handleItemClicked={handleItemClicked}
              />
            }
            label={
              <Typography sx={radioLabelStyle}>
                {itemInfo.responses[1]}
              </Typography>
            }
            onClick={() => handleItemClicked(2)}
            sx={radioLabelStyle}
          />
          <FormControlLabel
            value={3}
            control={
              <CustomRadio
                number={3}
                checked={selectedValue === 3}
                handleItemClicked={handleItemClicked}
              />
            }
            label={''}
            onClick={() => handleItemClicked(3)}
          />
          <FormControlLabel
            value={4}
            control={
              <CustomRadio
                number={4}
                checked={selectedValue === 4}
                handleItemClicked={handleItemClicked}
              />
            }
            label={
              <Typography sx={radioLabelStyle}>
                {itemInfo.responses[2]}
              </Typography>
            }
            onClick={() => handleItemClicked(4)}
            sx={radioLabelStyle}
          />
          <FormControlLabel
            value={5}
            control={
              <CustomRadio
                number={5}
                checked={selectedValue === 5}
                handleItemClicked={handleItemClicked}
              />
            }
            label={''}
            onClick={() => handleItemClicked(5)}
          />
          <FormControlLabel
            value={6}
            control={
              <CustomRadio
                number={6}
                checked={selectedValue === 6}
                handleItemClicked={handleItemClicked}
              />
            }
            label={
              <Typography sx={radioLabelStyle}>
                {itemInfo.responses[3]}
              </Typography>
            }
            onClick={() => handleItemClicked(6)}
            sx={radioLabelStyle}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default QuestionRadioGroup;
