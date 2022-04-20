import { IState } from './interfaces/State';
import { HasCoinState } from './states/HasCoinState';

export class GumballMachine {
  hasCoinState: IState;
  amountOfGumball: number = 0;

  constructor(amount: number) {
    this.amountOfGumball = amount;
    this.hasCoinState = new HasCoinState(this);
  }
}
