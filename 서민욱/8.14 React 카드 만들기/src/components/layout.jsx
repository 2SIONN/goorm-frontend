import Aside from "./aside";
import Footer from "./Footer";
import Header from "./header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Layout () {
  return (
    <div>
      <Header />
        <div className="mt-5 flex justify-between bg-gray-200 p-4">
          <Aside />
          <div className="grid grid-cols-2 gap-10">
            <Card className="w-120 h-60">
              <CardHeader>
                <CardTitle>HTML / CSS</CardTitle>
                <CardDescription>1차</CardDescription>  
              </CardHeader>
              <div className=" grid grid-cols-2 gap-2 p-2 overflow-auto">
                <CardContent className="border border-black">HTML</CardContent>
                <CardContent className="border border-black">CSS</CardContent>
                <CardContent className="border border-black">Grid</CardContent>
                <CardContent className="border border-black">트랜지션, 애니메이션</CardContent>
                <CardContent className="border border-black">미디어쿼리</CardContent>
              </div>
            </Card>

            <Card className="w-120 h-60">
              <CardHeader>
                <CardTitle>Git</CardTitle>
                <CardDescription>2차</CardDescription>
              </CardHeader>
              <div className=" grid grid-cols-2 gap-2 p-2 overflow-auto">
                <CardContent className="border border-black">Git / GitHub</CardContent>
                <CardContent className="border border-black">Branch</CardContent>
              </div>
            </Card>

            <Card className="w-120 h-60">
              <CardHeader>
                <CardTitle>JavaScript</CardTitle>
                <CardDescription>3차</CardDescription>
              </CardHeader>
              <div className=" grid grid-cols-2 gap-2 p-2 overflow-auto">
                <CardContent className="border border-black">Document / Element</CardContent>
                <CardContent className="border border-black">데이터 타입과 연산자</CardContent>
                <CardContent className="border border-black">조건문과 함수</CardContent>
                <CardContent className="border border-black">비동기 함수와 Fetch</CardContent>
                <CardContent className="border border-black">실행 컨텍스트, 클로저</CardContent>
                <CardContent className="border border-black">프로토타입</CardContent>
                <CardContent className="border border-black">클래스(Class)</CardContent>
                <CardContent className="border border-black">객체(Object)</CardContent>
                <CardContent className="border border-black">배열(Array)</CardContent>
                <CardContent className="border border-black">자바스크립트 내장객체</CardContent>
                <CardContent className="border border-black">this, 함수지향/객체지향</CardContent>
              </div>
            </Card>
            
            <Card className="w-120 h-60">
              <CardHeader>
                <CardTitle>React</CardTitle>
                <CardDescription>4차</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      <Footer />
    </div>
  )
}