import { selector } from 'recoil';
import { countState } from '../atoms/Count'

const addCountState = selector({
  key: 'addCountState',
  get: ({ get }) => get(countState),
  set: ({ get, set }, newValue) => set(countState, get(countState) + 1),
});

export {
  addCountState,
};
