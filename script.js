const cardsContainer = document.getElementById('cards');
const timeframes = document.querySelectorAll('.timeframe');
let currentPeriod = 'weekly';

const data = [
  { title: "Work", daily: { current: 5, previous: 7 }, weekly: { current: 32, previous: 36 }, monthly: { current: 103, previous: 128 } },
  { title: "Play", daily: { current: 1, previous: 2 }, weekly: { current: 10, previous: 8 }, monthly: { current: 23, previous: 29 } },
  { title: "Study", daily: { current: 0, previous: 1 }, weekly: { current: 4, previous: 7 }, monthly: { current: 13, previous: 19 } },
  { title: "Exercise", daily: { current: 1, previous: 1 }, weekly: { current: 4, previous: 5 }, monthly: { current: 11, previous: 18 } },
  { title: "Social", daily: { current: 1, previous: 3 }, weekly: { current: 5, previous: 10 }, monthly: { current: 21, previous: 23 } },
  { title: "Self Care", daily: { current: 0, previous: 1 }, weekly: { current: 2, previous: 2 }, monthly: { current: 7, previous: 11 } }
];

function renderCards() {
  cardsContainer.innerHTML = '';
  data.forEach(item => {
    const period = item[currentPeriod];
    const prevText = currentPeriod === 'daily' ? 'Yesterday' : currentPeriod === 'weekly' ? 'Last Week' : 'Last Month';
    const cardClass = item.title.toLowerCase().replace(' ', '-');

    const cardHTML = `
      <div class="card ${cardClass}">
        <div class="card-content">
          <div class="title">
            <span>${item.title}</span>
            <span class="ellipsis">...</span>
          </div>
          <div class="current">${period.current}hrs</div>
          <div class="previous">${prevText} - ${period.previous}hrs</div>
        </div>
      </div>
    `;
    cardsContainer.innerHTML += cardHTML;
  });
}

timeframes.forEach(btn => {
  btn.addEventListener('click', () => {
    timeframes.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPeriod = btn.dataset.period;
    renderCards();
  });
});

renderCards(); // перший запуск