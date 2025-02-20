import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "제품 | Product Hunt 클론" },
    { name: "description", content: "모든 제품 목록" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    products: [],
  };
}

export default function ProductsPage({ loaderData }: Props) {
  const { products } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">모든 제품</h1>
      {/* 제품 목록 */}
    </div>
  );
}
