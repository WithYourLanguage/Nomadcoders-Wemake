import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "주간 리더보드 | Product Hunt 클론" },
    { name: "description", content: "주간 인기 제품" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
    products: [],
  };
}

export default function WeeklyLeaderboardPage({ loaderData }: Props) {
  const { year, week, products } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">{year}년 {week}주차 최고의 제품</h1>
      {/* 주간 리더보드 내용 */}
    </div>
  );
} 