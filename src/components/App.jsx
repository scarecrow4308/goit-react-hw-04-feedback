import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setPositive(Math.round((good * 100) / total));
  }, [good, total]);

  const onClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
    }
    setTotal(s => s + 1);
  };

  return (
    <Container>
      <FeedbackOptions onClick={onClick} />

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      )}
    </Container>
  );
};
