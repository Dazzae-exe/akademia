import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Users } from "lucide-react"
import { Mic } from "lucide-react"
import { Lock } from "lucide-react"
import { Pen } from "lucide-react"

export const Features = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="space-y-4">
          <h1 className="">
            Lo vemos en VIVO
            <br />
            No usamos videos pre-grabados.
          </h1>
            <Badge>Interacción online</Badge>
          <div className="flex items-center mb-8 gap-4">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://images.pexels.com/photos/5278595/pexels-photo-5278595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt={`User ${i}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm">
              Cuentas con tres preguntas y un microfono.
              <br />
              Puedes interactuar en el chat con los demas estudiantes y un chat aparte para leer al profesor.
            </p>
          </div>
        </div>
        <div className="relative">
          <Card className="overflow-hidden transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md cursor-pointer">
            <img
              src="https://images.pexels.com/photos/3778844/pexels-photo-3778844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Analytics User"
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 rounded-full flex items-center p-1 pr-3 shadow-lg bg-primary text-primary-foreground">
              <img
                src="https://images.pexels.com/photos/5278595/pexels-photo-5278595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Collaborator"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <ChevronRight key={i} className="w-4 h-4" />
                ))}
              </div>
              <div className="rounded-full p-1 ml-2 text-primary-foreground">
                <Mic className="w-4 h-4" />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-4xl font-bold mb-4">
            Al finalizar podras crear equipos para proyectos. <Users className="inline w-5 h-5" />
            <br />
            Examen final al finalizar cursos evaluados por tu profesor. <Pen className="inline w-5 h-5" />
            <br />
            Cupos limitados. <Lock className="inline w-5 h-5" />
          </h3>
          <p className="mb-4">
            Sincronización con varias plataformas para agendar tu curso y ser notificado de todo referente del curso que vayas a aprender.
          </p>
        </div>
        <Card className="p-6 flex justify-between items-center transition-all delay-150 duration-500 outline-none hover:ring-1 hover:ring-primary hover:shadow-primary hover:shadow-md cursor-pointer">
          <div>
            <h3>Quieres postear tu curso con nosotros?</h3>
            <p className="text-sm">
              Conoce los beneficios usando nuestros servicios.
              <br />
              Una manera más facil de manejar los cursos para los usuarios.
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </Card>
      </div>
    </div>
  )
}