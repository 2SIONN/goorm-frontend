import {  twJoin, twMerge } from "tailwind-merge";

export default function Button({ isPrimary }) {
  return ( 
    <div>
    <button
      className={twMerge(
        "px-4 py-2 rounded font-bold",
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-black", // 사용할 때는 App.jsx에서 <Button isPrimary={true}/> 형식 사용
        "bg-red-500" // 마지막 우선 적용
      )}>
        Click Me
    </button>
    <button
      className={twJoin(
        "px-4 py-2 rounded font-bold",
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-black", // 사용할 때는 App.jsx에서 <Button isPrimary={true}/> 형식 사용
        "bg-red-500" // 마지막 우선 적용
      )}>
        Click Me
    </button>
    </div>
    
  )
}
