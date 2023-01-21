import { Section } from '../Section/Section';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, positive, total }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Section title="Good:">{good}</Section>
      <Section title="Neutral:">{neutral}</Section>
      <Section title="Bad:">{bad}</Section>
      <Section title="Total:">{total}</Section>
      <Section title="Positive:">{positive}%</Section>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
