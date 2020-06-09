const tabsBlock = document.querySelectorAll ('.tabs__block');
const tabsText = document.querySelectorAll ('.tabs__text');

for (let i = 0; i < tabsBlock.length; i++) {
    tabsBlock[i].addEventListener ('click', function () {
        if (tabsText[i].classList.contains("tabs__text--off")) {
            tabsText.forEach(element => {
                element.classList.add('tabs__text--off')
                element.classList.remove('tabs__text--on')
            });
            tabsText[i].classList.remove('tabs__text--off');
            tabsText[i].classList.add('tabs__text--on');
        }
    })
}