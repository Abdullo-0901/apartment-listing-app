import { AppConfig } from "../config";
import { Apartment } from "../types";

export async function getApartments(searchParams: {
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  const params = new URLSearchParams();

  if (searchParams.rooms) {
    if (searchParams.rooms === "4") {
      params.set("rooms_gte", "4");
    } else {
      params.set("rooms", searchParams.rooms);
    }
  }

  if (searchParams.minPrice) {
    params.set("price_gte", searchParams.minPrice);
  }

  if (searchParams.maxPrice) {
    params.set("price_lte", searchParams.maxPrice);
  }

  const response = await fetch(
    `${AppConfig.url}/apartments?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch apartments");
  }

  const data: Apartment[] = await response.json();

  return data;
}

export async function getApartmentById(id: string) {
  const response = await fetch(`${AppConfig.url}/apartments/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch apartment");
  }

  const data: Apartment = await response.json();

  return data;
}
