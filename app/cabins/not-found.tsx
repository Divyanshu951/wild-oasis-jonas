import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>The cabin cannot br found</p>
      <Link href="/cabins">All Cabins</Link>
    </div>
  );
};

export default NotFound;
