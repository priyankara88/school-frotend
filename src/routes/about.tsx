import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import createtodoqueryoption from "../queryoption/createTodoQueryOption";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const [id, setId] = useState(3);
  const { data, isPending, refetch, error } = useQuery(
    createtodoqueryoption(id)
  );

  if (error) {
    alert("somthing is wrong");
  }

  return (
    <div>
      <div className="p-2">
        {isPending ? "Loding ..." : JSON.stringify(data)}
      </div>
      <button onClick={() => setId((pre) => pre + 1)}>Refetch</button>
    </div>
  );
}
