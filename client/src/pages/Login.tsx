import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.location.href = "https://app.casagen.ai";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to login...</p>
    </div>
  );
}
