import { Suspense } from "react";
import { ApartmentListSkeleton } from "../components/apartment-list/apartment-list-skeleton.component";
import { ApartmentList } from "../components/apartment-list/apartment-list.component";
import { Filters } from "../components/apartment-filter/apartment-filter.component";

export default async function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Аренда квартир</h1>
        <p>Найдите подходящее жильё из нашей базы</p>
      </section>

      <Suspense fallback={<ApartmentListSkeleton />}>
        <ApartmentList />
      </Suspense>
    </main>
  );
}
