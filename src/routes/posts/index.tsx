import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: Posts,
});

function Posts() {
  const postes = ["post1", "post2", "post3"];
  return (
    <div>
      {postes.map((val) => (
        <div key={val}>
          <Link to="/posts/$postid" params={{ postid: val }}>
            {val}
          </Link>
        </div>
      ))}
    </div>
  );
}
