import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
// import "./app.css"; 기존에 자동으로 생성된 코드
// Nico 코드는 import stylesheet from "./app.css?url"
import stylesheet from "./app.css?url";
import Navigation from "./common/components/navigation";

console.log(stylesheet);

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet }, // 니꼬 코드 확인 후 추가함
];

/* 레이아웃 컴포넌트를 이용하는 이 유는 'children'에 실제 페이지를 렌더링하거나
ErrorBoundary를 렌더링하기 위해서 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {/* 메타 데이터를 렌더링하는 컴포넌트, Maker Masterclass 1Basics 1.3참고 */}
        <Links />
        {/* 모든 링크를 렌더링하는 컴포넌트, Maker Masterclass 1Basics 1.3참고 */}
      </head>
      <body>
        {children}
        <ScrollRestoration /> {/* 스크롤 위치를 기억하고 복원하는 컴포넌트 */}
        <Scripts /> {/* 브라우저에 보내는 모든 자바스크립트 코드 */}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Navigation
        isLoggedIn={true}
        hasNotifications={true}
        hasMessages={true}
      />
      {/* 여기에 Navigation 컴포넌트를 추가하면 error가 없을 땐 렌더링되지 않음
      만약 error가 있어도 렌더링하고 싶다면 위 body 안에 넣어야 함. 
      (자세한 내용은 노마드코더 Maker Class #3, 3.1, 4분 30초 참고)
      */}
      <Outlet />
    </>
  ); // Outlet은 실제 이용자에게 보여져야 할 내용을 렌더링하는 컴포넌트
}

// User에게 error가 발생한 경우 보여주는 컴포넌트
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
