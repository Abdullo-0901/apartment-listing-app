import { Apartment } from "@/src/types";

export function filterApartments(
  apartments: Apartment[],
  searchParams: {
    rooms?: string;
    minPrice?: string;
    maxPrice?: string;
  },
) {
  const rooms = Number(searchParams.rooms);
  const minPrice = Number(searchParams.minPrice);
  const maxPrice = Number(searchParams.maxPrice);

  return apartments.filter((apartment) => {
    if (rooms && apartment.rooms !== rooms) {
      return false;
    }

    if (minPrice && apartment.price < minPrice) {
      return false;
    }

    if (maxPrice && apartment.price > maxPrice) {
      return false;
    }

    return true;
  });
}
