"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ToastContext_1 = require("../context/ToastContext");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const Toast_1 = __importDefault(require("../../Components/Toast/Toast"));
const ToastProvider = ({ children }) => {
    const [messageToast, setMessageToast] = react_1.default.useState('');
    const [showToast, setShowToast] = react_1.default.useState(false);
    const [durationToast, setDurationToast] = react_1.default.useState(2000);
    const [actionToast, setActionToast] = react_1.default.useState(null);
    const value = {
        action: actionToast,
        message: messageToast,
        show: showToast,
        duration: durationToast,
    };
    const handleShowToast = react_1.default.useCallback(() => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, durationToast);
    }, [durationToast]);
    const handleToast = react_1.default.useMemo(() => ({
        changeToastMessage: (message) => setMessageToast(message),
        changeDurationToast: (duration) => setDurationToast(duration),
        onShowToast: () => handleShowToast(),
        setActionToast: (action) => {
            setActionToast(action);
        },
    }), [handleShowToast]);
    return (<ToastContext_1.ToastContext.Provider value={{ handleToast, toast: value }}>
      <react_native_safe_area_context_1.SafeAreaProvider style={{ flex: 1 }}>
        {children}
        <Toast_1.default action={actionToast} duration={durationToast} message={messageToast} show={showToast}/>
      </react_native_safe_area_context_1.SafeAreaProvider>
    </ToastContext_1.ToastContext.Provider>);
};
exports.default = ToastProvider;
