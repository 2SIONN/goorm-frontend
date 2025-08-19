export default function Aside () {
  return (
    <aside>
      <nav className="xs:max-sm:h-0 xs:max-sm:w-0 xs:max-sm:hidden bg-[#FFF] p-4 h-full sm:w-20 md:w-40 2xl:w-50">
        <ul className="flex flex-col gap-10">
          <li>
            <a href="#none">팀 1</a>
          </li>
          <li>
            <a href="#none">팀 2</a>
          </li>
          <li>
            <a href="#none">팀 3</a>
          </li>
          <li>
            <a href="#none">팀 4</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}