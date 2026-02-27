import { createContext, useContext } from "react";

interface AdminActionsContextValue {
  onHistorialClick?: () => void;
}

export const AdminActionsContext = createContext<AdminActionsContextValue>({});
export const useAdminActions = () => useContext(AdminActionsContext);
