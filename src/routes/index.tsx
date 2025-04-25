import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data } = useQuery({
    queryKey: ["id"],
    queryFn: () => getFetchData(),
  });

  return (
    <div className="p-2">
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}

const getFetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};
