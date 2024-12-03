import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const FeatureItem = ({ children }) => (
  <div className="flex items-start mt-4 space-x-2">
    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
    <span>{children}</span>
  </div>
)
export const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 max-w-4xl">
        Obten beneficios extras para tus proximos cursos.
      </h1>
      
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Premium</CardTitle>
          <CardDescription>
            Nos encarecemos de darle todo al estudiante pero este pequeño extra nos ayuda a nosotros a seguir creciendo nuestra aplicación.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">$3.99</span>
            <span className="text-gray-500 ml-2">
              Mensual
              <br />
              Por los primeros 12 meses.
            </span>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full">Comienza ahora</Button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Beneficios</h3>
            <FeatureItem>Coins mensuales para hacer preguntas en vivo.</FeatureItem>
            <FeatureItem>Acceso a charlas y cursos totalmente gratuitos para los suscritos.</FeatureItem>
            <FeatureItem>Acceso a todos los avatares de la plataforma.</FeatureItem>
            <FeatureItem>Contacto directo con el instructor para resolver dudas personales.</FeatureItem>
            <FeatureItem>
              Acceso a ChatGPT.
              <p className="text-sm text-gray-500 mt-1">
               Para usarlo de la manera más eficiente a la hora de resolver dudas.
              </p>
            </FeatureItem>
            <FeatureItem>
              Automatión de tareas.
              <p className="text-sm text-gray-500 mt-1">
                Para que puedas concentrarte en lo que realmente importa, aprender. Podras conectar todas tus cuentas de calendario y las agendaremos por ti.
              </p>
            </FeatureItem>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}