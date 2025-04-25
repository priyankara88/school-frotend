import { queryOptions } from "@tanstack/react-query";

export default function createtodoqueryoption(id: number) {
  return queryOptions({
    queryKey: ["todos", id],
    queryFn: () => getTodos(id),
  });
}

const getTodos = async (id: number): Promise<Todos[]> => {
  console.log(31, id);

  const response = await fetch(
    `https://api.restful-api.dev/objects?id=3&id=5&id=${id}`
  );
  return await response.json();
};

type Todos = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;
};
