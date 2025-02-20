import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "카테고리 | Product Hunt 클론" },
    { name: "description", content: "제품 카테고리 목록" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export default function CategoriesPage({ loaderData }: Props) {
  const { categories } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">카테고리</h1>
      {/* 카테고리 목록 */}
    </div>
  );
} 