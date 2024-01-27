import { useState } from 'react';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    if (text.length < 10) {
      throw new Error('Feedback must be at least 10 characters long!');
    }
    console.log(text);
  };

  const handelChange = (e) => {
    let val = e.target.value;
    console.log(val);
    setText(val);
    val.trim().length === 0
      ? setMessage('')
      : val.trim().length < 10
      ? setMessage('Feedback must be at least 10 characters long!')
      : setMessage('');
  };
  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
        {rating}
        <div className='input-group'>
          <input
            placeholder='Write a review!'
            onChange={handelChange}
            type='text'
            value={text}
          />

          <Button
            type={'submit'}
            version={'secondary'}
            isDisabled={text.length < 10}
          >
            Send
          </Button>
        </div>
      </form>
      <div hidden={!message}>{message}</div>
    </Card>
  );
};

export default FeedbackForm;
