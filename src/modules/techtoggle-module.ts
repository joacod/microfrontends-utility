import { BehaviorSubject } from "rxjs";

const initialTechOnState: boolean = false;

const techOnState$ = new BehaviorSubject<boolean>(initialTechOnState);

export function getTechOn() {
  return techOnState$.getValue();
}

export function setTechOn(value: boolean) {
  techOnState$.next(value);
}

export function resetTechOn() {
  techOnState$.next(initialTechOnState);
}

export const techToggleModule = {
  techOn$: techOnState$.asObservable(),
  getTechOn,
  setTechOn,
  resetTechOn,
};
