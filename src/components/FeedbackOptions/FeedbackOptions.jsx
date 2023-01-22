
import { List } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
}

