import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from 'components/backLink/BackLink.module.css';

const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css.backlink}>
      {' '}
      &larr; Go back
    </Link>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.string,
};
