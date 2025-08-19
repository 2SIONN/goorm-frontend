import { Menu } from "lucide-react"
import { Button } from "./ui/button.jsx"

export default function Header({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center h-14 p-4 m-4 bg-white border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="md:hidden p-1 hover:bg-gray-100 rounded-md">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">My APP</h1>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">로그인</Button>
        <Button variant="outline">회원가입</Button>
      </div>
    </header>
  )
}
