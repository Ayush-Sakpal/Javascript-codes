const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener(
    'click',
    // e -> Event object
    // e.target -> Where does this event come from
    (e) => {
      if (e.target.id === 'grey') {
        // console.log(e);
        // console.log(e.target);
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'white') {
        // console.log(e);
        // console.log(e.target);
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        // console.log(e);
        // console.log(e.target);
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        // console.log(e);
        // console.log(e.target);
        body.style.backgroundColor = e.target.id;
      }
    }
  );
});
