import React, { JSX, useState } from "react";
// import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from "lucide-react";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertProps {
  type?: AlertType;
  message: string;
  dismissible?: boolean;
}

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

const alertIcons: Record<AlertType, JSX.Element> = {
  success: <i className="pt-1 w-5 h-5 mr-2 pi pi-check-circle" />,
  error: <i className="pt-1 w-5 h-5 mr-2 pi pi-times-circle" />,
  info: <i className="pt-1 w-5 h-5 mr-2 pi pi-info" />,
  warning: <i className="pt-1 w-5 h-5 mr-2 pi pi-exclamation-circle" />,
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  dismissible = false,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`rounded-xl border p-4 flex items-start gap-2 shadow-sm ${alertStyles[type]}`}
    >
      {alertIcons[type]}
      <span className="flex-1">{message}</span>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className="text-xl text-inherit hover:opacity-70"
        >
          <i className="w-4 h-4 pi pi-x" />
        </button>
      )}
    </div>
  );
};

export default Alert;
