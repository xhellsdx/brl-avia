const initialState = {
  findTickets: {},
  ticketsInBasket: {},
  ticketsInBasketCount: 0,
  filter: { cityToId: null, cityFromId: null, weight: 6 },
  loading: false,
  error: false,
};

const updateTickets = (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_TO_FORM_SELECTED': {
      const { ...returnData } = state;
      returnData.filter.cityToId = action.cityToId;
      return returnData;
    }

    case 'CITY_FROM_FORM_SELECTED': {
      const { ...returnData } = state;
      returnData.filter.cityFromId = action.cityFromId;
      return returnData;
    }

    case 'BAGGAGE_WEIGHT_INC': {
      const { ...returnData } = state;
      returnData.filter.weight = state.filter.weight + 1;
      return returnData;
    }

    case 'BAGGAGE_WEIGHT_DEC': {
      const { ...returnData } = state;
      returnData.filter.weight = state.filter.weight - 1;
      return returnData;
    }

    case 'LOADING_END': {
      const { ...returnData } = state;
      returnData.findTickets = action.findTickets;
      returnData.loading = false;
      returnData.error = false;
      return returnData;
    }

    case 'LOADING_START': {
      const { ...returnData } = state;
      returnData.loading = true;
      return returnData;
    }

    case 'TICKET_CLICK': {
      const { ...returnData } = state;
      if (returnData.ticketsInBasket[action.ticketData.id]) {
        delete returnData.ticketsInBasket[action.ticketData.id];
        returnData.ticketsInBasketCount -= 1;
      } else {
        returnData.ticketsInBasket[action.ticketData.id] = action.ticketData;
        returnData.ticketsInBasketCount += 1;
      }
      return returnData;
    }

    case 'TICKET_IN_BASKET_CLICK': {
      const { ...returnData } = state;
      delete returnData.ticketsInBasket[action.id];
      returnData.ticketsInBasketCount -= 1;
      return returnData;
    }

    case 'ERROR': {
      const { ...returnData } = state;
      returnData.error = true;
      return returnData;
    }

    case 'BUY_TICKETS': {
      if (state.ticketsInBasketCount === 0) return state;
      const { ticketsInBasket } = state;
      console.log(`Данные, которые отправляем на сервер: ${JSON.stringify(ticketsInBasket)}`);
      return state;
    }

    default:
      return state;
  }
};

export default updateTickets;
