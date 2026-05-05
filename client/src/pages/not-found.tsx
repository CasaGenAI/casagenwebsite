import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import tamarinIcon from "@assets/tamarin-default-spinner_1761065048248.gif";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
      <Navigation />

      <main
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <img
            src={tamarinIcon}
            alt="Lost Tamarin"
            style={{ width: "96px", height: "96px", margin: "0 auto 28px" }}
          />

          <h1
            style={{
              fontSize: "80px",
              lineHeight: 1,
              letterSpacing: "-4px",
              color: "#1b0624",
              fontWeight: 400,
              marginBottom: "16px",
            }}
          >
            404
          </h1>

          <h2
            style={{
              fontSize: "24px",
              lineHeight: 1.2,
              letterSpacing: "-0.72px",
              color: "#292421",
              fontWeight: 400,
              marginBottom: "12px",
            }}
          >
            Page not found
          </h2>

          <p style={{ fontSize: "15px", color: "#898683", lineHeight: 1.65, marginBottom: "32px" }}>
            Looks like our tamarin got lost. The page you're looking for doesn't exist.
          </p>

          <Link href="/">
            <button
              className="transition-opacity hover:opacity-85"
              style={{
                background: "#160f0c",
                color: "#ffffff",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "15px",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              data-testid="button-home"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
