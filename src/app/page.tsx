import { Button } from "../components/ui/button";
import { getApartments } from "../lib";

export default async function Home() {
  const apartaments = await getApartments();

  console.log("apartaments", apartaments);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button>Worked</Button>
    </div>
  );
}
