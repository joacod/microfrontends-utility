import { BehaviorSubject } from "rxjs";

// Initialize the shared count state with an initial value
const countSubject = new BehaviorSubject<number>(0);

// Expose an observable to subscribe to the count changes
export const count$ = countSubject.asObservable();

// Define getter and setter functions for the count
const getCartCount = (): number => {
  return countSubject.getValue();
};

export const setCartCount = (): void => {
  countSubject.next(getCartCount() + 1);
};
