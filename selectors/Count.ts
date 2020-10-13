import { selector } from 'recoil';
import { countState } from '../atoms/Count'

const addCountState = selector({
  key: 'addCountState',
  get: ({ get }) => get(countState),
  set: ({ set }, newValue) => set(countState, newValue),
});

export {
  addCountState,
};
