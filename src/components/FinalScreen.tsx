import { motion } from "framer-motion";

interface FinalScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

const FinalScreen = ({ isOpen, onClose }: FinalScreenProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground"
      >
        ✕
      </button>

      <motion.div
        className="text-center max-w-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="text-6xl mb-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <h1 className="text-3xl font-bold text-gradient mb-4">
          You Mean Everything
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Har pal, har din — tu meri sabse khoobsurat wajah hai muskurane ki.
          Ye sab tere liye hai, kyunki tu special hai. ✨
        </p>

        <motion.div
          className="inline-block px-6 py-3 rounded-2xl gradient-warm text-primary-foreground font-semibold shadow-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0 0 20px hsl(0 100% 60% / 0.15)", "0 0 40px hsl(0 100% 60% / 0.3)", "0 0 20px hsl(0 100% 60% / 0.15)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Forever Yours 💕
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
