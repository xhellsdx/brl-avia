export const cityToFormSelected = (e) => {
  return {
    type: 'CITY_TO_FORM_SELECTED',
    cityToId: e.target.value
  };
};

export const cityFromFormSelected = function (e) {
  return {
    type: 'CITY_FROM_FORM_SELECTED',
    cityFromId: e.target.value
  };
};

export const baggageWeightInc = () => {
  return {
    type: 'BAGGAGE_WEIGHT_INC',
  };
};

export const baggageWeightDec = () => {
  return {
    type: 'BAGGAGE_WEIGHT_DEC',
  };
};

export const getTicketsFromAPI = () => {
  return {
    type: 'GET_TICKETS',
  };
};

export const loadingStart = () => {
  return {
    type: 'LOADING_START',
  };
};

export const loadingEnd = (findTickets) => {
  return {
    type: 'LOADING_END',
    findTickets: findTickets
  };
};

export const ticketClick = (e) => {
  const ticketData = {...e.currentTarget.dataset};
  e.currentTarget.classList.toggle('in-basket');
  return {
    type: 'TICKET_CLICK',
    ticketData: ticketData
  };
}

export const ticketInBasketClick = (e) => {
  const id = e.currentTarget.dataset.id;
  e.currentTarget.classList.toggle('in-basket');
  return {
    type: 'TICKET_IN_BASKET_CLICK',
    id: id
  };
}

export const buyButtonClick = () => {
  return {
    type: 'BUY_TICKETS',
  };
}

export const onFindTicketsError = () => {
  return {
    type: 'ERROR',
  };
}