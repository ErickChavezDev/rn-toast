export interface IToast {
    message?: string;
    show?: boolean;
    action?: IAction | null | undefined;
    duration?: number;
}
export interface IAction {
    message: string;
    onPress?(): void;
    color?: string;
}
export interface IProvider {
    toast: IToast;
    handleToast: {
        changeToastMessage: (message: string) => void;
        changeDurationToast: (duration: number) => void;
        onShowToast: () => void;
        setActionToast: (action: IAction | null | undefined) => void;
    };
}
