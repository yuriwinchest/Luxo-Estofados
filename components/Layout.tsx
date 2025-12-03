import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, cartCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Cart Drawer */}
      <CartDrawer />

      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 px-4 sm:px-6 lg:px-10 py-3 sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <div className="flex items-center gap-4 text-black dark:text-white">
          <Link to="/" className="flex items-center gap-4">
            <div className="size-5 text-primary-bright">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">LUXO ESTOFADOS</h2>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
            <Link to="/sofas" className={`text-sm font-medium leading-normal transition-colors hover:text-primary-bright ${isActive('/sofas') ? 'text-primary-bright' : 'text-black dark:text-white'}`}>Sofás</Link>
            <Link to="/poltronas" className={`text-sm font-medium leading-normal transition-colors hover:text-primary-bright ${isActive('/poltronas') ? 'text-primary-bright' : 'text-black dark:text-white'}`}>Poltronas</Link>
            <Link to="/colecoes" className={`text-sm font-medium leading-normal transition-colors hover:text-primary-bright ${isActive('/colecoes') ? 'text-primary-bright' : 'text-black dark:text-white'}`}>Coleções</Link>
            <Link to="/product/elegance" className={`text-sm font-medium leading-normal transition-colors hover:text-primary-bright ${isActive('/product/elegance') ? 'text-primary-bright' : 'text-black dark:text-white'}`}>Atendimento</Link>
          </nav>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded h-10 w-10 bg-black/5 dark:bg-[#393728] text-black dark:text-white hover:bg-primary-bright/20 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="flex items-center justify-center rounded h-10 w-10 bg-black/5 dark:bg-[#393728] text-black dark:text-white hover:bg-primary-bright/20 transition-colors">
              <span className="material-symbols-outlined">favorite_border</span>
            </button>
            <button 
              onClick={toggleCart}
              className="relative flex items-center justify-center rounded h-10 w-10 bg-black/5 dark:bg-[#393728] text-black dark:text-white hover:bg-primary-bright/20 transition-colors"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-bright text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white dark:border-[#221f10]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleCart}
              className="relative flex items-center justify-center h-10 w-10 text-black dark:text-white"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-bright text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white dark:border-[#221f10]">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="flex items-center justify-center h-10 w-10 text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-background-light dark:bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 shadow-inner">
            <Link to="/sofas" onClick={() => setIsMobileMenuOpen(false)} className="text-black dark:text-white font-medium hover:text-primary-bright transition-colors">Sofás</Link>
            <Link to="/poltronas" onClick={() => setIsMobileMenuOpen(false)} className="text-black dark:text-white font-medium hover:text-primary-bright transition-colors">Poltronas</Link>
            <Link to="/colecoes" onClick={() => setIsMobileMenuOpen(false)} className="text-black dark:text-white font-medium hover:text-primary-bright transition-colors">Coleções</Link>
            <Link to="/product/elegance" onClick={() => setIsMobileMenuOpen(false)} className="text-black dark:text-white font-medium hover:text-primary-bright transition-colors">Atendimento</Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-solid border-black/10 dark:border-white/10 mt-10 py-10 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-4 text-black dark:text-white mb-4">
               <div className="size-4 text-primary-bright">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
            </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LUXO ESTOFADOS</h2>
            </div>
            <p className="text-xs text-black/60 dark:text-white/60">© 2024 Luxo Estofados. Todos os direitos reservados.</p>
          </div>
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4 text-sm">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sofas" className="text-black/70 dark:text-white/70 hover:text-primary-bright">Sofás</Link></li>
              <li><Link to="/poltronas" className="text-black/70 dark:text-white/70 hover:text-primary-bright">Poltronas</Link></li>
              <li><Link to="/colecoes" className="text-black/70 dark:text-white/70 hover:text-primary-bright">Coleções</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4 text-sm">Atendimento</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-black/70 dark:text-white/70 hover:text-primary-bright">Personalizado</a></li>
              <li><a href="#" className="text-black/70 dark:text-white/70 hover:text-primary-bright">Contato</a></li>
              <li><a href="#" className="text-black/70 dark:text-white/70 hover:text-primary-bright">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4 text-sm">Siga-nos</h3>
            <div className="flex space-x-4 text-black/70 dark:text-white/70">
                <a href="#" className="hover:text-primary-bright"><span className="material-symbols-outlined">public</span></a>
                <a href="#" className="hover:text-primary-bright"><span className="material-symbols-outlined">alternate_email</span></a>
                <a href="#" className="hover:text-primary-bright"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};