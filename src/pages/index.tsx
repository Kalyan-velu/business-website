import { Inter } from '@next/font/google'
import Navbar from "@/component/navbar/Navbar";
import Hero from "@/component/Hero";
import Business from "@/component/Business";
import Services from "@/component/Servicesa";
export default function Home() {
  return (
      <>
          <Navbar/>
          <Hero/>
          <Business />
          <Services/>
      </>
  )
}