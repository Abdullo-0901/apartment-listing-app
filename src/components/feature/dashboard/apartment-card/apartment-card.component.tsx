import Link from "next/link";
import Image from "next/image";

import styles from "./apartment-card.module.css";
import { Button } from "../../../ui/button";
import { Card } from "../../../ui/card";
import { Apartment } from "@/src/types";
import { Badge } from "@/src/components/ui/badge";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          fill
          src={apartment.image}
          alt={apartment.title}
          className={styles.image}
        />

        <div className={styles.badges}>
          <Badge className={styles.badgeSubContainer}>
            <span>{apartment.rooms} комн.</span>
          </Badge>
          <Badge className={styles.badgeSubContainer}>
            <span>{apartment.area} м²</span>
          </Badge>
        </div>
      </div>

      <div className={styles.content}>
        <h3>{apartment.price.toLocaleString("ru-RU")} сом/мес</h3>

        <p>{apartment.title}</p>

        <Button asChild className={styles.button}>
          <Link href={`/apartments/${apartment.id}`}>Подробнее</Link>
        </Button>
      </div>
    </Card>
  );
}
