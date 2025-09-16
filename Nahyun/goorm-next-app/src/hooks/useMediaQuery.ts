import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // 초기 렌더링 시 쿼리 조건이 다를 때에만 상태 동기화
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    // 화면 크기의 변화가 있을 때 상태 변경
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}
