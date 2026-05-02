import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

import pageIntro from "@/assets/page-intro.jpg";
import pageBirthday from "@/assets/page-birthday.jpg";
import pageFavorite from "@/assets/page-favorite.jpg";
import pageStartdate from "@/assets/page-startdate.jpg";
import pageMemories from "@/assets/page-memories.jpg";
import pageLetter from "@/assets/page-letter.jpg";
import pageForever from "@/assets/page-forever.jpg";

interface StoryStep {
  image: string;
  label: string;
  title: string;
  subtitle: string;
  body: string;
  animation: "fade-up" | "slide-right" | "zoom-in" | "slide-left" | "rotate" | "blur-in";
}

const steps: StoryStep[] = [
  {
    image: pageIntro,
    label: "chapter one",
    title: "Hey, You...",
    subtitle: "Yes, you.",
    body: "Ye kisi aur ke liye nahi hai.\nYe sirf tere liye hai.\nBas thoda scroll kar... ✨",
    animation: "fade-up",
  },
  {
    image: pageBirthday,
    label: "your day",
    title: "Happy Birthday",
    subtitle: "To my favorite human",
    body: "Duniya mein boht log hain,\npar tujhe wish karna\nsabse zyada special hai. 🎂\n\nTera din ho ya na ho —\ntu hamesha celebrate hone chahiye.",
    animation: "zoom-in",
  },
  {
    image: pageFavorite,
    label: "confession",
    title: "You're My\nFavorite",
    subtitle: "Aur ye kabhi nahi badlega",
    body: "Log favorite song badalte hain,\nfavorite color badalte hain.\n\nPar mera favorite insaan?\nWo tu hai — aur hamesha rahega. 💛",
    animation: "slide-right",
  },
  {
    image: pageStartdate,
    label: "the beginning",
    title: "Jab Sab\nShuru Hua",
    subtitle: "Wo date yaad hai?",
    body: "Ek normal sa din tha.\nPar teri wajah se wo\nab meri zindagi ka\nsabse important din hai. 📅\n\nUs din se — sab badal gaya.",
    animation: "slide-left",
  },
  {
    image: pageMemories,
    label: "our moments",
    title: "Memories",
    subtitle: "Jo kabhi fade nahi hongi",
    body: "Late night talks.\nSilly fights.\nWo comfortable silence.\nWo random smiles.\n\nYe sab — sirf humara hai. 📸",
    animation: "blur-in",
  },
  {
    image: pageLetter,
    label: "from the heart",
    title: "A Letter\nFor You",
    subtitle: "Ye pehle kabhi nahi bola",
    body: "Main perfect nahi hoon.\nPar tere liye try karna —\nye meri sabse real cheez hai.\n\nTu meri strength hai,\nmeri peace hai. 🌹",
    animation: "rotate",
  },
  {
    image: pageForever,
    label: "the promise",
    title: "Forever",
    subtitle: "Written in the stars",
    body: "Chahe kuch bhi ho —\nmain tere saath hoon.\n\nAaj bhi. Kal bhi.\nHamesha. ♾️",
    animation: "fade-up",
  },
];

const animationConfig = {
  "fade-up": {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 120 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -120 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 80 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  "rotate": {
    initial: { opacity: 0, rotate: -8, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 8, scale: 0.9 },
  },
  "blur-in": {
    initial: { opacity: 0, filter: "blur(20px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
  },
};

const Index = () => {
  const [step, setStep] = useState(-1);

  const current = steps[step];
  const isSplash = step === -1;
  const isLast = step === steps.length - 1;

  const goNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }, []);

  const goBack = useCallback(() => {
    setStep((s) => Math.max(-1, s - 1));
  }, []);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {isSplash ? (
          /* ─── SPLASH SCREEN ─── */
          <motion.div
            key="splash"
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <FloatingParticles count={30} />

            {/* Decorative line */}
            <motion.div
              className="line-gold w-16 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 1 }}
            />

            <motion.p
              className="font-body text-xs uppercase tracking-[0.4em] text-gold/60 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              made for you
            </motion.p>

            <motion.h1
              className="font-display text-5xl md:text-6xl font-bold gold-text text-center leading-tight"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              For You
            </motion.h1>

            <motion.p
              className="font-body text-muted-foreground text-center mt-4 max-w-xs text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Something I've been wanting to say...
            </motion.p>

            <motion.div
              className="line-gold w-16 mt-8 mb-12"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 1 }}
            />

            <motion.button
              className="relative px-12 py-4 rounded-full font-body text-sm uppercase tracking-[0.2em] text-primary-foreground gradient-gold-bg shadow-gold overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative">Begin</span>
            </motion.button>
          </motion.div>
        ) : (
          /* ─── STORY PAGES ─── */
          <motion.div
            key={step}
            className="absolute inset-0 flex flex-col"
            {...animationConfig[current.animation]}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Progress dots */}
            <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-5">
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div key={i} className="h-0.5 flex-1 rounded-full overflow-hidden bg-foreground/10">
                    <motion.div
                      className="h-full rounded-full gradient-gold-bg"
                      initial={false}
                      animate={{ width: i <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Full-screen image with overlay */}
            <div className="relative w-full h-[55vh] flex-shrink-0 overflow-hidden">
              <motion.img
                src={current.image}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent h-20" />

              {/* Label on image */}
              <motion.div
                className="absolute bottom-8 left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-body text-[10px] uppercase tracking-[0.5em] text-gold/70">
                  {current.label}
                </span>
              </motion.div>
            </div>

            {/* Text content */}
            <div className="flex-1 flex flex-col justify-between px-6 pt-4 pb-6 overflow-hidden">
              <div>
                <motion.h2
                  className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight whitespace-pre-line"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {current.title}
                </motion.h2>

                <motion.p
                  className="font-body text-gold/80 text-sm mt-2 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {current.subtitle}
                </motion.p>

                <motion.div
                  className="line-gold w-12 my-4"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />

                <motion.p
                  className="font-body text-muted-foreground text-sm leading-relaxed whitespace-pre-line"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {current.body}
                </motion.p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-4">
                {step > 0 && (
                  <motion.button
                    className="px-6 py-3 rounded-full glass-dark font-body text-xs uppercase tracking-[0.15em] text-foreground/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goBack}
                  >
                    Back
                  </motion.button>
                )}

                <motion.button
                  className="flex-1 py-3.5 rounded-full font-body text-xs uppercase tracking-[0.2em] text-primary-foreground gradient-gold-bg shadow-gold relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={isLast ? () => setStep(-1) : goNext}
                >
                  {isLast && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <span className="relative">
                    {isLast ? "Replay ✨" : "Next"}
                  </span>
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
