import { AppConfig } from "../config";

export async function getApartments() {
  const response = await fetch(`${AppConfig.url}/apartments`);

  return response.json();
}
