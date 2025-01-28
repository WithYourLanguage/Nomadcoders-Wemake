import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true, // 서버 사이드 렌더링을 이용하겠다는 의미, DB를 이용하겠다는 의미
} satisfies Config;
