import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import InteractiveCard from "@/components/InteractiveCard";
import DetailModal from "@/components/DetailModal";
import FinalScreen from "@/components/FinalScreen";

type ModalType = "message" | "memories" | "reasons" | "promise" | null;

const cards = [
  { id: "message" as const, icon: "💌", title: "A Message For You", subtitle: "Kuch dil ki baat..." },
  { id: "memories" as const, icon: "📸", title: "Our Vibe", subtitle: "Moments that matter" },
  { id: "reasons" as const, icon: "❤️", title: "Why You Matter", subtitle: "100 reasons aren't enough" },
  { id: "promise" as const, icon: "🌙", title: "A Promise", subtitle: "Aaj, kal, hamesha..." },
];

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [showFinal, setShowFinal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Splash */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <motion.div
          className="mx-auto max-w-md px-5 py-8 pb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-muted-foreground text-sm mb-1">welcome back,</p>
            <h1 className="text-3xl font-bold text-foreground">
              Hey Jaan <span className="text-gradient">❤️</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Kuch special hai tere liye — explore kar ✨
            </p>
          </motion.div>

          {/* Featured Banner */}
          <motion.div
            className="mb-6 rounded-2xl gradient-warm p-5 shadow-glow cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFinal(true)}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-xs font-medium uppercase tracking-wider">
                  Special
                </p>
                <h2 className="text-xl font-bold text-primary-foreground mt-1">
                  The Final Message
                </h2>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  Save this for last 💕
                </p>
              </div>
              <div className="text-4xl animate-float">💝</div>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div className="space-y-3">
            <motion.p
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explore
            </motion.p>

            {cards.map((card, i) => (
              <InteractiveCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                onClick={() => setActiveModal(card.id)}
                delay={0.6 + i * 0.1}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Modals */}
      <DetailModal
        isOpen={activeModal === "message"}
        onClose={() => setActiveModal(null)}
        title="A Message For You"
        icon="💌"
      >
        <div className="space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Kabhi kabhi words nahi milte, par feel hamesha rehti hai.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Tu wo insaan hai jiski wajah se mera din better hota hai. Teri hansi, teri baatein, teri silly jokes —
            sab kuch matter karta hai mere liye.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Main perfect nahi hoon, par tere saath try karna — that's everything. ❤️
          </p>
          <div className="rounded-xl glass p-4 text-center">
            <p className="text-sm text-gradient font-semibold">
              "Tu meri favorite notification hai 📱"
            </p>
          </div>
        </div>
      </DetailModal>

      <DetailModal
        isOpen={activeModal === "memories"}
        onClose={() => setActiveModal(null)}
        title="Our Vibe"
        icon="📸"
      >
        <div className="space-y-4">
          {[
            { emoji: "🌙", text: "Late night calls jo kabhi khatam nahi hoti", time: "2 AM vibes" },
            { emoji: "😂", text: "Wo stupid jokes pe hum dono ki hassi", time: "Always" },
            { emoji: "🎵", text: "Gaane share karna aur kehna 'ye sun'", time: "Daily ritual" },
            { emoji: "☕", text: "Random chai pe deep talks", time: "Evening scenes" },
            { emoji: "🤗", text: "Wo comfortable silence jo awkward nahi lagti", time: "Us thing" },
            { emoji: "📱", text: "Subah ka pehla message — 'uth ja'", time: "Every morning" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl glass p-4"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="text-foreground text-sm">{item.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </DetailModal>

      <DetailModal
        isOpen={activeModal === "reasons"}
        onClose={() => setActiveModal(null)}
        title="Why You Matter"
        icon="❤️"
      >
        <div className="space-y-3">
          {[
            "Teri smile se mera mood fix ho jata hai",
            "Tu meri sabse honest cheerleader hai",
            "Tere bina din boring lagta hai",
            "Tu samajhti hai bina bolein",
            "Tera patience mujhe better banata hai",
            "Tu meri safe space hai",
            "Tere saath time fast jaata hai",
            "Tu mujhe khud pe believe karati hai",
          ].map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl glass p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-warm text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="text-foreground text-sm">{reason}</p>
            </motion.div>
          ))}
        </div>
      </DetailModal>

      <DetailModal
        isOpen={activeModal === "promise"}
        onClose={() => setActiveModal(null)}
        title="A Promise"
        icon="🌙"
      >
        <div className="space-y-6 text-center py-4">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🤝
          </motion.div>
          <h3 className="text-2xl font-bold text-gradient">
            Mera Waada
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Main hamesha try karunga — tere liye better banne ka.</p>
            <p>Teri baat sununga, tere saath khada rahunga, aur tujhe kabhi akela feel nahi hone dunga.</p>
            <p>Chahe kuch bhi ho — main tere side pe hoon. 💪</p>
          </div>
          <div className="rounded-2xl gradient-warm p-5 shadow-glow mt-6">
            <p className="text-primary-foreground font-semibold text-lg">
              "Aaj bhi, kal bhi, hamesha." 🌟
            </p>
          </div>
        </div>
      </DetailModal>

      {/* Final Screen */}
      <AnimatePresence>
        <FinalScreen isOpen={showFinal} onClose={() => setShowFinal(false)} />
      </AnimatePresence>
    </div>
  );
};

export default Index;
