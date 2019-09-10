const RUN = (function () {
    function setEvent() {
        const calc = document.getElementById('calc');
        calc.onclick = () => handleClick();
    }

    function handleClick() {
        paint(calc());
    }

    function getTodayDate() {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    }

    function getDeathDate(birthday) {
        const dday = document.getElementById('deathday').value;
        let [ year, month, day ] = birthday.split('-');
        year = Number.parseInt(year, 10) + Number.parseInt(dday, 10);
        return `${year}-${month}-${day}`;
    }

    function calc() {
        const bday = document.getElementById('birthday').value;
        const dday = getDeathDate(bday);
        const today = getTodayDate();

        return {
            total: getDiff(new Date(dday), new Date(bday)),
            proebal: getDiff(new Date(today), new Date(bday))
        }
    }

    function getDiff(dateFrom, dateTo) {
        return ((dateFrom.getFullYear() - dateTo.getFullYear()) * 12) + dateFrom.getMonth() - dateTo.getMonth();
    }

    function paint({ total, proebal }) {
        const months = document.getElementById('months');
        let html = '';

        for (let i = 1; i <= total; i++) {
            if (i <= proebal) {
                html += `<div class="proebal" title="Проебал ${proebal}"></div>`;
            } else {
                html += `<div class="left" title="Осталось ${total - proebal}"></div>`;
            }
        }

        months.innerHTML = html;
    }

    function init() {
        setEvent();
    }

    return {
        init: init
    }
})();

RUN.init();