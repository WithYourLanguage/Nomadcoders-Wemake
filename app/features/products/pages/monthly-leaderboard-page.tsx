import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "월간 리더보드 | Product Hunt 클론" },
    { name: "description", content: "월간 인기 제품" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    products: [],
  };
}

export default function MonthlyLeaderboardPage({ loaderData }: Props) {
  const { year, month, products } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 최고의 제품</h1>
      {/* 월간 리더보드 내용 */}
    </div>
  );
} 