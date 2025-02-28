import { data, redirect } from "react-router";
import type { Route } from "./+types/leaderboard-redirection-page";
import { DateTime } from "luxon";

/* loader function은 아래 객체와 같이 쓰일 수 있다(Nomad coders maker master class #3, 3.14, 15분 35초)
1. params: URL의 모든 매개변수를 보관(ex./:period)
2. request: cookies, headers을 가져올 수 있음.
*/
export function loader({ params, request }: Route.LoaderArgs) {
  const { period } = params;
  let url: string;
  const today = DateTime.now().setZone("Asia/Seoul");
  if (period === "daily") {
    url = `/products/leaderboards/daily/${today.year}/${today.month}/${today.day}`;
  } else if (period === "weekly") {
    url = `/products/leaderboards/daily/${today.year}/${today.weekNumber}`;
  } else if (period === "monthly") {
    url = `/products/leaderboards/daily/${today.year}/${today.month}`;
  } else if (period === "yearly") {
    url = `/products/leaderboards/daily/${today.year}`;
  } else {
    return data(null, { status: 400 });
  }
  return redirect(url);
}
