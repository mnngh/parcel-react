function Header(inText) {
  const elH1 = document.createElement('h1');
  elH1.textContent = inText;
  elH1.id = 'title';
  elH1.className = 'red';
  return elH1;
}

export const myText = 'My super text';

export default Header;
