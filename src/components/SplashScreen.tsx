import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          className="w-20 h-20 rounded-2xl gradient-warm flex items-center justify-center shadow-glow"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-4xl">❤️</span>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          For You
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          something special awaits...
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
