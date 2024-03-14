const tabsTitle = document.querySelectorAll('.tab__button');
const tabsContent = document.querySelectorAll('.tab__body');

tabsTitle.forEach(item => item.addEventListener('click', event =>{
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-body'));

    item.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-body');


}));
console.log(tabsTitle);
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-body');