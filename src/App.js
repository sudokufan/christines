import Footer from "./footer/footer";
import Header from "./header/header";
import TextSlice from "./textSlice/textSlice";

function App() {
  return (
    <div className="App">
      <Header />
      <TextSlice
        text={
          <>
            <p>A family-run business and a power for change.</p>
            <p>
              We are passionate about serving you our locally sourced, organic,
              sustainable, vegan, cruelty-free, and ethical produce.
            </p>
            <p>
              We love every single minute of selling ethically sourced,
              sustainable products and continuing to make our community and our
              world a better place.
            </p>
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
