import Aside from "./aside";
import Footer from "./Footer";
import Header from "./header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Layout () {
  return (
    <div>
      <title>5차 프론트엔드 소개</title>
      <Header />
        <div className="h-max flex flex-row xs:max-sm:justify-center justify-between bg-gray-200 pb-14">
          <Aside />
          <div className="p-5 grid xs:max-sm:grid-cols-1 sm:max-md:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>
            
            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>
            
            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>

            <Card className="w-70 h-60">
              <div className="h-1/3">프로필 이미지</div>
              <CardHeader>
                <CardTitle>이름</CardTitle>
                <CardDescription>설명</CardDescription>  
              </CardHeader>
              <div className="flex justify-center">
                <CardContent className="text-[#f0f] text-[20px] font-bold">Git</CardContent>
                <CardContent className="text-[#0f0] text-[20px] font-bold">Blog</CardContent>
              </div>
            </Card>
          </div>
        </div>
      <Footer />
    </div>
  )
}