import { Card } from "../../../ui/card";
import { Skeleton } from "../../../ui/skeleton";
import styles from "./apartment-card-skeleton.module.css";

export function ApartmentCardSkeleton() {
  return (
    <Card className={styles.card}>
      <div className={styles.imageWrapper}>
        <Skeleton className={styles.image} />

        <div className={styles.badges}>
          <Skeleton className={styles.badge} />
          <Skeleton className={styles.badge} />
        </div>
      </div>

      <div className={styles.content}>
        <Skeleton className={styles.price} />

        <Skeleton className={styles.title} />

        <Skeleton className={styles.button} />
      </div>
    </Card>
  );
}
