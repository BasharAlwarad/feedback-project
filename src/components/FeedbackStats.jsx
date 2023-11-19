const FeedbackStats = ({ feedbackData }) => {
  let averageRating = (
    feedbackData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackData.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>Number of ratings: {feedbackData.length}</h4>
      <h4>Average rating: {averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
