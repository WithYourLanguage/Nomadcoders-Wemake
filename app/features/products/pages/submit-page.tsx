import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "제품 등록 | Product Hunt 클론" },
    { name: "description", content: "새로운 제품 등록하기" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  // 제품 등록 로직
  return {};
}

export default function SubmitPage({ loaderData, actionData }: Props) {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">제품 등록하기</h1>
      {/* 제품 등록 폼 */}
    </div>
  );
} 