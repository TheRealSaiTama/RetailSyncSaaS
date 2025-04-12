import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 dark:bg-background/90 backdrop-blur-md z-50 border-b border-border dark:border-border transition-colors duration-300">
      <div className="container-custom flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="RetailSync Logo"
            className="h-16 w-auto mr-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          />
          <span className="text-xl font-heading font-bold">RetailSync</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              <span>Solutions</span>
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'solutions' && (
              <div className="absolute left-0 mt-2 w-64 bg-background dark:bg-background rounded-lg shadow-lg p-4 border border-border dark:border-border transition-colors">
                <Link to="/solutions/retail-director" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  For Retail Operations Directors
                </Link>
                <Link to="/solutions/store-manager" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  For Store Managers
                </Link>
                <Link to="/solutions/supply-chain" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  For Supply Chain Managers
                </Link>
                <Link to="/solutions/financial" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  For Financial Officers
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown('features')}
              className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              <span>Features</span>
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'features' && (
              <div className="absolute left-0 mt-2 w-64 bg-background dark:bg-background rounded-lg shadow-lg p-4 border border-border dark:border-border transition-colors">
                <Link to="/features/multi-agent" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  Multi-Agent Architecture
                </Link>
                <Link to="/features/demand-forecasting" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  Advanced Demand Forecasting
                </Link>
                <Link to="/features/inventory" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  Inventory Optimization
                </Link>
                <Link to="/features/pricing" className="block px-4 py-2 rounded hover:bg-muted transition-colors">
                  Dynamic Pricing
                </Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          
          <Link to="/about" className="font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/demo" className="btn-primary">
            Request Demo
          </Link>
          <DarkModeToggle />
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-background border-t border-border dark:border-border transition-colors">
          <div className="container-custom py-4 space-y-4">
            <button
              onClick={() => toggleDropdown('solutions-mobile')}
              className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
            >
              <span className="font-medium">Solutions</span>
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'solutions-mobile' && (
              <div className="pl-4 space-y-2">
                <Link to="/solutions/retail-director" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  For Retail Operations Directors
                </Link>
                <Link to="/solutions/store-manager" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  For Store Managers
                </Link>
                <Link to="/solutions/supply-chain" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  For Supply Chain Managers
                </Link>
                <Link to="/solutions/financial" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  For Financial Officers
                </Link>
              </div>
            )}

            <button
              onClick={() => toggleDropdown('features-mobile')}
              className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
            >
              <span className="font-medium">Features</span>
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'features-mobile' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'features-mobile' && (
              <div className="pl-4 space-y-2">
                <Link to="/features/multi-agent" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Multi-Agent Architecture
                </Link>
                <Link to="/features/demand-forecasting" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Advanced Demand Forecasting
                </Link>
                <Link to="/features/inventory" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Inventory Optimization
                </Link>
                <Link to="/features/pricing" className="block py-2 text-foreground hover:bg-muted rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Dynamic Pricing
                </Link>
              </div>
            )}

            <Link to="/pricing" className="block py-2 font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            
            <Link to="/about" className="block py-2 font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            <Link to="/demo" className="btn-primary block text-center mt-4" onClick={() => setIsMenuOpen(false)}>
              Request Demo
            </Link>
            <div className="flex justify-center mt-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
