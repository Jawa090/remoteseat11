import { useState, useEffect } from 'react';

const PricingSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  useEffect(() => {
    // Add custom CSS for expanding cards
    const style = document.createElement('style');
    style.textContent = `
      .pricing-section {
        background-color: #171717;
        min-height: 600px;
        padding: 80px 100px;
      }
      
      .pricing-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 2fr;
        gap: 24px;
        height: 350px;
      }
      
      .pricing-card {
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .pricing-card.small {
        width: 240px;
      }
      
      .pricing-card.large {
        width: 500px;
      }
      
      .pricing-card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .pricing-card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        z-index: 1;
      }
      
      .pricing-card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 24px;
        z-index: 2;
        color: white;
      }
      
      .pricing-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 16px;
        transition: all 0.5s ease;
      }
      
      .pricing-card.small .pricing-card-title {
        font-size: 1rem;
      }
      
      .pricing-card-details {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
      }
      
      .pricing-card.active .pricing-card-details {
        opacity: 1;
        transform: translateY(0);
      }
      
      .pricing-card-details div {
        margin-bottom: 8px;
      }
      
      .pricing-card-details .price {
        font-size: 1.25rem;
        font-weight: bold;
        color: #ff6a3d;
      }
      
      @media (max-width: 1200px) {
        .pricing-section {
          padding: 60px 80px;
        }
        
        .pricing-grid {
          grid-template-columns: 1fr 1fr 2fr;
        }
        
        .pricing-card.small {
          width: 200px;
        }
        
        .pricing-card.large {
          width: 400px;
        }
      }
      
      @media (max-width: 768px) {
        .pricing-section {
          padding: 40px 20px;
          min-height: auto;
        }
        
        .pricing-grid {
          grid-template-columns: 1fr;
          height: auto;
          gap: 16px;
        }
        
        .pricing-card {
          width: 100% !important;
          height: 250px;
        }
        
        .pricing-card.active .pricing-card-details {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const cards = [
    {
      id: 'pricing_card_estimators',
      title: 'Experienced <br> Cost Estimators',
      image: '/7.png',
      content: `
        <div>Offshore Hiring</div>
        <div class="price"><span style="font-size: 8pt;">From</span> $13/hour</div>
        <div>Vs.</div>
        <div>Local Hiring</div>
        <div>$40/hour</div>
        <div>Annual Avg. Saving</div>
        <div class="price">~$57,000</div>
      `
    },
    {
      id: 'pricing_card_bim',
      title: 'Experienced <br> BIM Specialists',
      image: '/8.png',
      content: `
        <div>Offshore Hiring</div>
        <div class="price"><span style="font-size: 8pt;">From</span> $13/hour</div>
        <div>Vs.</div>
        <div>Local Hiring</div>
        <div>$55/hour</div>
        <div>Annual Avg. Saving</div>
        <div class="price">~$87,000</div>
      `
    },
    {
      id: 'pricing_card_support',
      title: 'Experienced <br> Project Support',
      image: '/9.png',
      content: `
        <div>Offshore Hiring</div>
        <div class="price"><span style="font-size: 8pt;">From</span> $12/hour</div>
        <div>Vs.</div>
        <div>Local Hiring</div>
        <div>$35/hour</div>
        <div>Annual Avg. Saving</div>
        <div class="price">~$48,000</div>
      `
    },
    {
      id: 'pricing_card_coordinators',
      title: 'Experienced <br> Construction Coordinators',
      image: '/10.png',
      content: `
        <div>Offshore Hiring</div>
        <div class="price"><span style="font-size: 8pt;">From</span> $15/hour</div>
        <div>Vs.</div>
        <div>Local Hiring</div>
        <div>$45/hour</div>
        <div>Annual Avg. Saving</div>
        <div class="price">~$62,000</div>
      `
    }
  ];

  return (
    <section className="pricing-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: 'white' }}>
              Lower Costs. <span style={{ color: '#ff6a3d' }}>Same High Quality</span>
            </h2>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <p className="text-lg max-w-lg lg:ml-auto leading-relaxed" style={{ color: 'white' }}>
              Cut overhead with remote construction experts—trained to US standards, certified in key software, and fluent in English.
            </p>
          </div>
        </div>

        <div className="pricing-grid">
          {cards.map((card, index) => (
            <div
              key={card.id}
              id={card.id}
              className={`pricing-card ${activeCard === index ? 'active large' : 'small'}`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img 
                src={card.image} 
                alt={card.title.replace(/<br>/g, ' ')}
                className="pricing-card-image"
              />
              <div className="pricing-card-overlay"></div>
              <div className="pricing-card-content">
                <div 
                  className="pricing-card-title"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <div 
                  className="pricing-card-details"
                  dangerouslySetInnerHTML={{ __html: card.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
