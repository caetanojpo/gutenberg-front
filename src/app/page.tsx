import Login from "@/components/organisms/Login/Login";
import LoginExtra from "@/components/organisms/LoginExtra/LoginExtra";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex relative">
        <LoginExtra />
        <Login />
      </div>
    </>
  );
}
