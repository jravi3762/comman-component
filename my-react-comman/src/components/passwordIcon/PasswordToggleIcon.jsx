import { useState } from "react";

const PasswordToggleIcon = ({ size = 22, color = "#555", onToggle }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    const newState = !show;
    setShow(newState);
    if (onToggle) onToggle(newState);
  };

  const iconStyle = {
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    color,
  };

  return (
    <span
      onClick={handleToggle}
      style={iconStyle}
      title={show ? "Hide Password" : "Show Password"}
    >
      {show ? (
        // 👁️ Eye Open Icon (Show)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.85 }}
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ) : (
        // 🙈 Eye Slash Icon (Hide)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.85 }}
        >
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.55 21.55 0 0 1 5.09-6.33M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-5.12"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      )}
    </span>
  );
};

export default PasswordToggleIcon;
