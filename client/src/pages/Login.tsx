import { useEffect } from "react";
import { APP_URL } from "@/config";

export default function Login() {
  useEffect(() => {
    window.location.href = APP_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to login...</p>
    </div>
  );
}
