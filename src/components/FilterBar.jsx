import React from 'react'

export default function FilterBar({ categories, activeCategory, onCategoryChange, projectCounts }) {
  return (
    <div className="filter-bar">
      <div className="filter-wrapper">
        <h3 className="filter-title">Filter by Category</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            All Projects
            <span className="count">{projectCounts.total}</span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
              <span className="count">{projectCounts[category] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .filter-bar {
          margin-bottom: 50px;
          padding: 0 1rem;
        }

        .filter-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .filter-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-primary-text);
          margin-bottom: 25px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.2rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.4s;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          color: var(--color-secondary-text);
          padding: 0.2rem 0.5rem;
          border-radius: 0.3rem;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s ease;
        }

        .filter-btn:hover::before {
          left: 100%;
        }

        .filter-btn:hover {
          background: #e9ecef;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .filter-btn.active {
          background: var(--color-secondary-text);
          color: white;
          border-color: var(--color-secondary-text);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .filter-btn.active:hover {
          background: var(--color-primary-text);
          border-color: var(--color-primary-text);
        }

        .count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 6px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          min-width: 18px;
          text-align: center;
        }

        .filter-btn.active .count {
          background: rgba(255, 255, 255, 0.25);
        }

        .filter-btn:not(.active) .count {
          background: var(--color-secondary-text);
          color: white;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .filter-bar {
            margin-bottom: 40px;
            padding: 0 15px;
          }

          .filter-title {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 13px;
          }

          .count {
            font-size: 10px;
            padding: 1px 5px;
          }
        }

        @media (max-width: 480px) {
          .filter-title {
            font-size: 1.2rem;
          }

          .filter-buttons {
            gap: 6px;
          }

          .filter-btn {
            padding: 8px 12px;
            font-size: 12px;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .filter-btn {
            border-width: 3px;
          }
          
          .filter-btn.active {
            border-width: 3px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .filter-btn,
          .filter-title,
          .filter-buttons {
            animation: none;
            transition: none;
          }
          
          .filter-btn::before {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}