import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import "./waves.css";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Contact />
      <Footer />
    </ApolloProvider>
  );
}
