import { Button } from "~/common/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="mb-6">
        Get started by exploring our features or sing in your account
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
