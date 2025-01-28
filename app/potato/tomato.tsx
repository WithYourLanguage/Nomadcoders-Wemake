export default function Tomato() {
  return <div>About Us</div>;
}

export const links = () => [{ rel: "stylesheet", href: "potato.com" }]; // root.tsx파일의 links 컴포넌트에 들어감
export const meta = () => [{ title: "About Us" }]; // root.tsx파일의 meta 컴포넌트에 들어감
