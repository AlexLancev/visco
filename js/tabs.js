const dataTab = document.querySelectorAll('[data-tab]');
const dataTabContent = document.querySelectorAll('[data-tab-content]');

dataTab.forEach(function (item) {
    item.addEventListener('click', function () {

        const noActiv = document.querySelector('.tabs-link--active');
        noActiv.classList.remove('tabs-link--active');
        this.classList.add('tabs-link--active');

        dataTabContent.forEach(function (item) {
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');

    })
})