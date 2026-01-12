/** eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import HeroLight from "@/public/screenshot-light.png";
import HeroDark from "@/public/screenshot-dark.png";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
        <div
          className="pointer-events-none absolute inset-0 z-50 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-100 blur-[120px] dark:bg-zinc-900/50" />

        <section className="relative pt-30 pb-20 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="relative z-10 text-balance text-6xl font-bold tracking-tighter sm:text-8xl md:text-9xl">
                <span className="block text-zinc-900 dark:text-white">
                  Team chat
                </span>
                <span className="block bg-linear-to-b from-zinc-400 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-500 dark:to-zinc-800">
                  reimagined.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-zinc-500 md:text-xl dark:text-zinc-400">
                Built for high-performance teams. Real-time threads, baked-in
                billing, and an AI that actually understands context.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 rounded-full bg-zinc-900 px-8 text-base font-semibold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:shadow-zinc-100/10 dark:hover:bg-zinc-100"
                >
                  <Link href="#link">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-14 rounded-full px-8 text-base font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                >
                  <Link href="#link">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative mt-24 px-4">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 100, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 1.5,
                    },
                  },
                },
              }}
            >
              <div className="relative mx-auto max-w-6xl perspective-[2000px]">
                <div className="relative transform-gpu transition-all duration-1000 ease-out transform-[rotateX(20deg)] hover:transform-[rotateX(5deg)]">
                  <div className="absolute -left-12 top-20 z-30 hidden animate-bounce md:block animation-duration-[4s]">
                    <div className="flex max-w-[200px] items-start gap-3 rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="h-2 w-16 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-8 top-40 z-30 hidden animate-bounce md:block [animation-delay:1.5s] animation-duration-[5s]">
                    <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/95 px-4 py-2 shadow-2xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95">
                      <Zap className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                        AI Processing...
                      </span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/50 p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:shadow-black/50">
                    <div className="absolute inset-0 z-20 bg-linear-to-tr from-white/20 via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl"></div>

                    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                      <Image
                        src={HeroDark}
                        alt="dashboard"
                        className="hidden w-full dark:block scale-[1.01]"
                        width={2700}
                        height={1440}
                        priority
                      />
                      <Image
                        src={HeroLight}
                        alt="dashboard"
                        className="block w-full dark:hidden scale-[1.01]"
                        width={2700}
                        height={1440}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>

            <div className="absolute -bottom-20 left-0 h-64 w-full bg-linear-to-t from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
          </div>
        </section>
      </main>
    </>
  );
}
