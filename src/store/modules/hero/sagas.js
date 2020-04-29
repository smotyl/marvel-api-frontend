import { all, takeLatest, put } from 'redux-saga/effects';

import api, { apikey } from '~/services/api';
import {
  getHeroListSuccess,
  getHeroItemSuccess,
  putHeroItemSuccess,
} from './actions';

export function* getHeroList({ payload }) {
  const { filter } = payload;
  const response = yield api.get('/characters', {
    params: {
      ...filter,
      apikey,
    },
  });
  console.log('aaa', response);
  yield put(getHeroListSuccess(response.data.data));
}

export function* getHeroItem({ payload }) {
  const { id } = payload;
  const response = yield api.get(`/characters/${id}`, {
    params: {
      apikey,
    },
  });
  yield put(getHeroItemSuccess(response.data.data.results[0]));
}

export function* putHeroItem({ payload }) {
  const { id, heroName, heroDescription } = payload;

  const response = { id, heroName, heroDescription };

  yield put(putHeroItemSuccess(response));
}

export default all([
  takeLatest('@hero/GET_LIST', getHeroList),
  takeLatest('@hero/GET_ITEM', getHeroItem),
  takeLatest('@hero/PUT_ITEM', putHeroItem),
]);
