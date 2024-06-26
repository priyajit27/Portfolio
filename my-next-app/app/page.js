
import Footer from "./components/Footer";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Email from "./components/Email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <Hero/>
      <About />
      <Project/>
      <Email />
    </div>
    <Footer />
  </main>
  );
}
