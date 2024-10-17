import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Pause, Square, Mic, Video, MonitorUp, Users, MessageSquare, MoreHorizontal } from 'lucide-react'

const ParticipantThumbnail = ({ name, imageSrc }) => (
  <Card className="w-48 h-32 relative overflow-hidden">
    <CardContent className="p-0">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <p className="text-sm truncate">{name}</p>
      </div>
      <Button size="icon" variant="secondary" className="absolute top-2 right-2 w-8 h-8 rounded-full">
        <Mic className="h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
)

export const CourseConference = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <header className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Weekly Meeting</h1>
          <span className="text-gray-500">April 12, 2024</span>
        </div>
        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
          00:16:07
        </div>
      </header>

      <main className="flex-grow p-4 flex flex-col">
        <div className="relative mb-4 rounded-lg overflow-hidden aspect-video bg-gray-900">
          <img src="/placeholder.svg?height=720&width=1280" alt="Main video feed" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-75 text-white px-3 py-2 rounded-lg flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span>Recording in progress...</span>
            <Button size="icon" variant="ghost" className="w-8 h-8">
              <Pause className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="w-8 h-8">
              <Square className="h-4 w-4" />
            </Button>
          </div>
          <Button size="icon" variant="secondary" className="absolute bottom-4 right-4 w-10 h-10 rounded-full">
            <Mic className="h-5 w-5" />
          </Button>
          <div className="absolute bottom-4 left-4 bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
            Nina Harrison
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <ParticipantThumbnail name="Kelli Fowler" imageSrc="/placeholder.svg?height=180&width=320" />
          <ParticipantThumbnail name="Eduardo Watkins" imageSrc="/placeholder.svg?height=180&width=320" />
          <ParticipantThumbnail name="Laurie White" imageSrc="/placeholder.svg?height=180&width=320" />
          <ParticipantThumbnail name="Kevin Chen" imageSrc="/placeholder.svg?height=180&width=320" />
        </div>
      </main>

      <footer className="p-4 border-t flex items-center justify-between">
        <div className="flex space-x-2">
          <Button size="icon" variant="outline">
            <Mic className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Video className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <MonitorUp className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Users className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="destructive">Leave Meet</Button>
      </footer>
    </div>
  )
}