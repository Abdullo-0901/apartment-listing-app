import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BedDouble, Expand } from "lucide-react";

import styles from "./apartment-details.module.css";
import { Apartment } from "@/src/types";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

export function ApartmentDetails({ apartment }: { apartment: Apartment }) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={18} />
        Назад
      </Link>

      <div className={styles.imageWrapper}>
        <Image
          src={apartment.image}
          alt={apartment.title}
          fill
          priority
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.price}>
          {apartment.price.toLocaleString("ru-RU")} сом/мес
        </h1>

        <h2 className={styles.title}>{apartment.title}</h2>

        <div className={styles.badges}>
          <Badge variant="outline" className={styles.badge}>
            <BedDouble size={14} />
            {apartment.rooms} комната
          </Badge>

          <Badge variant="outline" className={styles.badge}>
            <Expand size={14} />
            {apartment.area} м²
          </Badge>
        </div>

        <hr className={styles.divider} />

        <section>
          <h3 className={styles.sectionTitle}>Описание</h3>

          <p className={styles.description}>{apartment.description}</p>
        </section>

        <Button size="lg" className={styles.contactButton}>
          Связаться с арендодателем
        </Button>
      </div>
    </div>
  );
}
