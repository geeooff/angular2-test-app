import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 1,
    name: 'Mathieu',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 2,
    name: 'Vlad',
    reference: '2311',
    state: State.ENCOURS
  },
  {
    id: 3,
    name: 'Juliette',
    reference: '3344',
    state: State.LIVREE
  }
];
