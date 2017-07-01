import React, { Component } from 'react';
import style from './BaseButton.css';
import { Button } from 'react-materialize'

const BaseButton = ({
  title
}) => (
  <Button className="base-button">
    {title}
  </Button>
)

export default BaseButton;
