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
    title: "Hey, Aditi...",
    subtitle: "Yes, you.",
    body: "Ye kisi aur ke liye nahi hai.\nYe sirf tere liye hai.\nBas thoda tap kar... ✨",
    animation: "fade-up",
  },
  {
    image: pageBirthday,
    label: "26 november",
    title: "Happy Birthday\nAditi",
    subtitle: "26th Nov — the day the world got better",
    body: "Jis din tu aayi duniya mein,\nus din se sab kuch\nthoda aur khoobsurat ho gaya. 🎂\n\n26 November — mera\nsabse favorite din. 🎉",
    animation: "zoom-in",
  },
  {
    image: pageFavorite,
    label: "confession",
    title: "Aditi,\nYou're My\nFavorite",
    subtitle: "Aur ye kabhi nahi badlega",
    body: "Log favorite song badalte hain,\nfavorite color badalte hain.\n\nPar mera favorite insaan?\nWo tu hai Aditi — hamesha. 💛",
    animation: "slide-right",
  },
  {
    image: pageStartdate,
    label: "15 february 2025",
    title: "Jab Sab\nShuru Hua",
    subtitle: "Maha Shivratri — 15 Feb 2025",
    body: "Maha Shivratri ki raat thi.\nBholenath ki kripa thi.\nAur tu mili. 🙏\n\n15 February 2025 —\njab hamari kahani shuru hui.\nUs din se sab badal gaya. ✨",
    animation: "slide-left",
  },
  {
    image: pageMemories,
    label: "our moments",
    title: "Humari\nMemories",
    subtitle: "Jo kabhi fade nahi hongi",
    body: "Late night talks.\nSilly fights.\nWo comfortable silence.\nWo random smiles.\n\nYe sab — sirf humara hai,\nAditi. 📸",
    animation: "blur-in",
  },
  {
    image: pageLetter,
    label: "from the heart",
    title: "A Letter\nFor Aditi",
    subtitle: "Ye pehle kabhi nahi bola",
    body: "Main perfect nahi hoon.\nPar tere liye try karna —\nye meri sabse real cheez hai.\n\nTu meri strength hai,\nmeri peace hai, Aditi. 🌹",
    animation: "rotate",
  },
  {
    image: pageForever,
    label: "the promise",
    title: "Forever\nYours, Aditi",
    subtitle: "Written in the stars",
    body: "Chahe kuch bhi ho —\nmain tere saath hoon.\n\n15 Feb se shuru hua,\naur ye kabhi khatam nahi hoga.\nHamesha. ♾️",
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
  const [isLocked, setIsLocked] = useState(true);
  const [dateInput, setDateInput] = useState({ day: "", month: "", year: "" });
  const [shake, setShake] = useState(false);
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

  const handleUnlock = useCallback(() => {
    const d = parseInt(dateInput.day);
    const m = parseInt(dateInput.month);
    const y = parseInt(dateInput.year);
    if (d === 15 && m === 2 && y === 2025) {
      setIsLocked(false);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }, [dateInput]);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {isLocked ? (
          /* ─── LOCK SCREEN ─── */
          <motion.div
            key="lock"
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <FloatingParticles count={15} />

            <motion.div
              className="text-5xl mb-6"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🔒
            </motion.div>

            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold gold-text text-center mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Locked
            </motion.h2>

            <motion.p
              className="font-body text-muted-foreground text-center text-sm mb-8 max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Enter our special date to unlock ✨
            </motion.p>

            <motion.div
              className="flex gap-3 mb-6"
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="DD"
                value={dateInput.day}
                onChange={(e) => setDateInput((p) => ({ ...p, day: e.target.value.replace(/\D/g, "") }))}
                className="w-16 h-14 rounded-xl glass-dark text-center font-display text-xl text-foreground placeholder:text-muted-foreground/40 outline-none focus:ring-1 focus:ring-gold/50"
              />
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="MM"
                value={dateInput.month}
                onChange={(e) => setDateInput((p) => ({ ...p, month: e.target.value.replace(/\D/g, "") }))}
                className="w-16 h-14 rounded-xl glass-dark text-center font-display text-xl text-foreground placeholder:text-muted-foreground/40 outline-none focus:ring-1 focus:ring-gold/50"
              />
              <input
                type="text"
                inputMode="numeric"
                maxLength={4}
                placeholder="YYYY"
                value={dateInput.year}
                onChange={(e) => setDateInput((p) => ({ ...p, year: e.target.value.replace(/\D/g, "") }))}
                className="w-20 h-14 rounded-xl glass-dark text-center font-display text-xl text-foreground placeholder:text-muted-foreground/40 outline-none focus:ring-1 focus:ring-gold/50"
              />
            </motion.div>

            <motion.button
              className="px-10 py-3.5 rounded-full font-body text-sm uppercase tracking-[0.2em] text-primary-foreground gradient-gold-bg shadow-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnlock}
            >
              Unlock 💫
            </motion.button>

            {shake && (
              <motion.p
                className="font-body text-accent text-xs mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Wrong date... try again 💔
              </motion.p>
            )}
          </motion.div>
        ) : isSplash ? (
          /* ─── SPLASH SCREEN ─── */
          <motion.div
            key="splash"
            className="absolute inset-0 flex flex-col items-center justify-center px-8 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            onClick={goNext}
          >
            <FloatingParticles count={30} />

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

            <motion.p
              className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground animate-glow-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              tap anywhere to begin
            </motion.p>
          </motion.div>
        ) : (
          /* ─── STORY PAGES ─── */
          <motion.div
            key={step}
            className="absolute inset-0 flex flex-col"
            {...animationConfig[current.animation]}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tap zones — left = back, right = next */}
            <div className="absolute inset-0 z-20 flex">
              <div
                className="w-1/3 h-full cursor-pointer"
                onClick={step > 0 ? goBack : undefined}
              />
              <div className="w-1/3 h-full" />
              <div
                className="w-1/3 h-full cursor-pointer"
                onClick={isLast ? () => setStep(-1) : goNext}
              />
            </div>

            {/* Progress dots */}
            <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-5">
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
            <div className="flex-1 flex flex-col justify-center px-6 pt-4 pb-8 overflow-hidden">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
