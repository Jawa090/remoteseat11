import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ReadyToOffshoreSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add custom CSS for hero section
    const style = document.createElement('style');
    style.textContent = `
      .hero-section {
        background-color: #3f3f3f;
        min-height: 420px;
        padding: 0 100px;
        position: relative;
        overflow: hidden;
      }
      
      .hero-blueprint {
        position: absolute;
        inset: 0;
        background-image: url('/src/assets/images/blueprint-pattern.png');
        background-size: cover;
        background-position: center;
        opacity: 0.08;
        filter: blur(1px);
        z-index: 1;
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
        min-height: 420px;
      }
      
      .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      
      .hero-heading {
        font-size: 3.5rem;
        font-weight: 700;
        color: white;
        line-height: 1.1;
        margin-bottom: 16px;
      }
      
      .hero-subtext {
        font-size: 1.125rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        max-width: 400px;
      }
      
      .hero-cta {
        margin-top: 24px;
      }
      
      .cta-button {
        background-color: #e25c3d;
        color: white;
        font-weight: 600;
        padding: 14px 28px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        transition: background-color 0.3s ease;
        cursor: pointer;
        border: none;
        font-size: 1rem;
      }
      
      .cta-button:hover {
        background-color: #d44a1f;
      }
      
      .hero-image {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      
      .hero-image-container {
        position: relative;
        max-width: 100%;
        height: 480px;
      }
      
      .hero-image-container img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom right;
      }
      
      @media (max-width: 1024px) {
        .hero-section {
          padding: 0 80px;
          min-height: 420px;
        }
        
        .hero-content {
          gap: 40px;
        }
        
        .hero-heading {
          font-size: 3rem;
        }
        
        .hero-image-container {
          height: 400px;
        }
      }
      
      @media (max-width: 768px) {
        .hero-section {
          padding: 0 40px;
          min-height: auto;
        }
        
        .hero-content {
          grid-template-columns: 1fr;
          gap: 32px;
          text-align: center;
        }
        
        .hero-heading {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }
        
        .hero-subtext {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        
        .hero-image {
          justify-content: center;
          order: 2;
        }
        
        .hero-image-container {
          height: 300px;
          max-width: 280px;
        }
      }
    `;
    document.head.appendChild(style);

    // Simulate image loading
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-blueprint"></div>

      <div className="max-w-7xl mx-auto">
        <div className="hero-content">
          {/* Left Column - Text Content */}
          <div className="hero-text">
            <h1 className="hero-heading">
              Ready to Offshore AEC Roles?
            </h1>
            <p className="hero-subtext">
              Book a free consultation to explore offshore staffing tailored to your budget and deadlines.
            </p>

            <div className="hero-cta">
              <a href="/contact-us/" className="cta-button">
                Get Your Free Consultation
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Person Image */}
          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src="/src/assets/images/ready-to-offshore-person.png"
                alt="Ready to offshore AEC professional"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToOffshoreSection;
