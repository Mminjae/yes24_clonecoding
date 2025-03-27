const tabItems = document.querySelectorAll('.tab__item');
const tabContents = document.querySelectorAll('.tab__content');

// 각 탭 아이템에 클릭 이벤트를 추가
for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener('click', function (event) {
    // 클릭했을 때 기본 동작 막기
    event.preventDefault();

    // 모든 탭 아이템과 탭 콘텐츠에서 active클래스를 제거
    for (let j = 0; j < tabItems.length; j++) {
      tabItems[j].classList.remove('active');
      tabContents[j].classList.remove('active');
    }

    // 해당하는 콘텐츠에 active클래스를 추가
    tabItems[i].classList.add('active');
    tabContents[i].classList.add('active');
  });
}
