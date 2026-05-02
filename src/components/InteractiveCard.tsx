import { motion } from "framer-motion";

interface InteractiveCardProps {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  delay?: number;
}

const InteractiveCard = ({ icon, title, subtitle, onClick, delay = 0 }: InteractiveCardProps) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full cursor-pointer rounded-2xl gradient-card border border-border p-5 shadow-card transition-colors hover:border-primary/30 active:shadow-glow"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl glass text-2xl">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
        </div>
        <div className="text-muted-foreground text-xl">›</div>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;
