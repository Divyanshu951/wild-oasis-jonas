import { getCabins } from "@/lib/data-service";
import CabinCard from "./CabinCard";
// import { unstable_noStore } from "next/cache";

const CabinList = async () => {
  // unstable_noStore();
  const cabins = await getCabins();

  if (cabins.length === 0) return null;

  return (
    cabins.length > 0 && (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    )
  );
};

export default CabinList;
