"use client";

import { RefreshCw } from "lucide-react";
import { Button } from "../components/ui/button";
import "./globals.css";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="status-page">
      <RefreshCw size={72} className="status-page-icon" />

      <h1 className="status-page-title">Не удалось загрузить данные</h1>

      <p className="status-page-description">
        Произошла ошибка при загрузке квартир. Попробуйте обновить страницу
        позже.
      </p>

      <Button size="lg" onClick={() => reset()}>
        Попробовать снова
      </Button>
    </main>
  );
}
