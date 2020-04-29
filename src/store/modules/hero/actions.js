// get List
export function getHeroList(filter) {
  return {
    type: '@hero/GET_LIST',
    payload: { filter },
  };
}

export function getHeroListSuccess(heroList) {
  return {
    type: '@hero/GET_LIST_SUCCESS',
    payload: { heroList },
  };
}

export function getHeroListFailure() {
  return {
    type: '@hero/GET_LIST_FAILURE',
  };
}

// get Item
export function getHeroItem(id) {
  return {
    type: '@hero/GET_ITEM',
    payload: { id },
  };
}

export function getHeroItemSuccess(heroItem) {
  return {
    type: '@hero/GET_ITEM_SUCCESS',
    payload: { heroItem },
  };
}

export function getHeroItemFailure() {
  return {
    type: '@hero/GET_ITEM_FAILURE',
  };
}

// put Item
export function putHeroItem({ id, heroName, heroDescription }) {
  return {
    type: '@hero/PUT_ITEM',
    payload: { id, heroName, heroDescription },
  };
}

export function putHeroItemSuccess(heroItem) {
  return {
    type: '@hero/PUT_ITEM_SUCCESS',
    payload: { heroItem },
  };
}

export function putHeroItemFailure() {
  return {
    type: '@hero/PUT_ITEM_FAILURE',
  };
}
