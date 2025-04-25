import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postid")({
  component: RouteComponent,
  loader: async ({ params }) => {
    await new Promise((resolver) => setTimeout(resolver, 5000));
    return {
      postId: params.postid,
    };
  },
  pendingComponent: () => <div>Loding ...</div>,
});

function RouteComponent() {
  const { postId } = Route.useLoaderData();
  return <div>Hello {postId}</div>;
}
