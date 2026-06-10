import { Suspense } from "react";
import { ApartmentListSkeleton } from "../components/feature/dashboard/apartment-list/apartment-list-skeleton.component";
import { ApartmentList } from "../components/feature/dashboard/apartment-list/apartment-list.component";
import { Filters } from "../components/feature/dashboard/apartment-filter/apartment-filter.component";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    rooms?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <main className="container">
      <section className="hero">
        <h1>Аренда квартир</h1>
      </section>
      <Filters {...params} />

      <Suspense
        key={JSON.stringify(params)}
        fallback={<ApartmentListSkeleton />}
      >
        <ApartmentList
          maxPrice={params.maxPrice}
          minPrice={params.minPrice}
          rooms={params.rooms}
        />
      </Suspense>
    </main>
  );
}
