import React from 'react';
import PropTypes from 'prop-types';
import HiddenSpan from 'components/atoms/HiddenSpan';
import { pure } from 'recompose';
import Label from './Label';

const getText = ({ hideText, text }) => {
  if (!text) {
    return;
  }

  return hideText
    ? <HiddenSpan>
        {text}
      </HiddenSpan>
    : text;
};

const LabelBlock = ({
  children,
  fullWidth,
  hideText,
  inputType,
  placeholder,
  text,
  verticalMargin
}) =>
  <Label verticalMargin={verticalMargin}>
    {getText({ hideText, text })}
    {children}
  </Label>;

LabelBlock.propTypes = {
  fullWidth: PropTypes.bool,
  hideText: PropTypes.bool,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  verticalMargin: PropTypes.string
};

LabelBlock.defaultProps = {
  fullWidth: true,
  hideText: false,
  inputType: 'text',
  placeholder: '',
  text: '',
  verticalMargin: '1rem'
};

export default pure(LabelBlock);
