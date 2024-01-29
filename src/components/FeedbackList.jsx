import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ feedbackData, handelDelete }) => {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbackData?.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={e} handelDelete={handelDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
