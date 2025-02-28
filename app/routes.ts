import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    /* 아래와 같이 prefix 안에 있는 함수는 자동으로 /products/[아래 route 내용]으로 들어감.
		자세한 내용은 노마드코더 메이커 마스터클레스 #3, 3.10, 1분 41초 참고*/
    index("features/products/pages/products-page.tsx"), // 이 내용은 /products로 들어오는 경우
    ...prefix("leaderboards", [
      /* :year 과 같은 내용은 react router에게 이 주소의 해당 부분이 변경될 것이라고 말해주는 것 */
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),

    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
  ]),
] satisfies RouteConfig;
