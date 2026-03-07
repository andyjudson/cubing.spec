import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import './App.css';

interface CfopAlgorithm {
  id: string;
  name: string;
  notation: string;
  method: string;
  group: string;
  image: string;
  notes: string;
}

function App() {
  const [algorithms, setAlgorithms] = useState<CfopAlgorithm[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredAlg, setHoveredAlg] = useState<string | null>(null);
  const [tooltipLeft, setTooltipLeft] = useState<boolean>(false);

  useEffect(() => {
    const loadAlgorithms = async () => {
      try {
        const response = await fetch('/data/algs-cfop-bgr.json');
        const data = await response.json();
        setAlgorithms(data);
      } catch (error) {
        console.error('Failed to load algorithms:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAlgorithms();
  }, []);

  const essentials = algorithms.filter(alg => ['oll_sune', 'oll_antisune', 'pll_t', 'pll_ua', 'pll_h'].includes(alg.id));
  const ollEdges = algorithms.filter(alg => alg.method === 'oll' && alg.group === 'edge');
  const ollCorners = algorithms.filter(alg => alg.method === 'oll' && alg.group === 'corner');
  const pllCorners = algorithms.filter(alg => alg.method === 'pll' && alg.group === 'corner');
  const pllEdges = algorithms.filter(alg => alg.method === 'pll' && alg.group === 'edge');

  if (loading) {
    return <div className="loading">Loading 2-look algorithms...</div>;
  }

  const handleMouseEnter = (algId: string, event: React.MouseEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const rect = img.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Check if there's enough space on the right (tooltip width ~300px + margin)
    const spaceOnRight = viewportWidth - rect.right;
    setTooltipLeft(spaceOnRight < 350);
    setHoveredAlg(algId);
  };

  const renderAlgorithmSection = (title: string, algs: CfopAlgorithm[]) => (
    <section className="algorithm-section">
      <h2>{title}</h2>
      <div className="algorithm-grid">
        {algs.map(alg => (
          <div key={alg.id} className="algorithm-card">
            <div className="image-container">
              <img 
                src={alg.image} 
                alt={alg.name}
                onMouseEnter={(e) => handleMouseEnter(alg.id, e)}
                onMouseLeave={() => setHoveredAlg(null)}
                onClick={(e) => {
                  if (hoveredAlg === alg.id) {
                    setHoveredAlg(null);
                  } else {
                    handleMouseEnter(alg.id, e);
                  }
                }}
              />
              {hoveredAlg === alg.id && alg.notes && (
                <div className={`tooltip ${tooltipLeft ? 'tooltip-left' : ''}`}>
                  <Markdown>{alg.notes}</Markdown>
                </div>
              )}
            </div>
            <h3>{alg.name}</h3>
            <p className="notation">{alg.notation}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="app">
      <header>
        <h1>Cubing - Learning CFOP 2LK Methodology</h1>
        <p>Essential OLL and PLL algorithms for solving the last layer for a 3x3x3 Rubik's cube.</p>
      </header>

      <main>
        {renderAlgorithmSection("Essential cases to learn first", essentials)}
        {renderAlgorithmSection("OLL edge cases", ollEdges)}
        {renderAlgorithmSection("OLL corner cases", ollCorners)}
        {renderAlgorithmSection("PLL corner cases", pllCorners)}
        {renderAlgorithmSection("PLL edge cases", pllEdges)}
      </main>
    </div>
  );
}

export default App;
