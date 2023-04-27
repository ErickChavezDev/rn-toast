import React from 'react';
import {ToastContext} from '../context/ToastContext';
import {IAction, IToast} from '../../Domain/Entities/Toast';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from '../../Components/Toast/Toast';

interface ToastProviderProp {
  children?: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProp> = ({children}) => {
  const [messageToast, setMessageToast] = React.useState<string>('');
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [durationToast, setDurationToast] = React.useState<number>(2000);

  const [actionToast, setActionToast] = React.useState<
    IAction | null | undefined
  >(null);

  const value: IToast = {
    action: actionToast,
    message: messageToast,
    show: showToast,
    duration: durationToast,
  };

  const handleShowToast = React.useCallback(() => {
    console.log('hola mundo');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, durationToast);
  }, [durationToast]);

  const handleToast = React.useMemo(
    () => ({
      changeToastMessage: (message: string) => setMessageToast(message),
      changeDurationToast: (duration: number) => setDurationToast(duration),
      onShowToast: () => handleShowToast(),
      setActionToast: (action: IAction | null | undefined) => {
        setActionToast(action);
      },
    }),
    [handleShowToast],
  );
  return (
    <ToastContext.Provider value={{handleToast, toast: value}}>
      <SafeAreaProvider style={{flex: 1}}>
        {children}
        <Toast
          action={actionToast}
          duration={durationToast}
          message={messageToast}
          show={showToast}
        />
      </SafeAreaProvider>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
