import ProductModel from "./layout";
import NewSite from "./another-layout/head";
import BodySection from "./another-layout/body-section";

export default function App() {
  return (<>
    <ProductModel />
      <NewSite />
        <BodySection />
    </>
  )
}