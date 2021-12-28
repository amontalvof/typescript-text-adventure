export interface IState {
    blueGoo?: boolean;
    sword?: boolean;
    shield?: boolean;
}

export interface IOption {
    text: string;
    nextText: number;
    setState?: IState;
    requiredState?: (state: IState) => boolean | undefined;
}

export interface ITextNode {
    id: number;
    text: string;
    options: IOption[];
}
