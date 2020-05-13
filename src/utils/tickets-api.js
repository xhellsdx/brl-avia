/* eslint-disable no-underscore-dangle */

export default class TicketsAPI {
  _tickets = [
    {
      id: 1,
      from: 'Санкт-Петербург',
      to: 'Москва',
      time_departure: '20-05-2018 8:20',
      time_arrival: '20-05-2018 9:20',
      price: 40000,
      laggage_max: 5,
      duration: 3,
    },
    {
      id: 2,
      from: 'Санкт-Петербург',
      to: 'Москва',
      time_departure: '21-05-2018 9:20',
      time_arrival: '21-05-2018 10:20',
      price: 50000,
      laggage_max: 8,
      duration: 3,
    },
    {
      id: 3,
      from: 'Санкт-Петербург',
      to: 'Москва',
      time_departure: '22-05-2018 9:20',
      time_arrival: '22-05-2018 10:20',
      price: 60000,
      laggage_max: 12,
      duration: 3,
    },
    {
      id: 4,
      from: 'Париж',
      to: 'Лондон',
      time_departure: '22-05-2018 9:20',
      time_arrival: '22-05-2018 17:20',
      price: 60000,
      laggage_max: 12,
      duration: 8,
    },
    {
      id: 5,
      from: 'Париж',
      to: 'Лондон',
      time_departure: '22-05-2018 9:20',
      time_arrival: '22-05-2018 17:20',
      price: 20000,
      laggage_max: 4,
      duration: 8,
    },
    {
      id: 6,
      from: 'Париж',
      to: 'Лондон',
      time_departure: '10-05-2018 9:20',
      time_arrival: '10-05-2018 17:20',
      price: 65000,
      laggage_max: 6,
      duration: 8,
    },
    {
      id: 7,
      from: 'Вашингтон',
      to: 'Оттава',
      time_departure: '22-05-2018 9:20',
      time_arrival: '22-05-2018 17:20',
      price: 60000,
      laggage_max: 5,
      duration: 15,
    },
    {
      id: 8,
      from: 'Вашингтон',
      to: 'Оттава',
      time_departure: '10-05-2018 9:20',
      time_arrival: '10-05-2018 17:20',
      price: 50000,
      laggage_max: 5,
      duration: 16,
    },
    {
      id: 9,
      from: 'Вашингтон',
      to: 'Оттава',
      time_departure: '22-05-2018 9:20',
      time_arrival: '22-05-2018 17:20',
      price: 90000,
      laggage_max: 5,
      duration: 16,
    },
  ]

  _citisId = {
    1: 'Москва',
    2: 'Санкт-Петербург',
    3: 'Париж',
    4: 'Лондон',
    5: 'Вашингтон',
    6: 'Оттава',
  };

  delay = ms => new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    })

  findTickets = ({ cityFromId, cityToId, weight }) => {
    const returnTickets = {};
    const cityFromName = this._citisId[parseInt(cityFromId, 10)];
    const cityToName = this._citisId[parseInt(cityToId, 10)];
    this._tickets.forEach((e) => {
      if (
        e.from === cityFromName
        && e.to === cityToName
        && e.laggage_max >= weight
      ) {
        returnTickets[e.id] = e;
      }
    });
    return returnTickets;
  };
}
