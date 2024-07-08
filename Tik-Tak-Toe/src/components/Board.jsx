import Square from './Square';
import { PropTypes } from 'prop-types';
import './board.scss';

const Board = ({ squares, onClick }) => {
  return (
    <div className="Board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

Board.propTypes = {
    squares: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
export default Board;
