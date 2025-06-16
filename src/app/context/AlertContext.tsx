// context/AlertContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { motion, AnimatePresence } from "framer-motion";
import Alert from "../components/Alert";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertContextProps {
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<AlertType>("info");

  const showAlert = useCallback(
    (msg: string, alertType: AlertType = "info") => {
      setMessage(msg);
      setType(alertType);
      setVisible(true);
    },
    []
  );

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              opacity: 0,
            }}
            animate={{
              top: "1rem",
              transform: "translateX(-50%) translateY(0)",
              opacity: 1,
            }}
            exit={{
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-1/2 z-50 w-full max-w-md px-4"
          >
            <Alert message={message} type={type} dismissible />
          </motion.div>
        )}
      </AnimatePresence>
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider.");
  }
  return context;
};
