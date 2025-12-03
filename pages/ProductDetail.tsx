import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data';

// Helper component for animated accordion
const AccordionItem = ({ title, isOpen, toggle, children }: { title: string, isOpen: boolean, toggle: () => void, children?: React.ReactNode }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button 
        onClick={toggle}
        className="w-full py-4 flex justify-between items-center font-medium list-none text-left focus:outline-none text-black dark:text-white"
      >
        {title}
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
           <div className="pb-4 text-sm text-gray-600 dark:text-gray-400">
              {children}
           </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  // Find product from data
  const product = products.find(p => p.id === id);

  // State for selected options
  const [selectedFabric, setSelectedFabric] = useState("Linho Cinza");
  const [selectedColor, setSelectedColor] = useState("Cinza Claro");
  const [selectedFinish, setSelectedFinish] = useState("Madeira Clara");

  // Wishlist State
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Accordion State
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  useEffect(() => {
    if (!product) return;
    // Check local storage on mount
    const wishlist = JSON.parse(localStorage.getItem('luxo_wishlist') || '[]');
    setIsWishlisted(wishlist.includes(product.id));
    setActiveImage(0); // Reset image on product change
    window.scrollTo(0, 0); // Scroll to top
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] dark:bg-background-dark text-black dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Link to="/" className="text-primary-bright font-medium hover:underline">Voltar para a loja</Link>
      </div>
    );
  }

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('luxo_wishlist') || '[]');
    let newWishlist;
    
    if (wishlist.includes(product.id)) {
        newWishlist = wishlist.filter((pid: string) => pid !== product.id);
    } else {
        newWishlist = [...wishlist, product.id];
    }
    
    localStorage.setItem('luxo_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
  };

  // Mock extra images if the product only has one, to fill the gallery
  const images = [
    product.image,
    // Add some generic detail shots or reuse the main image with different keys to simulate a gallery
    "https://lh3.googleusercontent.com/aida-public/AB6AXuApRVsxiPTokcjlWuR7lHK2HUNOCb5WrBtzcaMEUvzTCO2DA7_psMETXjILroxlJwv-zzlkfWQIlXHxu7ssFUF4qCMI69508I-vuJH7yrV-Ip09DBcYd5cThHR0DuoKt0g1bfrWZrfFPFixknc7fWze6TlzmvzSjrx70l1TfTPbqwqPNUEy3JJvNX17qSAiLsEfMavBKBIVUqwg6DzXEtysmMjibOY2T5lqxe0dVdoBuPpYFoMAIqlhrvkPOvFFFF-slr6Oj-96Hles",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJP-jzx65kzH7XSxYwRsUd46vRzwDmiUAkrpWeeyXPm0syW5-o0I7ZBurAQ-DdAm6xmB0zeakoq022-a3NqvrmWkA-MvR7cjeCrFbjyAU6NNBdEY9iKsHMpbJnUkScH-gsBtWID3CsSaDV4mMK_EO4GMhw5qQdzySnikyNNZQMSGB-UgdA39EsNE1gmkzPTko3wMyPSRjrQpGZk0dws0uopd42hxXF5Y-kdHHj1wLE3VYLPVBFtOLRRiggdMpWtGVJ9GrQYXnn-IY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6SvArl_yGTZKy8XXvDEhmlDVfrz4ls1rSUO46eMxutCNu40-jYbI38Nx36C1MAvnmOhgLEOaLid3-7zfwrdTjAoVGmW12LI2bxUxuJl22wm_K75bJdlywrwxhtrg4ayq_bKfDtN-CVjaYNxGdQ_dUEw38fmTksiBxF8s0HEppmgWsjE7VtDepvZYCW_GH_sM_Uolo5w8nmLZWRhcxH1AKp26CWXmzjUSZ5Swyrn92QVjd0e83pcVidTZg1Eixw_i_s2x-t-2nfWC"
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        options: {
            tecido: selectedFabric,
            cor: selectedColor,
            acabamento: selectedFinish
        }
    });
  };

  return (
    <div className="bg-[#f8f8f8] dark:bg-background-dark text-[#333] dark:text-[#e0e0e0] font-display">
       <div className="container mx-auto px-4 py-8 lg:py-16 max-w-[1280px]">
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap gap-2 text-sm">
             <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
             <span className="text-gray-400">/</span>
             <Link to={product.category === 'sofa' ? '/sofas' : '/poltronas'} className="text-gray-500 hover:text-primary">
                {product.category === 'sofa' ? 'Sofás' : 'Poltronas'}
             </Link>
             <span className="text-gray-400">/</span>
             <span className="font-medium text-black dark:text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
             {/* Images Carousel */}
             <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200 group">
                   <img 
                     src={images[activeImage]} 
                     alt={product.name} 
                     className="w-full h-full object-cover transition-all duration-300"
                     // @ts-ignore
                     fetchPriority="high"
                   />
                   
                   {/* Navigation Buttons */}
                   <button 
                     onClick={(e) => { e.preventDefault(); prevImage(); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black text-black dark:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm z-10"
                     aria-label="Imagem anterior"
                   >
                     <span className="material-symbols-outlined">chevron_left</span>
                   </button>

                   <button 
                     onClick={(e) => { e.preventDefault(); nextImage(); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black text-black dark:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md backdrop-blur-sm z-10"
                     aria-label="Próxima imagem"
                   >
                     <span className="material-symbols-outlined">chevron_right</span>
                   </button>

                   {/* Indicators */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_, idx) => (
                          <div 
                              key={idx} 
                              className={`h-2 w-2 rounded-full transition-all shadow-sm cursor-pointer ${activeImage === idx ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'}`} 
                              onClick={() => setActiveImage(idx)}
                          />
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                   {images.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`aspect-square w-full cursor-pointer overflow-hidden rounded-md border-2 ${activeImage === idx ? 'border-primary' : 'border-transparent'} hover:border-primary/50 transition-colors`}
                      >
                         <img 
                            src={img} 
                            alt={`Thumbnail ${idx + 1}`} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                         />
                      </div>
                   ))}
                </div>
             </div>

             {/* Info */}
             <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold mb-6">{product.price}</p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                   {product.description}
                </p>

                {/* Configurator */}
                <div className="space-y-6 mb-10">
                   <div>
                      <label className="text-sm font-semibold uppercase tracking-wider block mb-2">Tecido / Revestimento</label>
                      <div className="flex flex-wrap gap-2">
                         {['Linho Cinza', 'Veludo Azul', 'Couro Caramelo'].map(opt => (
                            <button 
                                key={opt}
                                onClick={() => setSelectedFabric(opt)}
                                className={`rounded px-4 py-2 text-sm border transition-colors ${selectedFabric === opt ? 'border-primary bg-primary/10 font-medium' : 'border-gray-300 dark:border-gray-700 hover:border-primary'}`}
                            >
                                {opt}
                            </button>
                         ))}
                      </div>
                   </div>
                   
                   <div>
                      <label className="text-sm font-semibold uppercase tracking-wider block mb-2">Cor</label>
                      <div className="flex items-center gap-3">
                         <button 
                            onClick={() => setSelectedColor("Cinza Claro")}
                            className={`h-8 w-8 rounded-full bg-gray-200 ring-2 ring-offset-2 ring-offset-[#f8f8f8] dark:ring-offset-background-dark ${selectedColor === "Cinza Claro" ? 'ring-primary' : 'ring-transparent border border-gray-300'}`}
                         ></button>
                         <button 
                            onClick={() => setSelectedColor("Azul Marinho")}
                            className={`h-8 w-8 rounded-full bg-[#1e3a8a] ring-2 ring-offset-2 ring-offset-[#f8f8f8] dark:ring-offset-background-dark ${selectedColor === "Azul Marinho" ? 'ring-primary' : 'ring-transparent border border-gray-300'}`}
                         ></button>
                         <button 
                             onClick={() => setSelectedColor("Caramelo")}
                            className={`h-8 w-8 rounded-full bg-[#92400e] ring-2 ring-offset-2 ring-offset-[#f8f8f8] dark:ring-offset-background-dark ${selectedColor === "Caramelo" ? 'ring-primary' : 'ring-transparent border border-gray-300'}`}
                         ></button>
                         <button 
                             onClick={() => setSelectedColor("Verde Floresta")}
                            className={`h-8 w-8 rounded-full bg-[#14532d] ring-2 ring-offset-2 ring-offset-[#f8f8f8] dark:ring-offset-background-dark ${selectedColor === "Verde Floresta" ? 'ring-primary' : 'ring-transparent border border-gray-300'}`}
                         ></button>
                      </div>
                   </div>

                   <div>
                      <label className="text-sm font-semibold uppercase tracking-wider block mb-2">Acabamento (Pés)</label>
                      <select 
                        value={selectedFinish}
                        onChange={(e) => setSelectedFinish(e.target.value)}
                        className="w-full rounded bg-white dark:bg-[#242424] border border-gray-300 dark:border-gray-700 py-2 px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      >
                         <option>Madeira Clara</option>
                         <option>Metal Dourado</option>
                         <option>Madeira Escura</option>
                      </select>
                   </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button 
                        onClick={handleAddToCart}
                        className="w-full bg-primary text-black font-bold text-lg py-4 rounded hover:bg-primary/90 transition-colors shadow-lg active:transform active:scale-[0.99]"
                    >
                        Adicionar ao Carrinho
                    </button>
                    
                    <button 
                        onClick={toggleWishlist}
                        className="w-full bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium text-lg py-3 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                    >
                         <span 
                            className={`material-symbols-outlined ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
                            style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                         >
                            favorite
                         </span>
                        {isWishlisted ? 'Remover da Lista' : 'Adicionar à Lista'}
                    </button>
                </div>

                {/* Animated Accordions */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800">
                   <AccordionItem 
                     title="Detalhes do Produto" 
                     isOpen={isDetailsOpen} 
                     toggle={() => setIsDetailsOpen(!isDetailsOpen)}
                   >
                     <ul className="list-disc space-y-1 pl-4">
                        <li>Estrutura em madeira maciça de reflorestamento.</li>
                        <li>Assento com espuma D-33 e molas ensacadas.</li>
                        <li>Acabamento artesanal com costura reforçada.</li>
                        <li>Garantia de 5 anos na estrutura.</li>
                     </ul>
                   </AccordionItem>
                   
                   <AccordionItem 
                     title="Entrega e Prazos" 
                     isOpen={isDeliveryOpen} 
                     toggle={() => setIsDeliveryOpen(!isDeliveryOpen)}
                   >
                      <p>Prazo de produção de 30 a 45 dias úteis. Entrega realizada por transportadoras especializadas com agendamento prévio.</p>
                   </AccordionItem>
                </div>
             </div>
          </div>

          {/* Inspiration Gallery */}
          <div className="mt-20">
             <h2 className="text-2xl font-bold mb-8 text-black dark:text-white font-playfair border-l-4 border-primary pl-4">Galeria de Inspiração</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Large Main Image */}
               <div className="h-[400px] md:h-[600px] rounded-lg overflow-hidden relative group">
                  <img 
                    src={images[0]} 
                    alt="Ambiente principal" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
               </div>
               
               {/* Mosaic Grid */}
               <div className="grid grid-rows-2 gap-4 h-[400px] md:h-[600px]">
                  <div className="rounded-lg overflow-hidden relative group">
                       <img 
                        src={images[1]} 
                        alt="Detalhe de textura" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        loading="lazy" 
                      />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                       <div className="rounded-lg overflow-hidden relative group">
                          <img 
                            src={images[2]} 
                            alt="Vista lateral" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            loading="lazy" 
                          />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                       </div>
                       <div className="rounded-lg overflow-hidden relative group">
                          <img 
                            src={images[3]} 
                            alt="Ambiente decorado" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            loading="lazy" 
                          />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                       </div>
                  </div>
               </div>
             </div>
          </div>
       </div>
    </div>
  );
};