import { Button } from "~/common/components/ui/button";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">환영합니다</h1>
      <p className="mb-6">
        이것은 Remix React Router TypeScript Supabase 프로젝트입니다.
      </p>
      <Button>시작하기</Button>
    </div>
  );
}
