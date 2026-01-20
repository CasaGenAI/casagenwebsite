import { useEffect } from "react";

export default function Signup() {
  useEffect(() => {
    window.location.href = "https://app.casagen.ai/signup";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to signup...</p>
    </div>
  );
}
