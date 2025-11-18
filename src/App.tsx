import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <>
          <h2 className="bg-blue-300 mt-8">hi</h2>
        </>
      </Container>
    </>
  );
}

export default App;
