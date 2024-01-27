import { useState } from 'react';

import feedbackData from './data/FeedbackData.js';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  const deleteFeedback = (e) => {
    if (feedbacks.length <= 0) {
      throw new Error(
        'Not more feed backs to delete!' + '\n\tPlease add some first'
      );
    }
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== e.id));
  };
  return (
    <div className='container'>
      <Header />
      <FeedbackForm />
      <FeedbackStats feedbackData={feedbacks} />
      <FeedbackList feedbackData={feedbacks} handelDelete={deleteFeedback} />
    </div>
  );
};

export default App;
