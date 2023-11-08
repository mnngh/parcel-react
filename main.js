import Header, { myText } from './headers';

const app = document.getElementById('app');

const elP = document.createElement('p');
elP.textContent = myText;
app.appendChild(Header('Main Header'));
app.appendChild(Header('Second Header'));
app.appendChild(elP);
