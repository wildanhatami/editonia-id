import { motion } from 'framer-motion';
import { FaScroll, FaMagic, FaSearch, FaTrophy } from 'react-icons/fa';
import './QuestSection.css';

const quests = [
  {
    id: 1,
    title: "Post a Quest",
    subtitle: "(Briefing)",
    desc: "Contact us via WhatsApp. Share your video requirements, style, and deadline.",
    icon: <FaScroll />,
  },
  {
    id: 2,
    title: "The Grinding",
    subtitle: "(Editing Phase)",
    desc: "We cast our editing spells. Cutting, syncing, and adding effects to your footage.",
    icon: <FaMagic />,
  },
  {
    id: 3,
    title: "Review & Refine",
    subtitle: "(Revisions)",
    desc: "Check the loot! Review the draft and request adjustments if needed.",
    icon: <FaSearch />,
  },
  {
    id: 4,
    title: "Quest Completed",
    subtitle: "(Delivery)",
    desc: "Mission accomplished! Receive your high-quality final video and complete the payment.",
    icon: <FaTrophy />,
  }
];

const QuestSection = () => {
  return (
    <section id="quests" className="quests-section">
      <h2 className="section-title">Quest Board</h2>
      <p className="section-subtitle">How to summon our editing powers</p>
      
      <div className="quests-grid">
        {quests.map((quest, index) => (
          <motion.div 
            key={quest.id} 
            className="quest-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="quest-number">{quest.id}</div>
            <div className="quest-icon">{quest.icon}</div>
            <h3 className="quest-title">{quest.title}</h3>
            <span className="quest-subtitle">{quest.subtitle}</span>
            <p className="quest-desc">{quest.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuestSection;
