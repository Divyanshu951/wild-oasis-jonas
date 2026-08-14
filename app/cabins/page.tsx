import Counter from "@/components/Counter";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return (
    <div className="mx-auto">
      <Counter data={data} />
      <ul>
        {data.map((todo) => (
          <li className="py-2 text-lg" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
