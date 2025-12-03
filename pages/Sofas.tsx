import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';

export const Sofas: React.FC = () => {
  const sofas = products.filter(p => p.category === 'sofa');

  return (
    <div className="px-4 sm:px-8 lg:px-10 py-8 flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-[1400px] mx-auto">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
        <div className="sticky top-28 space-y-8">
          <div>
             <div className="flex flex-wrap gap-2 mb-6">
                <Link to="/" className="text-gray-500 dark:text-[#bab59c] text-sm font-medium hover:text-primary-bright">Home</Link>
                <span className="text-gray-400 dark:text-[#bab59c] text-sm">/</span>
                <span className="text-black dark:text-white text-sm font-medium">Sofás</span>
             </div>
             <h1 className="text-black dark:text-white text-4xl font-black leading-tight mb-6">Sofás</h1>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-lg font-bold text-black dark:text-white">Filtrar por</h3>
             <div className="flex flex-col gap-3">
               {['Estilo', 'Número de Lugares', 'Tecido', 'Cor', 'Disponibilidade'].map(filter => (
                 <button key={filter} className="flex w-full items-center justify-between rounded-lg bg-black/5 dark:bg-[#393728] px-4 py-2.5 text-left hover:bg-black/10 transition-colors">
                   <p className="text-black dark:text-white text-sm font-medium">{filter}</p>
                   <span className="material-symbols-outlined text-black/60 dark:text-white text-xl">expand_more</span>
                 </button>
               ))}
             </div>
          </div>
          
          <div className="flex flex-col gap-2 pt-4">
             <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-11 bg-primary-bright text-black text-sm font-bold hover:bg-white transition-colors">Aplicar Filtros</button>
             <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-11 bg-transparent text-black/60 dark:text-white/60 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors">Limpar Filtros</button>
          </div>
        </div>
      </aside>

      {/* Grid */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
           <p className="text-sm text-gray-500 dark:text-gray-400">Exibindo {sofas.length} resultados</p>
           <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-black/5 dark:bg-[#393728] px-4 text-black dark:text-white text-sm font-medium">
             Ordenar por: Relevância
             <span className="material-symbols-outlined text-xl">expand_more</span>
           </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {sofas.map((sofa) => (
            <Link to={`/product/${sofa.id}`} key={sofa.id} className="group flex flex-col gap-3 cursor-pointer">
               <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
                  <img 
                    src={sofa.image} 
                    alt={sofa.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                     <span className="material-symbols-outlined text-lg">favorite_border</span>
                  </button>
               </div>
               <div>
                  <p className="text-black dark:text-white text-lg font-bold group-hover:text-primary-bright transition-colors">{sofa.name}</p>
                  <p className="text-black/60 dark:text-[#bab59c] text-sm font-normal">{sofa.price}</p>
               </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center mt-12 gap-2">
            <button className="flex items-center justify-center size-9 rounded-lg bg-black/5 dark:bg-[#393728] text-black/40 dark:text-white/40 cursor-not-allowed"><span className="material-symbols-outlined text-xl">chevron_left</span></button>
            <button className="flex items-center justify-center size-9 rounded-lg bg-primary-bright text-black font-bold text-sm">1</button>
            <button className="flex items-center justify-center size-9 rounded-lg hover:bg-black/5 dark:hover:bg-[#393728] text-black dark:text-white font-bold text-sm transition-colors">2</button>
            <button className="flex items-center justify-center size-9 rounded-lg hover:bg-black/5 dark:hover:bg-[#393728] text-black dark:text-white font-bold text-sm transition-colors">3</button>
            <span className="text-black/40 dark:text-white/40 px-1">...</span>
            <button className="flex items-center justify-center size-9 rounded-lg hover:bg-black/5 dark:hover:bg-[#393728] text-black dark:text-white transition-colors"><span className="material-symbols-outlined text-xl">chevron_right</span></button>
        </nav>
      </div>
    </div>
  );
};