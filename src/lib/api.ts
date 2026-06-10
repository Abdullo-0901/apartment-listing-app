import { AppConfig } from "../config";
import { Apartment } from "../types";

export async function getApartments() {
  //   await new Promise((resolve) => setTimeout(resolve, 3000)); // for test loading
  const response = await fetch(`${AppConfig.url}/apartments`);
  const data: Apartment[] = await response.json();
  return data;
}
