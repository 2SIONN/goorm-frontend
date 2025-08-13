import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <footer>
        <div>사이트정보</div>
      </footer>
    </div>
  )
}
