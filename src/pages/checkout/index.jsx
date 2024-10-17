import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Bitcoin, DollarSign } from 'lucide-react'

const ProductCard = ({ name, price, description, color }) => (
  <Card className="mb-4">
    <CardContent className="flex items-center p-4">
      <div className="w-20 h-20 bg-gray-200 rounded mr-4"></div>
      <div>
        <CardTitle>{name} - ${price}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <span className="text-sm text-gray-500">{color}</span>
      </div>
    </CardContent>
  </Card>
)

const ShippingOption = ({ price, name, description, logo, recommended }) => (
  <Card className={`mb-2 ${recommended ? 'border-green-500' : ''}`}>
    <CardContent className="flex items-center justify-between p-4">
      <div>
        <CardTitle className="flex items-center">
          ${price} • {name}
          {recommended && <span className="ml-2 text-xs text-green-500 font-normal">Recommended</span>}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <img src={logo} alt={name} className="h-8" />
    </CardContent>
  </Card>
)

export const Checkout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to cart
          </Button>
          
          <h2 className="text-2xl font-bold mb-4">Product Information & Review</h2>
          <p className="text-sm text-gray-500 mb-4">
            By placing your order, you agree to Storelo in&apos;s <a href="#" className="underline">Privacy</a> and <a href="#" className="underline">Policy</a>.
          </p>
          
          <ProductCard 
            name="Bardi Air Purifier"
            price="199.00"
            description="Bardi Air Purifier is a portable ioniser with H11 HEPA filter technology."
            color="White"
          />
          
          <ProductCard 
            name="Mi Air Purifier 3C"
            price="159.00"
            description="Mi Air Purifier 3C is a good air purifier with interesting more features."
            color="White"
          />
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Complete your purchase by providing your payment details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="barlydesign@gmail.com" />
              </div>
              
              <div>
                <Label>Select Payment Method</Label>
                <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <CreditCard className="mb-3 h-6 w-6" />
                      Debit / Credit Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <DollarSign className="mb-3 h-6 w-6" />
                      PayPal
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="binance" id="binance" className="peer sr-only" />
                    <Label
                      htmlFor="binance"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Bitcoin className="mb-3 h-6 w-6" />
                      Binance
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="cardName">Name on card</Label>
                <Input id="cardName" placeholder="Barly Vallendito" />
              </div>
              
              <div>
                <Label htmlFor="cardNumber">Card number</Label>
                <Input id="cardNumber" placeholder="8899 2893 7876 1112" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry date</Label>
                  <Input id="expiry" placeholder="02 / 25" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="•••" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p className="text-sm text-gray-500 mb-4">Payment are secure and encrypted</p>
              <Separator className="my-4" />
              <div className="flex justify-between w-full mb-2">
                <span>Sub Total</span>
                <span>$358.00</span>
              </div>
              <div className="flex justify-between w-full mb-2">
                <span>Discount</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between w-full mb-4">
                <span className="font-bold">Total</span>
                <span className="font-bold">$358.00</span>
              </div>
              <Button className="w-full">Pay $358.00</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}