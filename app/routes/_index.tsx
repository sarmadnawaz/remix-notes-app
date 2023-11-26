import type { MetaFunction } from "@remix-run/node";
import AppLayout from "../components/ui/AppLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <AppLayout>
      <h1>Welcome to Remix!</h1>
    </AppLayout>
  );
}
