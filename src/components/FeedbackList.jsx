import { useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const [Feedbacks, setFeedbacks] = useState(FeedbackData);
  return (
    <>
      {Feedbacks?.map((e) => (
        <FeedbackItem item={e} key={e.id} />
      ))}
    </>
  );
};

export default FeedbackList;
