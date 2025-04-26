import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: () => loging(),
  });

  return <div>Hello "/auth/login"!</div>;
}

const loging = async () => {
  console.log(18);
  try {
    const userData = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "ayodhya66",
        email: "agan3@gmail.com",
        password: "123456",
      }),
    });

    if (!userData.ok) {
      const error = await userData.json();
      console.error("server error", error);
      return { err: error.message };
    }

    const userData1 = await userData.json();
    console.log(38, userData1);

    return userData1;
  } catch (error) {}
};
