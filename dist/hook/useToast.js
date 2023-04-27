"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ToastContext_1 = require("../Infrastructure/context/ToastContext");
function useToast() {
    const { handleToast, toast } = (0, react_1.useContext)(ToastContext_1.ToastContext);
    return { toast, handleToast };
}
exports.default = useToast;
