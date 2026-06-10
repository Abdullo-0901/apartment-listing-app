"use client";

import { Building2, RefreshCw } from "lucide-react";

import styles from "./status-pages.module.css";
import { Button } from "../components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className={styles.container}>
      <div className={styles.icon}>
        <Building2 size={72} />
      </div>

      <h1 className={styles.title}>Не удалось загрузить квартиры</h1>

      <p className={styles.description}>
        Произошла ошибка при загрузке данных. Возможно сервер временно
        недоступен. Попробуйте обновить страницу позже.
      </p>

      <Button size="lg" onClick={() => reset()}>
        <RefreshCw />
        Попробовать снова
      </Button>
    </main>
  );
}
