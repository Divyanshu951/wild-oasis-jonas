import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>The page you are looking could not be found</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
