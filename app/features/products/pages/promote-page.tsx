import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "제품 홍보 | Product Hunt 클론" },
    { name: "description", content: "제품 홍보하기" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  // 제품 홍보 로직
  return {};
}

export default function PromotePage({ loaderData, actionData }: Props) {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">제품 홍보하기</h1>
      {/* 제품 홍보 폼 */}
    </div>
  );
} 