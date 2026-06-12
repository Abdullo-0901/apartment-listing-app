import { getApartments } from "@/src/lib";
import { ApartmentCard } from "../apartment-card/apartment-card.component";
import styles from "./apartament.module.css";

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

  const hasFilters = rooms || minPrice || maxPrice;
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

  if (apartments.length !== 0) {
    return (
      <div className={styles.emptyState}>
        {hasFilters ? (
          <>
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить фильтры поиска.</p>
          </>
        ) : (
          <>
            <h3>Пока нет квартир</h3>
            <p>Объявления появятся здесь позже.</p>
          </>
        )}
      </div>
    );
  }

  //---------------------------------------------------------------------
  return (
    <section className={styles.apartmentsGrid}>
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
