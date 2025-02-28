import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse } from "react-router";
import { z } from "zod";

const paramsSchema = z.object({
  year: z.coerce.number(), // year을 숫자로 바꾸려고 시도하고 에러가 발생하면 알려준다(a, 가와 같은 문자 확인)
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject(parsedData);
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      { status: 400 }
    );
  }
  return {
    date,
  };
};
export default function DailyLeaderboardPager({
  loaderData,
}: Route.ComponentProps) {
  return <div className="container mx-auto px-4 py-8"></div>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    // isRouteErrorResponse 함수는 status code가 4xx or 5xx인지 확인 그리고 loader or action function에서 발생(둘다 만족해야 true)
    return (
      <div>
        {error.data.error_code} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    // throw new Error("Invalid date"); 이렇게 에러가 발생했을 때 출력
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
