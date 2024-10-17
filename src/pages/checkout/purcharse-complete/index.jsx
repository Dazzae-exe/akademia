import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Home } from 'lucide-react'

const OrderSummaryItem = ({ name, price }) => (
  <div className="flex justify-between py-2">
    <span>{name}</span>
    <span>${price.toFixed(2)}</span>
  </div>
)

export const PurchaseComplete = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-green-100 rounded-full p-2 w-16 h-16 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Your Purchase is Completed!</CardTitle>
          <CardDescription>Thank you for your order. We&apos;ve received your payment and will process your order soon.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <OrderSummaryItem name="Bardi Air Purifier" price={199.00} />
            <OrderSummaryItem name="Mi Air Purifier 3C" price={159.00} />
            <OrderSummaryItem name="Fast Delivery" price={4.99} />
            <div className="border-t border-gray-200 mt-2 pt-2 font-semibold">
              <OrderSummaryItem name="Total" price={362.99} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Order number: <span className="font-semibold">#ORD-2023-10-12-001</span>
            </p>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to <span className="font-semibold">barlydesign@gmail.com</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto" variant="outline">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Button>
          <Button className="w-full sm:w-auto">
            View Order Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}