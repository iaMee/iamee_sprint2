import React, { Component } from 'react';
import style from './BaseButton.css';
import { Button } from 'react-materialize';

const BaseButton = ({ className, onClick, title }) => (
  <Button onClick={onClick} className={`base-button ${className}`}>
    {title}
  </Button>
);

export default BaseButton;
