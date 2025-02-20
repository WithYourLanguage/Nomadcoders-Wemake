import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "카테고리 제품 | Product Hunt 클론" },
    { name: "description", content: "카테고리별 제품 목록" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
    products: [],
  };
}

export default function CategoryPage({ loaderData }: Props) {
  const { category, products } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">{category} 제품</h1>
      {/* 카테고리별 제품 목록 */}
    </div>
  );
} 