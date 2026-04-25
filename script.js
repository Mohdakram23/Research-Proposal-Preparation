const enrollForm = document.getElementById('enroll');
const message = document.getElementById('enroll-message');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

enrollForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(enrollForm);
  const name = String(formData.get('name') || '').trim();

  if (!name) {
    message.textContent = 'Please enter your name first.';
    return;
  }

  message.textContent = `Thanks, ${name}! You're enrolled in Research Proposal Preparation.`;
  enrollForm.reset();
});
