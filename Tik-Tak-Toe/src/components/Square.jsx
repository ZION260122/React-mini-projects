import './square.scss'
import { PropTypes } from 'prop-types';

const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
        {value}
    </button>
  )
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };

export default Square
