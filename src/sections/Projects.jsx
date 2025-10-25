import React, { useEffect, useRef, useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);
  const portfolioRef = useRef(null);

  // Get unique categories and project counts
  const { categories, projectCounts, filteredProjects } = useMemo(() => {
    const cats = [
      ...new Set(projectsData.map((project) => project.category)),
    ].sort();

    const counts = {
      total: projectsData.length,
      ...cats.reduce((acc, cat) => {
        acc[cat] = projectsData.filter((p) => p.category === cat).length;
        return acc;
      }, {}),
    };

    const filtered =
      activeCategory === "All"
        ? projectsData
        : projectsData.filter((project) => project.category === activeCategory);

    return {
      categories: cats,
      projectCounts: counts,
      filteredProjects: filtered,
    };
  }, [activeCategory]);

  // Handle category change
  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setVisibleItems(new Set()); // Reset visible items
      setAnimationKey((prev) => prev + 1); // Force re-animation
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = entry.target.dataset.index;
            setVisibleItems((prev) => new Set(prev).add(itemIndex));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const portfolioItems =
      portfolioRef.current?.querySelectorAll(".portfolio-item");
    portfolioItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProjects, animationKey]); // Re-run when filtered projects change

  return (
    <section className="portfolio-section" id="portfolio">

      <div  id="projects"className="container" style={{backgroundColor: 'transparent'}}>
        {/* Intro Section */}
        <div className="intro animate-intro">
          <p className="eyebrow">My Work</p>
          <h2>Featured Projects</h2>
          <p className="subtitle">
            A showcase of my software development journey, featuring diverse
            projects built with modern technologies and best practices. Each
            project represents a unique challenge and solution in the digital
            landscape.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          projectCounts={projectCounts}
        />

        {/* Projects Grid */}
        <div className="portfolio-grid" ref={portfolioRef} key={animationKey}>
          {filteredProjects.map((project, index) => {
            const isVisible = visibleItems.has(index.toString());
            return (
              <div
                key={`${project.id}-${activeCategory}`}
                className={`portfolio-item ${isVisible ? "animate-in" : ""}`}
                data-index={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredProjects.length}</strong> of{" "}
            <strong>{projectsData.length}</strong> projects
            {activeCategory !== "All" && (
              <span>
                {" "}
                in <strong>{activeCategory}</strong>
              </span>
            )}
          </p>
        </div>

        {/* View More Button */}
        <div className="portfolio-actions">
          <button className="btn-view-more">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Portfolio Section Styles */
        .portfolio-section {
          padding: 50px 0;
          position: relative;
        }

        /* Add subtle background pattern */
        .portfolio-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
              circle at 20% 50%,
              rgba(120, 119, 198, 0.03) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(120, 119, 198, 0.03) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 80%,
              rgba(120, 119, 198, 0.03) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Intro Styles */
        .intro {
          max-width: 700px;
          margin: 0 auto 60px auto;
          text-align: center;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-intro {
          animation-delay: 0.2s;
        }

        .eyebrow {
          color: var(--taupe-medium);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .intro h2 {
          font-size: 3rem;
          font-weight: 700;
          color: var(--terracotta-dark);
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: var(--red-medium);
          margin: 0;
        }

        /* Results Info */
        .results-info {
          text-align: center;
          margin: 16px 0;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.5s;
        }

        .results-info p {
          color: var(--color-secondary-text);
          font-size: 14px;
          margin: 0;
        }

        .results-info strong {
          color: var(--color-primary-text);
          font-weight: 600;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 8px;
          margin-bottom: 60px;
        }

        .portfolio-item {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-item.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Portfolio Actions */
        .portfolio-actions {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .btn-view-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-secondary-text);
          color: var(--color-white);
          padding: 0.3rem 1.2rem;
          border: 2px solid transparent;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-view-more:hover {
          background: var(--color-white);
          color: var(--terracotta-dark);
          border: 2px solid var(--terracotta-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .btn-view-more svg {
          transition: transform 0.3s ease;
        }

        .btn-view-more:hover svg {
          transform: translate(2px, -2px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .container {
            width: 95%;
            padding: 0 15px;
          }

          .portfolio-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 80px 0;
          }

          .intro {
            margin-bottom: 40px;
          }

          .intro h2 {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 16px;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 8px;
            margin-bottom: 16px;
          }

          .btn-view-more {
            padding: 12px 24px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .portfolio-section {
            padding: 60px 0;
          }

          .intro h2 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 15px;
          }

          .portfolio-grid {
            gap: 15px;
          }

          .container {
            padding: 0 10px;
          }
        }

        /* High-end devices */
        @media (min-width: 1400px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
            margin: 0 auto 60px auto;
          }
        }
      `}</style>
    </section>
  );
}
