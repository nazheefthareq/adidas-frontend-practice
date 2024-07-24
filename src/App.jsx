import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscription, SuperQuality } from "./sections";
import Navs from "./components/Navs";

const App = () => (
  <main className="relative"> 
      <Navs/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscription />
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white">
      <Footer />
    </section>
  </main>

);

export default App