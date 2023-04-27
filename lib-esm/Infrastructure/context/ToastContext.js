import { createContext } from 'react';
const defaultToastValue = {
    action: null,
    message: '',
    show: false,
    duration: 0,
};
const handleToast = {
    changeToastMessage: (_message) => { },
    changeDurationToast: (_duration) => { },
    onShowToast: () => { },
    setActionToast: (_action) => { },
};
const defaultValue = {
    handleToast,
    toast: defaultToastValue,
};
export const ToastContext = createContext(defaultValue);
