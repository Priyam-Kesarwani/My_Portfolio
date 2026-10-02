import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import BlurBlob from "./BlurBlob";


const App = () => {
  return (
    <div className="bg-[#050414] overflow-x-hidden min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
        style={{ zIndex: 999999, top: "85px" }}
      />
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> 
       <div className="relative pt-20">
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <CodingProfiles />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
