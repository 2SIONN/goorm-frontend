import './App.css';
import Layout from "./components/layout";

export default function App({children}) {
  return ( 
    <div>
      <Layout>
        {children}
      </Layout>
    </div>
    
  )
}
