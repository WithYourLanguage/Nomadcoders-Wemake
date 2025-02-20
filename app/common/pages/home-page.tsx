import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { Badge } from "../components/ui/badge";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "~/types";

interface Props extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "홈 | Product Hunt 클론" },
    { name: "description", content: "최신 제품들을 발견하세요" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    featuredProducts: [],
  };
}

export default function HomePage({ loaderData }: Props) {
  const { featuredProducts } = loaderData;
  
  return (
    <main className="container py-6">
      <h1 className="text-4xl font-bold mb-6">오늘의 제품</h1>
      {/* 제품 목록 표시 로직 */}
    </main>
  );
}
