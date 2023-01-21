import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      {title} {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
