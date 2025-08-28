import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import React from "react";
import {Navbar} from "@/components/navbar";

export const metadata: Metadata = {
    title: "Coteț Mihai | Backend Developer Portfolio",
    description: "Portfolio of Coteț Mihai, a backend developer specialized in building scalable web applications, APIs, and efficient software solutions.",
}



export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
                {children}
                <Navbar/>
            </body>
        </html>
    )
}
