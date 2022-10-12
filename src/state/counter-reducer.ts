import { ButtonClickType } from '../componens/Settings_1/Settings_1';

export type InitialValueState = {
  figure: number;
  inputStart: number;
  inputMax: number;
  incorrectInput: string | null;
  editMode: boolean;
  buttonClick: ButtonClickType[];
};

export let initialValueState: InitialValueState = {
  figure: 0,
  inputStart: 0,
  inputMax: 0,
  incorrectInput: null,
  editMode: false,
  buttonClick: [
    { id: 1, title: 'inc' },
    { id: 2, title: 'reset' },
  ],
};

type CounterReducerType =
  | FigureDisplayACType
  | InputStartACType
  | InputMaxACType
  | IncorrectInputACType
  | EditModeACType
  | ButtonClickACType;

type FigureDisplayACType = ReturnType<typeof figureDisplayAC>;
type InputStartACType = ReturnType<typeof inputStartAC>;
type InputMaxACType = ReturnType<typeof inputMaxAC>;
type IncorrectInputACType = ReturnType<typeof incorrectInputAC>;
type EditModeACType = ReturnType<typeof editModeAC>;
type ButtonClickACType = ReturnType<typeof buttonClickAC>;

export const counterReducer = (
  state = initialValueState,
  action: CounterReducerType,
): InitialValueState => {
  switch (action.type) {
    case 'FIGURE-DISPLAY':
      return {
        ...state,
        figure: action.valueDisplay,
      };
    case 'INPUT-START':
      return {
        ...state,
        inputStart: action.valueStart,
      };
    case 'INPUT-MAX':
      return {
        ...state,
        inputMax: action.valueMax,
      };
    case 'INCORRECT-INPUT':
      return {
        ...state,
        incorrectInput: action.error,
      };
    case 'EDIT-MODE':
      return {
        ...state,
        editMode: action.editMode,
      };
    case 'BUTTON-CLICK':
      return { ...state };

    default:
      return state;
  }
};

export const figureDisplayAC = (valueDisplay: number): any => {
  return {
    type: 'FIGURE-DISPLAY',
    valueDisplay,
  } as const;
};

export const inputStartAC = (valueStart: number): any => {
  return {
    type: 'INPUT-START',
    valueStart,
  } as const;
};

export const inputMaxAC = (valueMax: number): any => {
  return {
    type: 'INPUT-MAX',
    valueMax,
  } as const;
};

export const incorrectInputAC = (eror: string | null): any => {
  return {
    type: 'INCORRECT-INPUT',
    error: eror,
  } as const;
};

export const editModeAC = (editMode: boolean): any => {
  return {
    type: 'EDIT-MODE',
    editMode,
  } as const;
};

export const buttonClickAC = (): any => {
  return {
    type: 'BUTTON-CLICK',
  } as const;
};
