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

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today
          </p>
          <Button variant="link" asChild className="text-lg p-0 ">
            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            upvotesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community
          </p>
          <Button variant="link" asChild className="text-lg p-0 ">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id={`postId-${index}`}
            title="What is the best productivity tool?"
            author="Apple"
            authorAvatarUrl="https://github.com/apple.png"
            category="productivity"
            createdAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Ideas GPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0 ">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business"
            viewCount={999999999}
            likeCount={990}
            createdAt="12 hours ago"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job
          </p>
          <Button variant="link" asChild className="text-lg p-0 ">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            id="jobId"
            company="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-time"
            positionLocation="Remote"
            salary="$100,000 - 120,000"
            companyHq="San Francisco, CA"
          />
        ))}
      </div>
    </div>
  );
}
