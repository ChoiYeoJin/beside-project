import Card from "@/app/components/Web/Card";
import { fetchData } from "@/utils/fetch";
import Link from "next/link";

interface HomeProgramsProps {
  programs: Program[];
}

export default async function HomePrograms() {
  //const { data } = useSWR<Program[]>("/shortcut-keys/programs", fetchData);
  const programs = await fetchData<Program[]>("/shortcut-keys/programs");

  return (
    <div className={`flex gap-5 py-4`}>
      {programs?.map((item) => {
        return (
          <Link href={`/kiki/key-list/${item.platform}`} key={item.platform}>
            <Card height="60px" imgSrc={item.image_url} text={item.platform} />
          </Link>
        );
      })}
    </div>
  );
}
