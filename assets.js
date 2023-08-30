export const styles = `
:root{
    --calendar-tour-secundary: #155288

}

 .calendar-tours {
    width: 100%;
    margin: 15px 30px;
    height: fit-content;
    font-family: 'Roboto', sans-serif;
  }
  
  .calendar-tours p {
    margin-bottom: 15px;
  }
  
  .calendar-tours .content-calendar {
    background-color: #FFF;
    box-shadow: 1px 4px 20px 0px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
  }
  
   .calendar-tours .content-calendar .img-calendar-tour {
    height: 250px;
    overflow: hidden;
    border-radius: 5px;
  }
  
   .calendar-tours .content-calendar .img-calendar-tour img {
    min-height: 100%;
    object-fit: cover;
    width: 100%;
  }
  
     .calendar-tours .content-calendar .content__calendar{
    padding: 35px 35px 15px;
  }
  
  .calendar-tours .content-calendar .content__calendar .title__calendar {
    color: #000;
    margin-top:0px;
    font-size: 20px;
  }
  
  .calendar-tours .content-calendar .content__calendar .pricing {
    color: var(--calendar-tour-secundary);
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  
    .calendar-tours .content-calendar .content__calendar .montos__calendar  {
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
  }
  
  .calendar-tours .content-calendar .content__calendar .montos__calendar  .item__calendar  {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
 .calendar-tours .content-calendar .content__calendar .montos__calendar  .item__calendar  p {
    margin-bottom: 6px;
    margin-top:6px;
    font-size: 15px;
  }
  
   .calendar-tours .content-calendar .content__calendar .montos__calendar  .item__calendar  p:last-child {
    text-align: right;
    font-weight: bold;
  }
  
 .calendar-tours .content-calendar .content__calendar .title-calendar {
    margin-top: 18px;
    font-weight: 700;
  }
  
   .calendar-tours .content-calendar .content__calendar .btn__tour {
    font-size: 18px;
    text-align: center;
  }
  
  @media screen and (max-width: 768px) {
    .calendar-tours {
      width: 90% !important;
      margin: 0px !important;
      margin-top: 15px !important;
      height: fit-content !important;
      padding: 0px !important;
    }
  }
  
  .calendar {
    width: 100%;
    min-height: 300px;
    margin: 1em auto;
    padding: 0.5em 0;
    border: 1px solid #e7e7e7;
    border-radius: 10px;
  }
  
  .calendar__info {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    margin: .5rem;
  }
  
  .calendar__prev,
  .calendar__next {
    color: var(--calendar-tour-secundary);
    cursor: pointer;
    font-size: 1.3em;
  }
  
  .calendar__prev {
    margin-right: auto;
  }
  
  .calendar__next {
    margin-left: auto;
  }
  
  .calendar__week,
  .calendar__dates {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0px;
    padding: 0.5rem;
  }
  
  .calendar__month,
  .calendar__year {
    padding: .5em 1em;
  }
  
  .calendar__item {
    text-align: center;
    line-height: 2;
  }
  
  .calendar__today {
    background: var(--calendar-tour-secundary);
    color: white;
    border-radius: 10%;
    margin: auto;
  }
  
  .calendar__last-days {
    opacity: .3;
  }
  
  .calendar__date {
    cursor: pointer;
    margin: .2rem;
  }
  
  .calendar__date:hover {
    background: var(--calendar-tour-secundary);
    color: white;
    width: 80%;
    border-radius: 10%;
    margin: auto;
  }

  .btn__tour {
    padding: 10px 28px;
    font-weight: 700;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    display: block;
    background: var(--calendar-tour-secundary);
    text-decoration:none;

  }

  .is-hidden-tour{
    display:none !important;
  }
  
`;
