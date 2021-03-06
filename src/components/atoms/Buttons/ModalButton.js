import React from 'react';
import { Button } from 'react-materialize';

const ModalButton = ({ points, img, className, onClick, title, subtext }) => (
  <Button onClick={onClick} className={`base-button ${className}`}>
    <div className="inline-display">
      <h6>COMPLETE</h6>
      <img className="modal-image" src={require('assets/Images/point.png')} alt="" />
      <h6>{points} pts</h6>
    </div>
  </Button>
);

export default ModalButton;
