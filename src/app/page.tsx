import { SlidersHorizontal } from "lucide-react";
import { Suspense } from "react";
import { ApartmentFilters } from "../components/feature/dashboard/apartment-filter/apartment-filter.component";
import { ApartmentListSkeleton } from "../components/feature/dashboard/apartment-list-skeleton/apartment-list-skeleton.component";
import { ApartmentList } from "../components/feature/dashboard/apartment-list/apartment-list.component";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { MobileFiltersSheet } from "../components/feature/dashboard/apartment-filter/mobile-filters-sheet.component";

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

        <MobileFiltersSheet
          maxPrice={params.maxPrice}
          minPrice={params.minPrice}
          rooms={params.rooms}
        />
      </section>

      <div className="filter-hidden">
        <ApartmentFilters
          maxPrice={params.maxPrice}
          minPrice={params.minPrice}
          rooms={params.rooms}
        />
      </div>

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
