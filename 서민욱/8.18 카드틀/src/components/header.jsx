import Login from "./login";

export default function Header () {
  return (
    <header className="flex w-full h-14 bg-[#000] text-white justify-center items-center">
      <div className="xs:max-sm:visible invisible absolute left-5">메뉴</div>
      <h1 className="font-bold">딥다이브 5차 프론트엔드</h1>
      <Login />
    </header>
  );
}