export {default as ToastProvider} from './src/Infrastructure/Provider/ToastProvider';
export {default as useToast} from './src/hook/useToast';
/* 
import React, {useCallback, useEffect} from 'react';
import {View, Button, SafeAreaView, Alert} from 'react-native';

import {ToastProvider, useToast} from './src/index';
import {IAction} from './src/Domain/Entities/Toast';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <ToastProvider>
      <SafeAreaView style={{flex: 1}}>
        <Screen />
      </SafeAreaView>
    </ToastProvider>
  );
};

const Screen = () => {
  const {handleToast} = useToast();

  const handleChangeMessage = () => {
    handleToast.changeToastMessage('Soy un nuevo toast');
  };

  const action: IAction = React.useMemo(
    () => ({
      message: 'undo',
      color: '#ffffff',
      onPress: () => {
        Alert.alert('hola mundo');
      },
    }),
    [],
  );
  const setActionToast = useCallback(() => {
    handleToast.setActionToast(action);
  }, [action, handleToast]);

  useEffect(() => {
    setActionToast();
  }, [setActionToast]);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Button title="Toast" onPress={handleToast.onShowToast} />
      <Button title="Cambiar mensaje" onPress={handleChangeMessage} />
      <Button title="set action" onPress={setActionToast} />
    </View>
  );
};

export default App;
*/
