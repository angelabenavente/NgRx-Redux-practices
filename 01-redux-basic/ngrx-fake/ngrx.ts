export interface Action { //Object rules
  type: string;
  payload?: any;
};

export interface Reducer<T> {
  ( state: T, action: Action ): T 
};