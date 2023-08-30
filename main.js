import { styles } from "assets.js";



let tempDate = new Date();
const CalendarApp = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  currentDate: tempDate,
  currentDay: tempDate.getDate(),
  monthNumber: tempDate.getMonth(),
  currentYear: tempDate.getFullYear(),
  dates: null,
  month: null,
  year: null,
  prevMonthDOM: null,
  nextMonthDOM: null,


  async init() {
    this.injectStyles();
    await this.render()
    this.month = document.getElementById('month'); // Actualizar la referencia después de renderizar.
    this.dates = document.getElementById('dates');
    this.year = document.getElementById('year');
    this.prevMonthDOM = document.getElementById('prev-month');
    this.nextMonthDOM = document.getElementById('next-month');

    this.month.textContent = this.monthNames[this.monthNumber];
    this.year.textContent = this.currentYear.toString();

    this.prevMonthDOM.addEventListener('click', () => this.lastMonth());
    this.nextMonthDOM.addEventListener('click', () => this.nextMonth());

    this.writeMonth(this.monthNumber);

    this.getCalendar()

    let calendar__next = document.getElementById('next-month');
    if (calendar__next) {
      calendar__next.addEventListener('click', () => this.getCalendar());
    }

    let calendar__prev = document.getElementById('prev-month');
    if (calendar__prev) {
      calendar__prev.addEventListener('click', () => this.getCalendar());
    }
  },

  writeMonth(month) {
    for (let i = this.startDay(); i > 0; i--) {
      dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days" data-day ="${this.getTotalDays(this.monthNumber - 1) - (i - 1)}" data_last_day ="${this.getTotalDays(this.monthNumber - 1) - (i - 1)}" data_disabled="${this.getTotalDays(this.monthNumber - 1) - (i - 1)}">
                  ${this.getTotalDays(this.monthNumber - 1) - (i - 1)}
              </div>`;
    }

    for (let i = 1; i <= this.getTotalDays(month); i++) {

      let rule = this.ruleCalendar(i);
      let opacity = "";
      let disabled = '';
      if (rule == true) {

        opacity = "calendar__last-days";
        disabled = i;
      }

      dates.innerHTML += ` <div class="calendar__date calendar__item ${opacity}" data_disabled ="${disabled}"  data-day ="${i}">${i}</div>`;

    }
  },

  getTotalDays(month) {
    if (month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return 31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;

    } else {

      return this.isLeap() ? 29 : 28;
    }
  },

  isLeap() {
    return ((this.currentYear % 100 !== 0) && (this.currentYear % 4 === 0) || (this.currentYear % 400 === 0));
  },

  startDay() {
    let start = new Date(this.currentYear, this.monthNumber, 1);
    return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
  },

  lastMonth() {
    if (this.monthNumber !== 0) {
      this.monthNumber--;
    } else {
      this.monthNumber = 11;
      this.currentYear--;
    }

    this.setNewDate();
  },

  nextMonth() {
    if (this.monthNumber !== 11) {
      this.monthNumber++;
    } else {
      this.monthNumber = 0;
      this.currentYear++;
    }

    this.setNewDate();
  },

  setNewDate() {
    this.currentDate.setFullYear(this.currentYear, this.monthNumber, this.currentDay);
    month.textContent = this.monthNames[this.monthNumber];
    year.textContent = this.currentYear.toString();
    dates.textContent = '';
    this.writeMonth(this.monthNumber);
  },

  getCalendar() {
    let calendar_date = document.querySelectorAll('.calendar__date');

    if (calendar_date != null) {

      calendar_date.forEach((el) => {

        el.addEventListener('click', (e) => {

          let day = e.target.getAttribute('data-day');
          let data_last_day = e.target.getAttribute('data_last_day');
          let disabledDate = e.target.getAttribute('data_disabled');

          if (data_last_day == null && disabledDate == '') {

            let formtMont = this.monthNumber;
            let formtDay = day;

            if (this.monthNumber <= 9) {

              let sumMount = this.monthNumber + 1;
              formtMont = '0' + parseInt(sumMount);
            }

            if (day <= 9) {

              formtDay = '0' + day;
            }

            const dateActual = this.formatDateActual();
            let date_ticket = this.currentYear.toString() + '-' + formtMont + '-' + formtDay;

            if (dateActual == date_ticket) {
              alert("The selected date is not available. Please choose another date.");
            } else {
              const inputDateTicket = document.getElementById('dateTicket');
              if (inputDateTicket != null) {

                this.removeSelectDate(calendar_date);
                el.classList.add('calendar__today');
                inputDateTicket.value = date_ticket;
              }
            }

          }

        });

      });

    }
  },

  removeSelectDate(calendar_date) {
    if (calendar_date != null) {
      calendar_date.forEach((el) => {

        el.classList.remove('calendar__today');

      });

    }
  },

  ruleCalendar(i) {
    let currentDate = new Date();
    const dateActual = this.getDateActual();
    const dateAnterior = this.currentYear + '-' + this.monthNumber + '-' + i;

    let status = false;
    if (new Date(dateAnterior) < new Date(dateActual)) {
      status = true;
    }

    return status;
  },

  getDateActual() {

    let currentDate = new Date();
    const dateActual = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDate();
    return dateActual;
  },

  formatDateActual() {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    if (currentDate.getMonth() <= 9) {
      let sumMount = currentDate.getMonth() + 1;
      month = '0' + parseInt(sumMount);
    }
    if (currentDate.getDate() <= 9) {

      day = '0' + parseInt(currentDate.getDate());
    }
    const dateActual = currentDate.getFullYear() + '-' + month + '-' + day;
    return dateActual;
  },
  getTomorrowDate() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let year = tomorrow.getFullYear();
    let month = ('0' + (tomorrow.getMonth() + 1)).slice(-2); // Asegura que el mes tenga dos dígitos
    let day = ('0' + tomorrow.getDate()).slice(-2);          // Asegura que el día tenga dos dígitos
    return `${year}-${month}-${day}`;
  },
  async render() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let tomorrow = this.getTomorrowDate();
        let htmlContent = `
                <section class="calendar-tours">
                     <p> Get your Chichen Itza tickets here!</p>

                        <div class=" content-calendar">
                            <div class="img-calendar-tour"><img src="http://www.chichenitza.com/public/assets/img/chichen-itza-tour/chichen-itza-tour-1.jpg" /></div>
                            <div class="content__calendar">
                                <h3 class="title__calendar">Chichen Itza Entrance Tickets </h3>

                                <p class="pricing">Pricing</small></p>

                                <hr>


                                <div class="montos__calendar">
                                    <div class="item__calendar">
                                        <p>Adults</p>
                                        <p>65 USD</p>
                                    </div>
                                    <div class="item__calendar">
                                        <p>Children</p>
                                        <p>32 USD</p>
                                    </div>
                                    <div class="item__calendar">
                                        <p>Infants</p>
                                        <p>Free</p>
                                    </div>
                                </div>

                                <p class="title-calendar">Choose a date</p>

                                <div class="control is-hidden-tour">
                                <input type="date" name="dateTicket" id="dateTicket" class="input is-medium " value="${tomorrow}" min="${tomorrow}">
                            </div>
                                <!-- calendar -->
                                <div class="calendar">
                                    <div class="calendar__info">
                                        <div class="calendar__prev" id="prev-month">&#9664;</div>
                                        <div class="calendar__month" id="month"></div>
                                        <div class="calendar__year" id="year"></div>
                                        <div class="calendar__next" id="next-month">&#9654;</div>
                                    </div>

                                    <div class="calendar__week">
                                        <div class="calendar__day calendar__item">Mon</div>
                                        <div class="calendar__day calendar__item">Tue</div>
                                        <div class="calendar__day calendar__item">Wed</div>
                                        <div class="calendar__day calendar__item">Thu</div>
                                        <div class="calendar__day calendar__item">Fri</div>
                                        <div class="calendar__day calendar__item">Sat</div>
                                        <div class="calendar__day calendar__item">Sun</div>
                                    </div>

                                    <div class="calendar__dates" id="dates"></div>
                                </div>


                                <a href=" " class="btn__tour ">Book now</a>


                            </div>

                        </div>
                    </section>
              `
        document.querySelector('#calendarCat').innerHTML = htmlContent;
        resolve();
      }, 2000); // Espera 2 segundos para simular un proceso de renderización.
    });



  },
  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

};

async function initializeWidget() {
  await CalendarApp.init();
}
initializeWidget();
