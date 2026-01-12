import React from 'react';

import archicadLogo from '../assets/images/logos/archicad.svg';
import autocadLogo from '../assets/images/logos/autocad.svg';
import bluebeamLogo from '../assets/images/logos/bluebeam.svg';
import dynamoLogo from '../assets/images/logos/dynamo.svg';
import luLogo from '../assets/images/logos/lu.svg';
import oracleLogo from '../assets/images/logos/oracle.svg';
import procoreLogo from '../assets/images/logos/procore.svg';
import ravitLogo from '../assets/images/logos/ravit.svg';
import revitLogo from '../assets/images/logos/revit.svg';
import sketchupLogo from '../assets/images/logos/sketchup.svg';
import vectorworksLogo from '../assets/images/logos/vectorworks.svg';

const logos = [
  { src: archicadLogo, name: 'ARCHICAD' },
  { src: autocadLogo, name: 'AUTOCAD' },
  { src: bluebeamLogo, name: 'BLUEBEAM' },
  { src: dynamoLogo, name: 'DYNAMO' },
  { src: luLogo, name: 'LUMION' },
  { src: oracleLogo, name: 'ORACLE' },
  { src: procoreLogo, name: 'PROCORE' },
  { src: ravitLogo, name: 'REVIT' },
  { src: revitLogo, name: 'REVIT' },
  { src: sketchupLogo, name: 'SKETCHUP' },
  { src: vectorworksLogo, name: 'VECTORWORKS' },
];

const LogoMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-[#C95B4A] py-12">
      <div id="uc_logo_marquee_elementor_3ab5e14" className="ucaddon_logo_marquee elementor-element elementor-element-3ab5e14 elementor-widget elementor-widget-ucaddon_logo_marquee">
        <div className="elementor-widget-container">
          <div className="uc-logo-wrapper">
            <div className="uc-logo-item-holder">
              <div className="uc-logo-items logo-scroll">
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} className="uc-logo-item">
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className="w-auto h-8 md:h-10 lg:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
