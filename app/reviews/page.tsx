import Header from "@/components/layout/header"
import Reviews from "@/components/sections/reviews"
import Footer from "@/components/layout/footer"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Reviews />
      </div>
      <Footer />
    </div>
  )
}
