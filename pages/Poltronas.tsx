import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'vertice', name: "Poltrona Vértice", price: "R$ 4.299,00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYN9eunG02lk-1Xh9GrXC9pG1QstWhNj30ZNQSJTzg1KdueKQPxl46IYuw1A2R1_fcfVByiNOD4jUtuAqkat-Kt4dza-q4kF7Ya09lI-aLvke_KTn61HLemyKw3nQqurDpWL1m__Pw7t_qg8UN4MibBDk-7Y2TOdJpbPGCTWXAv0GWpSOAPJA4pw7UXG6SfwIs7yVXzfMKwogKLnt_t2RgTUhw1sGgAEe1hrpgLSTyEI_ywV3I1z0e5R3TuhNOgvZbVDro95i-TnjH" },
  { id: 'aura', name: "Poltrona Aura", price: "R$ 5.800,00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkFWiNaIAvLxe-LzwXwNGoMcT-K6eSroYvYB5PZrTMuYoUb6DCucox5eT8Ef6RchJV8DX-cGtdUX7ay1asqmTOVBuZm8BRchsx9IMe5ByQFyUoL_rBbEPbKkbwzr5Fr85dF68VMf8P8EJExXKgs6QIr9d7MJsunbzUY_sL5r2oUZa02jANKvJ5uXvyMFGfBSDh6rij4jKUDv23Kj-fTzQjPjETTCCdnbiafOQs7QFIXZO6pLc8CZfvR-K_lFBfegqu-G5gB1pkY4lB" },
  { id: 'serena', name: "Poltrona Serena", price: "Sob Consulta", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2u_tfTL-1HZcVimlZb96axQwp-_ZD7TmUVDzSr2lgcbfi5bPeIAvTbM8FatFiITQnJhwpfnuqzM90qk6IvliJpAq-E1ywy3COEITmEJNydo6ZyAsPwoALgSC7NxJ5aOw8uRrVPa4YAyR-M9LyFLR0rPMjQKdBAAM-8nCeyWUfFU0XJFWm2_a_E0Au15pNpI8_ZSSQZ1APfhF7B6hHsjM2g5dSeGV-Yi-N4pYY-DYclFp2LENnMxCTyStTKo7lmpt-nTtkOhYLZGCf" },
  { id: 'ocaso', name: "Poltrona Ocaso", price: "R$ 3.950,00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADSOw8OOj5M-2fGjeV4Nfw15K7CmBqD0KB941Hip9_ssTPV1xhKqrBD5VNFwWvKNLN8BokixvlFP7vvDWorZ5SVtcCgRK3W6nXGH5b8mjeHFc44GECYgKL76xBxRw2MBv27vb49ZcZZt8mfZeQWlej0Fa0iunECfPqo_QUviUkDKu46RpViRv-4Y8JRPNLGE1WpRwT3sPhNSnM5a1cDn2uENHndmosjJjTxmhn0Vdg-MvTdpeatbWG_ZIsei-Z8tVRuur6OaRyyM3p" },
  { id: 'linha', name: "Poltrona Linha", price: "R$ 6.100,00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_R6d1mPpx2ASn4GHfmAEvk2TjbXM7al2PB44w7szrphyTAXETgtFH08Mv94Xr52tJKQ1a5Oz72Qc0uj0laeWdg5kqNAdPTMtTKft2JcONzskY7Ao8g-qdsUdP41JetINye-Hdry-YjRN_jj3i5oDANipZxf-KlI-jZBVUF0J59kf5Q1GtVOsedz58idTP9Dda4evyFPG9wUr73lIlrJEVfnh2bgCNFVypMc59khuDW0rn668cS8b8KsWPp_z2a2jmgNCJo-8rZT3" },
  { id: 'conforto', name: "Poltrona Conforto", price: "R$ 4.500,00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuzStWBqDjxTT7HkHXnIfVyg2farVZugcJd75EVkLteEmVrZS3pE9YM1rDRVU5aprpjudTCS2PJs7VyGKDSGXlZssEg_MJ5guiC2U1SSjxfl5v9ewN0o9DZuO6iYDlLml0tZOWXZY2ubCIW56N-rMXYC6Zqoigp3GWrbhtzrmzl6ID3vVuIifkYBMPHLtstsF-QXsfXGBgSg2KdrL3QOJ-WjbueHGtsPjIiq0Q5RB93bqgyOZkZJdqyDyBSxUOyoqMbABjtO-E0nWF" },
];

export const Poltronas: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] dark:bg-background-dark min-h-screen">
       <div className="px-4 py-8 lg:px-20 lg:py-12 max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-10">
             <div className="flex gap-2 text-sm mb-4">
                <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-primary">Início</Link>
                <span className="text-gray-400">/</span>
                <span className="text-black dark:text-white font-medium">Poltronas</span>
             </div>
             <h1 className="font-playfair text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">Poltronas</h1>
             <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Design que transforma ambientes. Conheça nossa seleção exclusiva de poltronas feitas sob encomenda.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
             {/* Filters */}
             <div className="hidden lg:block space-y-6">
                <h3 className="font-playfair text-xl font-bold text-black dark:text-white">Filtros</h3>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                   <details className="group" open>
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-black dark:text-white mb-3">
                         Estilo
                         <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="space-y-2 pl-2">
                         {['Clássico', 'Moderno', 'Contemporâneo'].map(opt => (
                            <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-primary">
                               <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                               {opt}
                            </label>
                         ))}
                      </div>
                   </details>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                   <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-black dark:text-white mb-3">
                         Cor
                         <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="flex gap-2 pl-2">
                         {['#f3f4f6', '#4b5563', '#d4af37', '#22c55e', '#3b82f6'].map(color => (
                            <button key={color} className="w-6 h-6 rounded-full border border-gray-200" style={{backgroundColor: color}}></button>
                         ))}
                      </div>
                   </details>
                </div>
                <button className="text-sm text-gray-500 hover:text-black dark:hover:text-white w-full text-center py-2">Limpar Filtros</button>
             </div>

             {/* Products Grid */}
             <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-8">
                   <span className="text-sm text-gray-500">Mostrando {products.length} de 27 resultados</span>
                   <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:ring-primary focus:border-primary">
                      <option>Relevância</option>
                      <option>Preço: Menor</option>
                      <option>Preço: Maior</option>
                   </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                   {products.map(product => (
                      <div key={product.id} className="group cursor-pointer">
                         <div className="relative aspect-square bg-[#f0f0f0] dark:bg-[#1f1f1f] rounded-lg overflow-hidden mb-4">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                                loading="lazy"
                            />
                            <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                               <span className="material-symbols-outlined text-sm">favorite</span>
                            </button>
                         </div>
                         <h3 className="text-lg font-medium text-black dark:text-white font-playfair">{product.name}</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.price}</p>
                      </div>
                   ))}
                </div>
                
                 <div className="flex justify-center mt-16 gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-primary/20 text-primary font-bold">1</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10 text-gray-500">2</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10 text-gray-500">3</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10 text-gray-500"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                 </div>
             </div>
          </div>
       </div>
    </div>
  );
};