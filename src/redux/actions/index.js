import TicketsAPI from '../../utils/tickets-api';

const ticketsAPI = new TicketsAPI();

export const cityToFormSelected = e => ({
  type: 'CITY_TO_FORM_SELECTED',
  cityToId: e.target.value,
});

export const cityFromFormSelected = e => ({
  type: 'CITY_FROM_FORM_SELECTED',
  cityFromId: e.target.value,
});

export const baggageWeightInc = () => ({
  type: 'BAGGAGE_WEIGHT_INC',
});

export const baggageWeightDec = () => ({
  type: 'BAGGAGE_WEIGHT_DEC',
});

export const loadingStart = () => ({
  type: 'LOADING_START',
});

export const loadingEnd = findTickets => ({
  type: 'LOADING_END',
  findTickets,
});

export const onFindTicketsError = () => ({
  type: 'ERROR',
});

export const fetchTickets = (cityToId, cityFromId, weight) => (dispatch) => {
  dispatch(loadingStart());
  ticketsAPI.delay(1000)
    .then(() => ticketsAPI.findTickets({
      cityToId,
      cityFromId,
      weight,
    }), dispatch(onFindTicketsError()))
    .then((result) => {
      dispatch(loadingEnd(result));
    });
};

export const ticketClick = ticketData => ({
  type: 'TICKET_CLICK',
  ticketData,
});

export const ticketInBasketClick = id => ({
  type: 'TICKET_IN_BASKET_CLICK',
  id,
});

export const buyButtonClick = () => ({
  type: 'BUY_TICKETS',
});
