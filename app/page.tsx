import Header from "@/components/header"
import Hero from "@/components/hero"
import Context from "@/components/context"
import Objectives from "@/components/objectives"
import Advice from "@/components/advice"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Context />
      <Objectives />
      <Advice />
      <Footer />
    </main>
  )
}
