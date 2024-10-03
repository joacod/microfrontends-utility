import { BehaviorSubject } from "rxjs";

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

const initialState: Item[] = [];

const checkoutState$ = new BehaviorSubject<Item[]>(initialState);

export function addItem(item: Item) {
  const currentState = checkoutState$.getValue();
  checkoutState$.next([...currentState, item]);
}

export function removeItem(id: number) {
  const currentState = checkoutState$.getValue();
  const updatedState = currentState.filter((item) => item.id !== id);
  checkoutState$.next(updatedState);
}

export function reset() {
  checkoutState$.next(initialState);
}

export function getItems() {
  return checkoutState$.getValue();
}

export const checkoutModule = {
  items$: checkoutState$.asObservable(),
  addItem,
  removeItem,
  getItems,
  reset,
};
