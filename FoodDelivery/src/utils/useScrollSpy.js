import { useEffect, useRef, useState } from "react";

const useScrollSpy = (collections) => {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (!element) return;

    setActiveSection(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = null;

      collections.forEach((collection) => {
        const element = sectionRefs.current[collection.collection_id];
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120) {
          current = collection.collection_id;
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collections]);

  return { sectionRefs, activeSection, scrollToSection };
};

export default useScrollSpy;
