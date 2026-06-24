"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const logos = [
  { src: "/brands/brand-1.png", alt: "Marca 1" },
  { src: "/brands/brand-2.png", alt: "Marca 2" },
  { src: "/brands/brand-3.png", alt: "Marca 3" },
  { src: "/brands/brand-4.png", alt: "Marca 4" },
  { src: "/brands/brand-5.png", alt: "Marca 5" },
  { src: "/brands/brand-6.png", alt: "Marca 6" },
  { src: "/brands/brand-7.png", alt: "Marca 7" },
  { src: "/brands/brand-8.png", alt: "Marca 8" },
  { src: "/brands/brand-9.png", alt: "Marca 9" },
  { src: "/brands/brand-10.png", alt: "Marca 10" },
  { src: "/brands/brand-11.png", alt: "Marca 11" },
  { src: "/brands/brand-12.png", alt: "Marca 12" },
  { src: "/brands/brand-13.png", alt: "Marca 13" },
]

export function BrandsCarouselSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const autoScroll = useCallback(() => {
    if (!api || isPaused) return
    api.scrollNext()
  }, [api, isPaused])

  useEffect(() => {
    if (!api || !isInView) return
    const interval = setInterval(autoScroll, 2500)
    return () => clearInterval(interval)
  }, [api, autoScroll, isInView])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-sharks-navy-deep py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow eyebrow-light">
            Marcas que Já estão com os tubarões
          </span>
          <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Empresas que confiam na{" "}
            <span className="sharks-gradient-text">Sharks Company</span>
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: true,
            }}
            className="mx-auto w-full"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-sharks-navy-deep via-sharks-navy-deep/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-sharks-navy-deep via-sharks-navy-deep/80 to-transparent" />
            <CarouselContent className="-ml-4 md:-ml-6">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 md:pl-6 lg:basis-1/5"
                >
                  <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white sm:h-32">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[90%] max-w-[90%] object-contain"
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
