import { AppConfig } from "../config";

export async function getApartments() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${AppConfig.url}/apartments`);

  return response.json();
}
