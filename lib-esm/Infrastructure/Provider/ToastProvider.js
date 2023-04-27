import React from 'react';
import { ToastContext } from '../context/ToastContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from '../../Components/Toast/Toast';
const ToastProvider = ({ children }) => {
    const [messageToast, setMessageToast] = React.useState('');
    const [showToast, setShowToast] = React.useState(false);
    const [durationToast, setDurationToast] = React.useState(2000);
    const [actionToast, setActionToast] = React.useState(null);
    const value = {
        action: actionToast,
        message: messageToast,
        show: showToast,
        duration: durationToast,
    };
    const handleShowToast = React.useCallback(() => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, durationToast);
    }, [durationToast]);
    const handleToast = React.useMemo(() => ({
        changeToastMessage: (message) => setMessageToast(message),
        changeDurationToast: (duration) => setDurationToast(duration),
        onShowToast: () => handleShowToast(),
        setActionToast: (action) => {
            setActionToast(action);
        },
    }), [handleShowToast]);
    return (<ToastContext.Provider value={{ handleToast, toast: value }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        {children}
        <Toast action={actionToast} duration={durationToast} message={messageToast} show={showToast}/>
      </SafeAreaProvider>
    </ToastContext.Provider>);
};
export default ToastProvider;
