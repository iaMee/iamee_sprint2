import React, { Component } from 'react';

class DiaryShow extends Component {
  getDay = () => {
    var d = new Date();
    var n = d.getDay();
    var days = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      0: 'Sunday'
    };
    return days[0];
  };

  render() {
    return (
      <div className="custom-modal-content text-center">
        {/* <div>
          <img className="attribute-image" src={attribute.img} alt=""/>
          <p>Why I'm good at this</p>
          <input placeholder="Write your text here" className="personal-input" type="text"/>
        </div> */}
        DEAR DIARY.....
      </div>
    );
  }
}

export default DiaryShow;
