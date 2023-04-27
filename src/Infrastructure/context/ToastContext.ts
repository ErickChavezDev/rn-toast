import {createContext} from 'react';
import {IAction, IProvider, IToast} from '../../Domain/Entities/Toast';

const defaultToastValue: IToast = {
  action: null,
  message: '',
  show: false,
  duration: 0,
};

const handleToast = {
  changeToastMessage: (_message: string) => {},
  changeDurationToast: (_duration: number) => {},
  onShowToast: () => {},
  setActionToast: (_action: IAction | null | undefined) => {},
};

const defaultValue: IProvider = {
  handleToast,
  toast: defaultToastValue,
};

export const ToastContext = createContext(defaultValue);
