import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";  
import HeroBanner from '../components/HeroBanner';
import LandingContent from '../components/LandingContent';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';
import PreLoginLandingContent from "../components/PreLoginLandingContent";
import PreFooterBanner from "../components/PreFooterBanner";

const Home = () => (
    <>
        <Navbar /> 
        <Hero />
        <HeroBanner />
        {/* <LandingContent /> */}
        <PreLoginLandingContent /> {/* Landing Content Before Signin / Login */}
        <PreFooterBanner />
        <Footer />
    </>
)

export default Home; 