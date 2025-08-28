import {Navbar} from "@/components/navbar";
import {HeroSection} from "@/components/hero-section";


export default function Home() {

    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-x-hidden">
            <HeroSection></HeroSection>
        </div>
      </>
  );
}
