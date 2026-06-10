import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="status-page">
      <SearchX size={72} className="status-page-icon" />

      <h1 className="status-page-title">Квартира не найдена</h1>

      <p className="status-page-description">
        Возможно квартира была удалена или указана неверная ссылка.
      </p>

      <Button asChild size="lg">
        <Link href="/">Вернуться на главную</Link>
      </Button>
    </main>
  );
}
