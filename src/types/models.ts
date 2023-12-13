export interface IRecievedData {
    amount: number;
    date?: string;
    month?: string;
    year?: number;
}

export interface IComponentsProps {
    list: IRecievedData[];
}

export interface IDataToState {
    (data: IRecievedData[], componentType: string): IRecievedData[];
}

export type TComponentName = 'yearTable' | 'monthTable' | 'sortTable';