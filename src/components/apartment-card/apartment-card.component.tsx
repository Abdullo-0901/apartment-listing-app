import Link from "next/link";
import Image from "next/image";

import styles from "./apartment-card.module.css";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Apartment } from "@/src/types";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image fill src={apartment.image} alt={apartment.title} />

        <div className={styles.badges}>
          <span>{apartment.rooms} комн.</span>
          <span>{apartment.area} м²</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3>{apartment.price.toLocaleString()} ₽/мес</h3>

        <p>{apartment.title}</p>

        <Button asChild>
          <Link href={`/apartments/${apartment.id}`}>Подробнее</Link>
        </Button>
      </div>
    </Card>
  );
}
