import { getApartments } from "@/src/lib";
import { ApartmentCard } from "../apartment-card/apartment-card.component";

export async function ApartmentList({
  maxPrice,
  minPrice,
  rooms,
}: {
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  //---------------------------------------------------------------------
  // Variables
  //---------------------------------------------------------------------

  const parsedRooms = rooms && !Number.isNaN(Number(rooms)) ? rooms : undefined;

  const parsedMinPrice =
    minPrice && !Number.isNaN(Number(minPrice)) ? minPrice : undefined;

  const parsedMaxPrice =
    maxPrice && !Number.isNaN(Number(maxPrice)) ? maxPrice : undefined;

  const apartments = await getApartments({
    maxPrice: parsedMaxPrice,
    minPrice: parsedMinPrice,
    rooms: parsedRooms,
  });

  //---------------------------------------------------------------------
  return (
    <section className="apartments-grid">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
