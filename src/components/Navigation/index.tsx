import { sectionIds, sections } from "../../constants/sectionIds";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { StyledNav } from "./styled";

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
        setActiveLink(entry.target.getAttribute("id"));
        console.log(entry.target.getAttribute("id"));
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
      <ul>
        {sections.map((sectionId, index) => {
          return (
            <li key={index} onClick={() => scrollToSection(sectionId)}>
              {
                <Link
                  to="/"
                  className={activeLink === sectionId ? "active" : ""}
                >
                  {sectionId}
                </Link>
              }
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};

export default Navigation;
