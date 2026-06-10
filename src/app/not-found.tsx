import Link from "next/link";
import { SearchX } from "lucide-react";

import styles from "./status-pages.module.css";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <SearchX size={72} className={styles.icon} />

      <h1 className={styles.title}>Квартира не найдена</h1>

      <p className={styles.description}>
        Возможно квартира была удалена или указана неверная ссылка.
      </p>

      <Button asChild size="lg">
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </main>
  );
}
