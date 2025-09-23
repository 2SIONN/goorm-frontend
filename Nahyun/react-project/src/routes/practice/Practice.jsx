import { memo, useCallback, useState } from 'react'

const Child = memo(({ onClick }) => {
  console.log('Child 렌더링')
  return <button onClick={onClick}>자식 버튼</button>
})
Child.displayName = 'Child'

export default function Practice() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('Child 버튼 클릭')
  }

  console.log('부모 렌더링')

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <Child onClick={handleClick} />
    </div>
  )
}
