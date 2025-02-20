import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "일간 리더보드 | Product Hunt 클론" },
    { name: "description", content: "일간 인기 제품" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    day: params.day,
    products: [],
  };
}

export default function DailyLeaderboardPage({ loaderData }: Props) {
  const { year, month, day, products } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 {day}일 최고의 제품</h1>
      {/* 일간 리더보드 내용 */}
    </div>
  );
} 