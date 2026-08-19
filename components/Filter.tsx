"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border-primary-800 flex border">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        2&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8+ guests
      </Button>
    </div>
  );
}

type ButtonType = {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: string;
};

function Button({ filter, handleFilter, activeFilter, children }: ButtonType) {
  return (
    <button
      className={`hover:bg-primary-700 px-5 py-2 ${
        filter === activeFilter ? "bg-gray-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
