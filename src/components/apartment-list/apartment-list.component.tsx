import { getApartments } from "@/src/lib";
import { ApartmentCard } from "../apartment-card/apartment-card.component";
import { Apartment } from "@/src/types";
import { Filters } from "../apartment-filter/apartment-filter.component";

export async function ApartmentList() {
  const apartments: Apartment[] = await getApartments();

  return (
    <>
      <div className="results">Найдено {apartments.length} квартир</div>
      <Filters />
      <section className="apartments-grid">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </section>
    </>
  );
}
