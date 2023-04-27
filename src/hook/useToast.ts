import {useContext} from 'react';
import {ToastContext} from '../Infrastructure/context/ToastContext';
import {IProvider} from '../Domain/Entities/Toast';

function useToast(): IProvider {
  const {handleToast, toast} = useContext(ToastContext);

  return {toast, handleToast};
}

export default useToast;
