const feedbacks = [];

function collectFeedback(feedback) {
  feedbacks.push(feedback);
  return 'Feedback soumis avec succès!';
}

function getFeedbacks() {
  return feedbacks;
}

module.exports = { collectFeedback, getFeedbacks };