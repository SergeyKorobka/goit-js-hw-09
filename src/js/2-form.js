const form = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

getStorage();

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);

function inputHandler(e) {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function getStorage() {
  const savedFormData = localStorage.getItem(LS_KEY);

  if (!savedFormData) {
    return;
  }

  const { email, message } = form.elements;

  formData = JSON.parse(savedFormData);

  email.value = formData.email;
  message.value = formData.message;
}

function submitHandler(e) {
  e.preventDefault();

  const { email, message } = e.target.elements;

  if (!email.value || !message.value) {
    alert('Fill please all fields');
  }

  console.log(formData);

  e.target.reset();
  localStorage.removeItem(LS_KEY);
  formData.email = '';
  formData.message = '';
}
