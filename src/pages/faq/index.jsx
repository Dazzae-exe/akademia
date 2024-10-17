import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const FAQItem = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
)

export const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stuck on something? We&apos;re here to help with all your questions and answers in one place.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              question="Is there a free trial available?"
              answer="Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <FAQItem
              question="Can I change my plan later?"
              answer="Of course! Our pricing scales with your company. Chat to our friendly team to find the best solution for you."
            />
            <FAQItem
              question="What is your cancellation policy?"
              answer="We understand that things change. You can cancel your plan at any time and we'll refund you the remainder of your billing period."
            />
            <FAQItem
              question="Can other info be added to an invoice?"
              answer="At the moment, the only way to add additional information to an invoice is to add it to the workspace's name manually."
            />
            <FAQItem
              question="How does billing work?"
              answer="Plans are per workspace, not per account. You can upgrade one workspace, and still have another workspace on a different plan."
            />
            <FAQItem
              question="How do I change my account email?"
              answer="You can change the email address associated with your account by going to 'Account Settings' from a laptop or desktop."
            />
          </Accordion>
        </div>

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">
            The customer support team at Akademia is amazing! They answer all my questions quickly and thoroughly. I&apos;m so happy I chose them to manage our business.
          </p>
          <div className="flex items-center justify-center">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Amélie Laurent" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="ml-4 text-left">
              <p className="font-semibold">Amélie Laurent</p>
              <p className="text-sm text-gray-600">Founder, Quotient</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}