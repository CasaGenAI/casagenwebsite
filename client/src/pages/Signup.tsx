import { useEffect } from "react";
import { APP_URL } from "@/config";

export default function Signup() {
  useEffect(() => {
    window.location.href = `${APP_URL}/signup`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(225,25%,6%)]">
      <p className="text-slate-400">Redirecting to signup...</p>
    </div>
  );
}
