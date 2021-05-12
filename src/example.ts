export type Concat = (str1: string, str2: string) => string;

export type SimeData = number | string;

export interface MyHomeTaskData {
  howIDoIt: string;
  simeArray: SimeData[];
}

export type MyHomeTask = MyHomeTaskData & {
  withData: MyHomeTaskData[];
};

export interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (accumulator: U, currentValue: T, index: number, array: MyArray<T>) => U, initialValue: U): U;
}
