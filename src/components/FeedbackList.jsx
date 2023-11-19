import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbackData, handelDelete }) => {
  return (
    <>
      {feedbackData?.map((e) => (
        <FeedbackItem key={e.id} item={e} handelDelete={handelDelete} />
      ))}
    </>
  );
};

export default FeedbackList;
