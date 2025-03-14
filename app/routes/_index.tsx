import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to Remix</h1>
      <Button variant="default">Click me</Button>
    </div>
  );
}
