"use client";

const Error = ({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) => {
  console.log(error);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => retry()}>Retry</button>
    </div>
  );
};

export default Error;
