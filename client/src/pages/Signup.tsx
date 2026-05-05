import { useEffect } from "react";
import { APP_URL } from "@/config";

export default function Signup() {
  useEffect(() => {
    window.location.href = `${APP_URL}/signup`;
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
      <p style={{ fontSize: "14px", color: "#898683" }}>Redirecting to signup...</p>
    </div>
  );
}
