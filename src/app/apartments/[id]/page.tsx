import { getApartmentById } from "@/src/lib";
import { notFound } from "next/navigation";
import { ApartmentDetails } from "../../../components/feature/apartment-details/apartment-details.component";

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parseId = Number(id);

  if (Number.isNaN(parseId)) {
    return notFound();
  }

  const apartment = await getApartmentById(id);

  if (!apartment) {
    notFound();
  }

  return <ApartmentDetails apartment={apartment} />;
}
