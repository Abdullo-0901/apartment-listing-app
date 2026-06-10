import Link from "next/link";
import { Building2 } from "lucide-react";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.icon}>
            <Building2 size={20} />
          </div>

          <span>Квартиры</span>
        </Link>
      </div>
    </header>
  );
}
