const buttons = document.querySelectorAll('.button');
document.querySelector('body');
// console.log(buttons);

// buttons ek node list hai toh nodelist ke saath mai forEach laga sakta hun

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      document.body.style.background = e.target.id;
    }
    if (e.target.id === 'blue') {
      document.body.style.background = e.target.id;
    }
    if (e.target.id === 'white') {
      document.body.style.background = e.target.id;
    }
    if (e.target.id === 'yellow') {
      document.body.style.background = e.target.id;
    }
    if (e.target.id === 'purple') {
      document.body.style.background = e.target.id;
    }
  });
});
