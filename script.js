const weekdaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function setDate() {
    const dateDiv = document.querySelector('.day');

    const dateInfo = new Date();
    const dateToday = dateInfo.getDate();
    const monthToday = dateInfo.getMonth();
    const yearToday = dateInfo.getFullYear();
    const dayToday = dateInfo.getDay();

    const dateInfoElement = document.createElement('span');
    dateInfoElement.textContent = `${weekdaysArray[dayToday]}, ${dateToday} ${monthsArray[monthToday]} ${yearToday}`;

    dateDiv.appendChild(dateInfoElement);
}

setDate();
