import { useEffect } from "react";
import { APP_URL } from "@/config";

export default function Signup() {
  useEffect(() => {
    window.location.href = `${APP_URL}/signup`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to signup...</p>
    </div>
  );
}
