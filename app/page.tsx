import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-700">hellow world</p>
      <Button asChild>
        <a href="/login">Login</a>
      </Button>
    </div>
  );
}
