async function loadFeedbacks() {
  const response = await fetch('/api/feedbacks');
  const feedbacks = await response.json();
  const feedbackList = document.getElementById('feedback-list');
  feedbacks.forEach(feedback => {
    const div = document.createElement('div');
    div.textContent = feedback;
    feedbackList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadFeedbacks);