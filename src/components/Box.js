import React, { useState } from 'react';
import DonutChart from './DonutChart';
import ItemTable from './ItemTable';

function Box() {
  const [activeTab, setActiveTab] = useState('TSP Holdings');
  const [theme, setTheme] = useState('blue'); // Track selected theme

  // Define theme color palettes
  const themes = {
    blue: ['#0671AD', '#75787B', '#ADC5E3', '#344767', '#262627', '#21B8FD'],
    red: ['#D72638', '#F46036', '#C3423F', '#9E2B25', '#87201A', '#B54232'],
    yellow: ['#FFD700', '#FFC107', '#E1AD01', '#B8860B', '#FFEC8B', '#F4D03F'],
    purple: ['#7B1FA2', '#8E24AA', '#AB47BC', '#CE93D8', '#E1BEE7', '#4A148C' ],
    };

  // Data with colors dynamically assigned based on the theme
  const data = {
    'TSP Holdings': {
      items: [
        { name: 'C Fund', value: 50150, color: themes[theme][0] },
        { name: 'G Fund', value: 64198, color: themes[theme][1] },
        { name: 'I Fund', value: 15640, color: themes[theme][2] },
        { name: 'Y Fund', value: 22739, color: themes[theme][3] },
        { name: 'S Fund', value: 22739, color: themes[theme][4] },
        { name: 'F Fund', value: 22739, color: themes[theme][5] },
      ],
    },
    'Look Through Holdings': {
      items: [
        { name: 'C Fund', value: 70000, color: themes[theme][0] },
        { name: 'G Fund', value: 85000, color: themes[theme][1] },
        { name: 'I Fund', value: 54000, color: themes[theme][2] },
      ],
    },
  };

  return (
    <div className="box">
      {/* Theme Selector */}
      <div className="theme-selector" style={{ marginBottom: '15px' }}>
        <span style={{ marginRight: '10px' }}>Select Theme:</span>
        {Object.keys(themes).map((themeName) => (
          <button
            key={themeName}
            onClick={() => setTheme(themeName)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              borderRadius: '5px',
              border: theme === themeName ? '2px solid #000' : '1px solid #ccc',
              backgroundColor: themes[themeName][0], 
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'TSP Holdings' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('TSP Holdings')}
        >
          TSP Holdings
        </button>
        <button
          className={activeTab === 'Look Through Holdings' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Look Through Holdings')}
        >
          Look Through Holdings
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <DonutChart items={data[activeTab].items} />
        <ItemTable items={data[activeTab].items} />
      </div>
    </div>
  );
}

export default Box;
