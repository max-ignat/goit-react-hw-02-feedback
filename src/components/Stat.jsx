import React from 'react';

const Stat = ({ good, neutral, bad, total, totalPersentage }) =>
  <div>
    <h2>Statistics</h2>
    <p> Good: {good} </p>
    <p> Neutral: {neutral} </p>
    <p> Bad: {bad} </p>
    <p> Total: {total} </p>
    <p> Positive feedback: {totalPersentage} </p>
  </div>;

export default Stat