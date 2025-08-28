"use client"

import { Github, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import {useState} from "react";

const socialLinks = [
    { icon: Github, href: "https://github.com/Cotet-Mihai" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mihaita-cornel-cotet-97262b268/" },
    { icon: Mail, href: "mailto:cotetmihaitacornel@gmail.com" },
    { icon: MapPin, href: "https://www.google.com/maps/place/Bucure%C8%99ti/@44.4377073,25.9298305,11z/data=!3m1!4b1!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" },
];

function HeroSection() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center space-y-6 animate-in fade-in duration-1000">

                    <div className="flex justify-center items-center gap-3 mx-auto">
                        <div className="w-25 h-25 rounded-full overflow-hidden border-2 border-white/20">
                            <img
                                src="/me.png"
                                alt="Coteț Mihai Avatar"
                                className="w-full h-full object-cover scale-200 mt-5"
                            />
                        </div>
                        <div className="text-left flex flex-col justify-center">
                            <div className="flex flex-row justify-center items-center">
                                <h2 className="text-white font-bold text-2xl">Coteț Mihai</h2>
                                <h3 className="text-white font-bold text-3xl wave-on-hover">👋</h3>
                            </div>
                            <div className="flex items-center gap-2 mt-5">
                                <span className="text-base">🇷🇴</span>
                                <span className="text-gray-300 text-sm font-semibold">Romania</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-gray-300 font-semibold">Available for work</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
                        <span className="inline-block">BACKEND</span>
                        <br />
                        <div className="flex items-center justify-center gap-4 mt-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              DEVELOPER
            </span>
                            <button onClick={() => setIsContactModalOpen(true)} className="px-4 py-2 rounded-3xl text-white border-2 border-white shadow-lg bg-transparent text-2xl transition-transform duration-300 hover:scale-105">
                                Contact Me
                            </button>
                        </div>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mt-8">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 flex items-center justify-center rounded-full text-gray-400
                         hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                            >
                                <social.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>

                </div>
            </section>

            {isContactModalOpen && (
                <div onClick={() => setIsContactModalOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div  onClick={(e) => e.stopPropagation()} className="bg-slate-800 border border-white/10 rounded-xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300">

                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                                <Mail className="h-8 w-8 text-emerald-400" />
                                <a href={"mailto:cotetmihaitacornel@gmail.com"}>
                                    <p className="text-white font-medium text-xl">Email</p>
                                    <p className="text-gray-400 text-lg">cotetmihaitacornel@gmail.com</p>
                                </a>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                                <PhoneCall className="h-8 w-8 text-blue-400" />
                                <a href={"tel:0725585320"}>
                                    <p className="text-white font-medium text-xl">Phone</p>
                                    <p className="text-gray-400 text-lg">0725 585 320</p>
                                </a>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                                <MapPin className="h-8 w-8 text-red-400" />
                                <a href={"https://www.google.com/maps/place/Bucure%C8%99ti/@44.4378258,26.0946376,11z/data=!3m1!4b1!4m6!3m5!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!8m2!3d44.4267674!4d26.1025384!16zL20vMDk2Z20?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"} target={"_blank"}>
                                    <p className="text-white font-medium text-xl">Location</p>
                                    <p className="text-gray-400 text-lg">Sector 2, București, România</p>
                                </a>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer">
                                <Linkedin className="h-8 w-8 text-gray-400" />
                                <a href={"https://www.linkedin.com/in/mihaita-cornel-cotet-97262b268/"} target={"_blank"}>
                                    <p className="text-white font-medium text-xl">LinkedIn</p>
                                    <p className="text-gray-400 text-lg">Mihaita-Cornel Cotet</p>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-gray-400 text-sm text-center">Ready to build something amazing together?</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export { HeroSection };
