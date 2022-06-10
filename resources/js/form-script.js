const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();

});


function checkInputs() {
  //get values from inputs
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value;
  let counter = 0;

  if (nameValue === '') {
    //show error
    //add error class
    setErrorFor(name, 'Name field cannot be blank');
  } else {
      //add success class
      setSuccessFor(name);
      counter++;
  };

  if (emailValue === '') {
    setErrorFor(email, 'Email field cannot be blank');
  } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Invalid Email')
  } else {
      setSuccessFor(email);
      counter++;
  };

  if (phoneValue === '') {
    setErrorFor(phone, 'Phone number field cannot be blank');
  } else if (!isPhone(phoneValue)) {
      setErrorFor(phone, 'Invalid Phone Number')
  } else {
      setSuccessFor(phone);
      counter++;
  };

  if (messageValue === '') {
    setErrorFor(message, 'Message field cannot be blank');
  } else {
      setSuccessFor(message);
      counter++;
  };

  if (counter === 4) {
    form.submit();
    form.reset();

  };

};


function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
};


function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};


function isPhone(phone) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
};
