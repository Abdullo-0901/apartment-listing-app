import { ApartmentCardSkeleton } from "../apartment-card-skeleton/apartment-card-skeleton.component";

export function ApartmentListSkeleton() {
  return (
    <section className="apartments-grid">
      {Array.from({ length: 8 }).map((_, index) => (
        <ApartmentCardSkeleton key={index} />
      ))}
    </section>
  );
}
