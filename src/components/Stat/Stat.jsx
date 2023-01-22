import React from 'react';
import { List, ListItem } from './Stat.styled';
const Stat = ({ good, neutral, bad, total, totalPersentage }) =>
  <div>
    <List>
    <ListItem> Good: {good} </ListItem>
    <ListItem> Neutral: {neutral} </ListItem>
    <ListItem> Bad: {bad} </ListItem>
    <ListItem> Total: {total} </ListItem>
    <ListItem> Positive feedback: {totalPersentage} </ListItem>
    </List>
  </div>;

export default Stat