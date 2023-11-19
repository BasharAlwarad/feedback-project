import { FaTimes } from 'react-icons/fa';

import Card from './shared/Card';

const FeedbackItem = ({ handelDelete, item, item: { rating, text } }) => {
  return (
    <Card>
      <div className='num-display'>{rating} </div>
      <button onClick={() => handelDelete(item)}>
        <FaTimes className='close' color='red' />
      </button>
      <div className='text-display'> {text} </div>
    </Card>
  );
};
export default FeedbackItem;
