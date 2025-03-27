const tabItem = document.querySelectorAll('.tab__item');
const tabContent = document.querySelectorAll('.tab__content');

tabItem.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    tabContent.forEach((content) => {
      content.classList.remove('active');
    });
    tabItem.forEach((content) => {
      content.classList.remove('active');
    });
    tabItem[index].classList.add('active');
    tabContent[index].classList.add('active');
  });
});
