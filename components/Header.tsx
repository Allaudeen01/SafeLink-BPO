import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-600 fill-cyan-50 group-hover:text-cyan-500 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse ring-2 ring-white"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              SafeLink <span className="text-cyan-600">BPO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Talk to Expert
            </a>
            <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-base font-medium text-slate-600 hover:text-cyan-600 block px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Button fullWidth onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
              }}>
                Book a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;