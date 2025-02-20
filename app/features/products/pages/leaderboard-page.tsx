import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "리더보드 | Product Hunt 클론" },
    { name: "description", content: "인기 제품 순위" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    topProducts: [],
  };
}

export default function LeaderboardPage({ loaderData }: Props) {
  const { topProducts } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">리더보드</h1>
      {/* 리더보드 내용 */}
    </div>
  );
} 