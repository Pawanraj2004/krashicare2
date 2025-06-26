import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"

export default function Features() {
  return (
    <section className="pt-24 pb-48">
      <div>
        <Header heading="Key Features of कृषिCare" />
      </div>
      <div className="mt-16 px-8 flex justify-center">
        <Accordion type="single" collapsible className="w-11/12 lg:w-1/2">
          <AccordionItem value="feature-1" className="ml-10">
            <AccordionTrigger>AI-Based Disease Detection</AccordionTrigger>
            <AccordionContent>कृषिCare leverages AI to quickly analyze images of plant leaves and accurately identify diseases. This feature ensures early detection, allowing you to take preventive measures.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="feature-2">
            <AccordionTrigger>Multilingual Support</AccordionTrigger>
            <AccordionContent>कृषिCare offers multilingual support, making it accessible to users in different regions. Whether you prefer English or Hindi, you can seamlessly switch between languages using the language toggle.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="feature-3">
            <AccordionTrigger>IoT Sensor Integration</AccordionTrigger>
            <AccordionContent>कृषिCare integrates IoT sensors for real-time crop monitoring. It tracks environmental factors like soil moisture, temperature, and humidity, helping you</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
      )
    }
