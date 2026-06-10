import { Building2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="loading-page">
      <Building2 className="loading-icon" />

      <h1 className="loading-title">Amar.tj</h1>

      <div className="loading-dots">
        <span className="loading-dot" />
        <span className="loading-dot delay-1" />
        <span className="loading-dot delay-2" />
      </div>
    </div>
  );
}
