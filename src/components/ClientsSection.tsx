import React from 'react';
import LogoScroller from './LogoScroller';

const ClientsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            RetailSync powers inventory optimization for the world's most recognizable retail brands
          </p>
        </div>
        
        <LogoScroller speed={25} height={130} />
      </div>
    </section>
  );
};

export default ClientsSection; 