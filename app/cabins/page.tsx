import CabinList from "@/components/cabin-list";
import { Suspense } from "react";
import Loading from "./loading";
import Filter from "@/components/Filter";

export const metadata = {
  title: "Cabins",
};

// export const revalidate = 15;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ capacity: "all" | "small" | "medium" | "large" }>;
}) {
  const { capacity } = await searchParams;
  const filter = capacity ?? "all";

  return (
    <div>
      <h1 className="text-accent-400 mb-5 text-4xl font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="mb-8 flex justify-end">
        <Filter />
      </div>

      <Suspense fallback={<Loading />} key={capacity}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
