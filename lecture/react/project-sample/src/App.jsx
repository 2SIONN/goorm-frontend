// src/App.jsx
import "./App.css"
import Layout from "./components/Layout"
import { Button } from "./components/ui/button"

export default function App() {
  return (
    <div>
      <Layout>
        <Button variant="destructive" size="lg" className="mb-4">
          버튼입니다.
        </Button>
      </Layout>
    </div>
  )
}
