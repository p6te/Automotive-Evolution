import { sectionIds, sections } from "../../constants/sectionIds";
import { useState, useEffect } from "react";
import { StyledLink, StyledList, StyledListItem, StyledNav } from "./styled";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState<sectionIds | string | null>(
    sectionIds.section1
  );

  const scrollToSection = (sectionId: sectionIds) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          setActiveLink(entry.target.getAttribute("id"));
        }
      });
    },
    {
      threshold: 0.55,
      rootMargin: "-20px",
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      sections.map((set) => {
        const element = document.getElementById(set);
        if (element) {
          observer.observe(element);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNav>
      <StyledList>
        {sections.map((sectionId, index) => {
          return (
            <StyledListItem
              key={index}
              onClick={() => scrollToSection(sectionId)}
              className={activeLink === sectionId ? "active" : ""}
            >
              {<StyledLink to="/"></StyledLink>}
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledNav>
  );
};

export default Navigation;
