"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "about",
  "impact",
  "experience",
  "projects",
  "skills",
  "certifications",
  "education",
  "contact",
];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
