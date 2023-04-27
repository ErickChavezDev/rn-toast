"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContext = void 0;
const react_1 = require("react");
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
exports.ToastContext = (0, react_1.createContext)(defaultValue);
