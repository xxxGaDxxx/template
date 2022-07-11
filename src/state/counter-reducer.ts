import {ButtonClickType} from '../App';


export type InitialValueState = {
    figure: number
    inputStart: number
    inputMax: number
    incorrectInput: string | null
    editMode: boolean
    buttonClick: ButtonClickType[]
}


export let initialValueState: InitialValueState = {
    figure: 0,
    inputStart: 0,
    inputMax: 0,
    incorrectInput: null,
    editMode: false,
    buttonClick: [
        {id: 1, title: 'inc'},
        {id: 2, title: 'reset'},
    ]
}


export const counterReducer = (state = initialValueState, action: CounterReducerType) => {
    switch (action.type) {
        case 'FIGURE-DISPLAY':
            return {
                ...state,
                figure: action.valueDisplay,
            }
        case 'INPUT-START':
            return {
                ...state,
                inputStart: action.valueStart,
            }
        case 'INPUT-MAX':
            return {
                ...state,
                inputMax: action.valueMax
            }
        case 'INCORRECT-INPUT':
            return {
                ...state,
                incorrectInput: action.eroor
            }
        case 'EDIT-MODE':
            return {
                ...state,
                editMode: action.editMode
            }
        case 'BUTTON-CLICK':
            return {...state}

        default :
            return state
    }
}


type CounterReducerType = FigureDisplayACType
    | InputStartACType
    | InputMaxACType
    | IncorrectInputACType
    | EditModeACType
    | ButtonClickACType

type FigureDisplayACType = ReturnType<typeof figureDisplayAC>

export const figureDisplayAC = (valueDisplay: number,) => {
    return {
        type: 'FIGURE-DISPLAY',
        valueDisplay,
    } as const
}

type InputStartACType = ReturnType<typeof inputStartAC>

export const inputStartAC = (valueStart: number) => {
    return {
        type: 'INPUT-START',
        valueStart,
    } as const
}

type InputMaxACType = ReturnType<typeof inputMaxAC>

export const inputMaxAC = (valueMax: number) => {
    return {
        type: 'INPUT-MAX',
        valueMax,
    } as const
}

type IncorrectInputACType = ReturnType<typeof incorrectInputAC>

export const incorrectInputAC = (eroor: string | null) => {
    return {
        type: 'INCORRECT-INPUT',
        eroor,
    } as const
}

type EditModeACType = ReturnType<typeof editModeAC>

export const editModeAC = (editMode: boolean) => {
    return {
        type: 'EDIT-MODE',
        editMode,
    } as const
}

type ButtonClickACType = ReturnType<typeof buttonClickAC>

export const buttonClickAC = () => {
    return {
        type: 'BUTTON-CLICK',
    } as const
}
