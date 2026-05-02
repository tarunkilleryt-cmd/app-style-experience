import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import slide5 from "@/assets/slide-5.jpg";
import slide6 from "@/assets/slide-6.jpg";
import slide7 from "@/assets/slide-7.jpg";

// Each step: unique animation direction + image + text
const steps = [
  {
    id: 0,
    image: slide1,
    emoji: "🌙",
    title: "Hey...",
    text: "Kuch kehna hai tujhe.\nBas ek baar sun le... ❤️",
    animation: "fadeUp",
  },
  {
    id: 1,
    image: slide2,
    emoji: "✨",
    title: "Tujhe pata hai?",
    text: "Teri wajah se mera har din\nthoda aur khoobsurat hota hai.",
    animation: "slideRight",
  },
  {
    id: 2,
    image: slide3,
    emoji: "💌",
    title: "Ye Dil Kehta Hai",
    text: "Tu meri sabse\nfavorite insaan hai.\nBina kisi reason ke.",
    animation: "scaleUp",
  },
  {
    id: 3,
    image: slide5,
    emoji: "🌹",
    title: "Teri Smile",
    text: "Duniya ki sabse\nmehegi cheez hai.\nAur mujhe free mein milti hai 😊",
    animation: "slideLeft",
  },
  {
    id: 4,
    image: slide6,
    emoji: "⛵",
    title: "Hum Dono",
    text: "Do alag duniya se,\npar saath mein perfect.\nJaise ye do boats — moon ke neeche. 🌙",
    animation: "flipIn",
  },
  {
    id: 5,
    image: slide4,
    emoji: "♾️",
    title: "Mera Waada",
    text: "Chahe kuch bhi ho —\nmain tere side pe hoon.\nAaj bhi, kal bhi, hamesha.",
    animation: "rotateIn",
  },
  {
    id: 6,
    image: slide7,
    emoji: "🏮",
    title: "The End?",
    text: "Nahi... ye toh bas\nshuruaat hai.\nForever yours 💕",
    animation: "fadeUp",
  },
];

// Different animation variants for each step
const animationVariants: Record<string, { initial: object; animate: object; exit: object }> = {
  fadeUp: {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -80 },
  },
  slideRight: {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 },
  },
  flipIn: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -15, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 15, scale: 0.8 },
  },
};

const Index = () => {
  const [step, setStep] = useState(-1); // -1 = splash
  const [direction, setDirection] = useState(1);

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;
  const isSplash = step === -1;

  const goNext = useCallback(() => {
    if (isLast) return;
    setDirection(1);
    setStep((s) => s + 1);
  }, [isLast]);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(-1, s - 1));
  }, []);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {isSplash ? (
          <motion.div
            key="splash"
            className="flex-1 flex flex-col items-center justify-center gap-6 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-24 h-24 rounded-3xl gradient-warm flex items-center justify-center shadow-glow"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, delay: 0.3 }}
            >
              <span className="text-5xl">❤️</span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold text-foreground"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              For You
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-center max-w-xs"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Kuch special hai — bas ek tap door ✨
            </motion.p>

            <motion.button
              className="mt-8 px-10 py-4 rounded-2xl gradient-warm text-primary-foreground font-semibold text-lg shadow-glow"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
            >
              Shuru Karein 💫
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            className="flex-1 flex flex-col"
            initial={animationVariants[currentStep.animation].initial}
            animate={animationVariants[currentStep.animation].animate}
            exit={animationVariants[currentStep.animation].exit}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Progress bar */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full overflow-hidden bg-secondary"
                  >
                    <motion.div
                      className="h-full gradient-warm rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: i <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">
                {step + 1} / {steps.length}
              </p>
            </div>

            {/* Image */}
            <div className="px-5 flex-shrink-0">
              <motion.div
                className="relative w-full aspect-[3/4] max-h-[45vh] rounded-3xl overflow-hidden shadow-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img
                  src={currentStep.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 text-5xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", damping: 10 }}
                >
                  {currentStep.emoji}
                </motion.div>
              </motion.div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-between px-6 pt-5 pb-6">
              <div>
                <motion.h2
                  className="text-3xl font-bold text-gradient mb-3"
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentStep.title}
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentStep.text}
                </motion.p>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                {step > 0 && (
                  <motion.button
                    className="flex-1 py-4 rounded-2xl glass text-foreground font-semibold text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goBack}
                  >
                    ← Back
                  </motion.button>
                )}
                <motion.button
                  className={`flex-[2] py-4 rounded-2xl font-semibold text-base shadow-glow ${
                    isLast
                      ? "gradient-warm text-primary-foreground"
                      : "gradient-warm text-primary-foreground"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={isLast ? () => setStep(-1) : goNext}
                  animate={
                    isLast
                      ? {
                          boxShadow: [
                            "0 0 20px hsl(0 100% 60% / 0.2)",
                            "0 0 40px hsl(0 100% 60% / 0.4)",
                            "0 0 20px hsl(0 100% 60% / 0.2)",
                          ],
                        }
                      : {}
                  }
                  transition={isLast ? { duration: 2, repeat: Infinity } : {}}
                >
                  {isLast ? "Phir Se Dekho 🔄" : "Next →"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
