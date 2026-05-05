import { useEffect } from "react";
import { APP_URL } from "@/config";

export default function Login() {
  useEffect(() => {
    window.location.href = APP_URL;
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
      }}
    >
      <p style={{ fontSize: "14px", color: "#898683" }}>Redirecting to login...</p>
    </div>
  );
}
