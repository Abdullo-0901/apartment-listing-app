import { ApartmentCardSkeleton } from "../apartment-card-skeleton/apartment-card-skeleton.component";
import styles from "./apartment-list-skeleton.module.css";

export function ApartmentListSkeleton() {
  return (
    <section className={styles.apartmentsGrid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <ApartmentCardSkeleton key={index} />
      ))}
    </section>
  );
}
