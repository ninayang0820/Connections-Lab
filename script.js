const leftBtnEl = document.querySelector('.left-btn');
const rightBtnEl = document.querySelector('.right-btn');

const imgEl1 = document.querySelector('.img1');
const imgEl2 = document.querySelector('.img2');

const title = document.querySelector('.title');

leftBtnEl.addEventListener('click', () => {
  imgEl1.style.display = 'block';
  imgEl2.style.display = 'none';
  title.textContent = '“Who is she?"';
});

rightBtnEl.addEventListener('click', () => {
  imgEl1.style.display = 'none';
  imgEl2.style.display = 'block';
  title.textContent = `"Grandpa, that's Grandmother."`;
});




