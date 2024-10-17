import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-16">Como funciona</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-start space-x-4 p-6 rounded-2xl bg-secondary">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Founder" />
            <AvatarFallback className="bg-primary text-primary-foreground">CD</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <h4>Christian Daza</h4>
            <p className="text-sm">Software Developer / Founder </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-secondary flex items-center gap-4">
        <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground">1</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            Una aplicación para crear cursos dirigido a un puesto de trabajo de nuestra selección o para ingresar en algún curso de algun profesor, creador o fundador.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex items-center gap-4">
        <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground">2</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            Buscamos precios moderables pero para una moderada lista de participantes, nuestra capacidad maxima es de 100 personas en el stream del curso.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex items-center gap-4">
        <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground">3</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            In the early days of iOS development, our founder and president published regular how-to articles and made a name for himself as an expert in the field.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex items-center gap-4">
        <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-primary text-primary-foreground">4</AvatarFallback>
          </Avatar>
          <p className="text-sm">
            In the early days of iOS development, our founder and president published regular how-to articles and made a name for himself as an expert in the field.
          </p>
        </div>
      </div>
    </div>
  )
}