import FAQs from "@/components/faqs"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"
import Features from "@/components/features";

export default function Landing() {
  return (
    <main>
      <Introduction />
      <Features />
      <HowItWorks />
      <FAQs />
    </main>
  )
}
