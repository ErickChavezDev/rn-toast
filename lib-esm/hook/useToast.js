import { useContext } from 'react';
import { ToastContext } from '../Infrastructure/context/ToastContext';
function useToast() {
    const { handleToast, toast } = useContext(ToastContext);
    return { toast, handleToast };
}
export default useToast;
