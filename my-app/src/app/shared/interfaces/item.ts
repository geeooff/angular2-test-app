import { State } from '../enums/state.enum';

export interface Item {
  id: number;
  name: string;
  reference: string;
  state: State;
}
