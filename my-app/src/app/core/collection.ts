import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Mathieu',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Vlad',
    reference: '2311',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Juliette',
    reference: '3344',
    state: State.LIVREE
  }
];
