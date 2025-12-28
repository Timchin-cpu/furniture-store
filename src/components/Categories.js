import React from 'react';
import { Armchair, Sofa, Box, Warehouse, LampDesk } from 'lucide-react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Стулья', icon: Armchair, color: '#FFD166' },
    { name: 'Диваны', icon: Sofa, color: '#E8E8E8' },
    { name: 'Шкафы', icon: Box, color: '#E8E8E8' },
    { name: 'Гардеробы', icon: Warehouse, color: '#E8E8E8' },
    { name: 'Кресла', icon: LampDesk, color: '#E8E8E8' }
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="category-card"
                style={{ background: category.color }}
              >
                <div className="category-icon">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                <h3 className="category-name">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
