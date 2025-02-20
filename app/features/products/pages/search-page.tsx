import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "제품 검색 | Product Hunt 클론" },
    { name: "description", content: "제품 검색" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  
  return {
    query,
    results: [],
  };
}

export default function SearchPage({ loaderData }: Props) {
  const { query, results } = loaderData;

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">검색 결과: {query}</h1>
      {/* 검색 결과 목록 */}
    </div>
  );
} 