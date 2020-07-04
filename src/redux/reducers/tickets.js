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
      return {
        ...state,
        filter: {
          ...state.filter,
          cityToId: action.cityToId,
        },
      };
    }

    case 'CITY_FROM_FORM_SELECTED': {
      return {
        ...state,
        filter: {
          ...state.filter,
          cityFromId: action.cityFromId,
        },
      };
    }

    case 'BAGGAGE_WEIGHT_INC': {
      return {
        ...state,
        filter: {
          ...state.filter,
          weight: state.filter.weight + 1,
        },
      };
    }

    case 'BAGGAGE_WEIGHT_DEC': {
      return {
        ...state,
        filter: {
          ...state.filter,
          weight: state.filter.weight - 1,
        },
      };
    }

    case 'LOADING_END': {
      return {
        ...state,
        findTickets: action.findTickets,
        loading: false,
        error: false,
      };
    }

    case 'LOADING_START': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'TICKET_CLICK': {
      const newTicketsInBasket = { ...state.ticketsInBasket };
      let newTicketsInBasketCount = state.ticketsInBasketCount;

      if (newTicketsInBasket[action.ticketData.id]) {
        delete newTicketsInBasket[action.ticketData.id];
        newTicketsInBasketCount -= 1;
      } else {
        newTicketsInBasket[action.ticketData.id] = action.ticketData;
        newTicketsInBasketCount += 1;
      }
      return {
        ...state,
        ticketsInBasket: newTicketsInBasket,
        ticketsInBasketCount: newTicketsInBasketCount,
      };
    }

    case 'TICKET_IN_BASKET_CLICK': {
      const newTicketsInBasket = { ...state.ticketsInBasket };
      delete newTicketsInBasket[action.id];
      return {
        ...state,
        ticketsInBasket: newTicketsInBasket,
        ticketsInBasketCount: state.ticketsInBasketCount - 1,
      };
    }

    case 'ERROR': {
      return {
        ...state,
        error: true,
      };
    }

    case 'BUY_TICKETS': {
      if (state.ticketsInBasketCount !== 0) {
        console.log(`Данные, которые отправляем на сервер: ${JSON.stringify(state.ticketsInBasket)}`);
      }
      return state;
    }

    default:
      return state;
  }
};

export default updateTickets;
