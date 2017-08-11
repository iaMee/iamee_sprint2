import React from 'react';
import PropTypes from 'prop-types';
import HiddenSpan from 'components/atoms/HiddenSpan';
import InputText from 'components/atoms/InputText';
import { pure } from 'recompose';
import Label from './Label';

const LabelBlock = ({
  fullWidth,
  hiddenText,
  inputType,
  placeholder,
  text,
  verticalMargin
}) =>
  <Label verticalMargin={verticalMargin}>
    {hiddenText
      ? <HiddenSpan>
          {text}
        </HiddenSpan>
      : { text }}
    <InputText fullWidth placeholder={placeholder} />
  </Label>;

LabelBlock.propTypes = {
  fullWidth: PropTypes.bool,
  hiddenText: PropTypes.bool,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  verticalMargin: PropTypes.string
};

LabelBlock.defaultProps = {
  fullWidth: true,
  hiddenText: true,
  inputType: 'text',
  placeholder: '',
  text: '',
  verticalMargin: '1rem'
};

export default pure(LabelBlock);
