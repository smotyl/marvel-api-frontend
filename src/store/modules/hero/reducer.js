const INITIAL_STATE = {
  list: { results: [] },
  item: {},
};

export default function hero(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@hero/GET_LIST_SUCCESS':
      return { list: action.payload.heroList };
    case '@hero/GET_ITEM_SUCCESS':
      return { ...state, item: action.payload.heroItem };
    case '@hero/PUT_ITEM_SUCCESS':
      return {
        ...state,
        item: {
          ...state.item,
          name: action.payload.heroItem.heroName,
          description: action.payload.heroItem.heroDescription,
        },
      };
    default:
      return state;
  }
}
