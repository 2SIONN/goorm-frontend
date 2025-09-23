import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card.jsx'

export default function ProfileCard({ name, profile, intro, github, blog }) {
  return (
    <Card className="max-w-md flex flex-col items-center gap-2">
      <CardHeader className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
          <img src={profile} alt={`${name}의 프로필 사진`} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardTitle className="text-center">{name}</CardTitle>
      <CardContent>
        <p className="text-center">{intro}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        {github && (
          <a
            href={github}
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {blog && (
          <a
            href={blog}
            className="text-green-600 hover:text-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
