const displayPopup = () => {
  const content = document.querySelector('body');
  const popUp = document.createElement('div');
  const xIcon = document.createElement('img');
  const innerPopup = document.createElement('div');
  const button = document.createElement('button');
  innerPopup.innerHTML = `
  <h1>We've got a deal for you.</h1>
  <p>Click below for your special offer, just for you.</p>
  `;
  button.innerHTML = 'Claim Now';
  button.id = 'claim';
  xIcon.src =
    'https://cdn1.iconfinder.com/data/icons/basic-ui-rounded/512/ui-02-512.png';
  xIcon.alt = 'x icon';
  xIcon.className = 'icon';
  popUp.classList.add('popup');
  //   popUp.classList.add('hide');
  innerPopup.className = 'innerPopup';

  xIcon.addEventListener('click', () => {
    content.removeChild(popUp);
  });

  innerPopup.appendChild(button);
  popUp.appendChild(xIcon);
  popUp.appendChild(innerPopup);
  content.appendChild(popUp);
};

setTimeout(displayPopup, 5000);
