import { getApartments } from "@/src/lib";
import { filterApartments } from "@/src/utils";
import { ApartmentCard } from "../apartment-card/apartment-card.component";

export async function ApartmentList(searchParams: {
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  //---------------------------------------------------------------------
  // Variables
  //---------------------------------------------------------------------

  const apartments = await getApartments();
  const filteredApartments = filterApartments(apartments, searchParams);

  //---------------------------------------------------------------------
  return (
    <section className="apartments-grid">
      {filteredApartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
