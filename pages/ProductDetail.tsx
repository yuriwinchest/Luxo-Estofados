import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  // State for selected options
  const [selectedFabric, setSelectedFabric] = useState("Linho Cinza");
  const [selectedColor, setSelectedColor] = useState("Cinza Claro");
  const [selectedFinish, setSelectedFinish] = useState("Madeira Clara");

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAkULFtQEYOioNdps1-5zcfHiN3SKhP2I6Cr2q8hukqR25bCIeL9j2BHhNokzYzi-rPqcOfWlHRxhXKSudGOnWNtHWi5RKy_8Rgww2PD1RgSQNHVpPUqe0kiZVSf2h9fiSdgTy6WeouuhMxspnYU7O0cPMExcqhcqx0HnGV9O9Vbcd8yIA-4zoumKmgnoCqpLhh9DQ3T4lIiQs97sErlM_7T9RegVEmgxImD0QRX2Pf6Oz7eDlbBY3x5HZ-lYpSxVgGYPx5fJl0k6x1",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuApRVsxiPTokcjlWuR7lHK2HUNOCb5WrBtzcaMEUvzTCO2DA7_psMETXjILroxlJwv-zzlkfWQIlXHxu7ssFUF4qCMI69508I-vuJH7yrV-Ip09DBcYd5cThHR0DuoKt0g1bfrWZrfFPFixknc7fWze6TlzmvzSjrx70l1TfTPbqwqPNUEy3JJvNX17qSAiLsEfMavBKBIVUqwg6DzXEtysmMjibOY2T5lqxe0dVdoBuPpYFoMAIqlhrvkPOvFFFF-slr6Oj-96Hles",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJP-jzx65kzH7XSxYwRsUd46vRzwDmiUAkrpWeeyXPm0syW5-o0I7ZBurAQ-DdAm6xmB0zeakoq022-a3NqvrmWkA-MvR7cjeCrFbjyAU6NNBdEY9iKsHMpbJnUkScH-gsBtWID3CsSaDV4mMK_EO4GMhw5qQdzySnikyNNZQMSGB-UgdA39EsNE1gmkzPTko3wMyPSRjrQpGZk0dws0uopd42hxXF5Y-kdHHj1wLE3VYLPVBFtOLRRiggdMpWtGVJ9GrQYXnn-IY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6SvArl_yGTZKy8XXvDEhmlDVfrz4ls1rSUO46eMxutCNu40-jYbI38Nx36C1MAvnmOhgLEOaLid3-7zfwrdTjAoVGmW12LI2bxUxuJl22wm_K75bJdlywrwxhtrg4ayq_bKfDtN-CVjaYNxGdQ_dUEw38fmTksiBxF8s0HEppmgWsjE7VtDepvZYCW_GH_sM_Uolo5w8nmLZWRhcxH1AKp26CWXmzjUSZ5Swyrn92QVjd0e83pcVidTZg1Eixw_i_s2x-t-2nfWC"
  ];

  const handleAddToCart = () => {
    addToCart({
        productId: 'elegance-modular',
        name: 'Sofá Modular Elegance',
        price: 'Sob Consulta',
        image: images[0],
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
             <Link to="/sofas" className="text-gray-500 hover:text-primary">Sofás</Link>
             <span className="text-gray-400">/</span>
             <span className="font-medium text-black dark:text-white">Sofá Modular Elegance</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
             {/* Images */}
             <div className="flex flex-col gap-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200">
                   <img src={images[activeImage]} alt="Sofá Modular Elegance" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                   {images.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`aspect-square w-full cursor-pointer overflow-hidden rounded-md border-2 ${activeImage === idx ? 'border-primary' : 'border-transparent'} hover:border-primary/50 transition-colors`}
                      >
                         <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                      </div>
                   ))}
                </div>
             </div>

             {/* Info */}
             <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-2">Sofá Modular Elegance</h1>
                <p className="text-2xl font-semibold mb-6">Sob Consulta</p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                   O Sofá Modular Elegance é a personificação do luxo contemporâneo. Com linhas limpas, design versátil e conforto incomparável, ele se adapta perfeitamente ao seu espaço. Cada módulo é feito à mão com materiais nobres.
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

                <button 
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-black font-bold text-lg py-4 rounded hover:bg-primary/90 transition-colors shadow-lg active:transform active:scale-[0.99]"
                >
                    Solicitar Orçamento
                </button>

                {/* Accordions */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800">
                   <details className="group py-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer" open>
                      <summary className="flex justify-between items-center font-medium list-none">
                         Detalhes do Produto
                         <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 pl-4">
                         <ul className="list-disc space-y-1">
                            <li>Estrutura em madeira maciça de reflorestamento.</li>
                            <li>Assento com espuma D-33 e molas ensacadas.</li>
                            <li>Dimensões (Módulo Canto): 110cm x 110cm x 75cm.</li>
                            <li>Limpeza profissional recomendada.</li>
                         </ul>
                      </div>
                   </details>
                   <details className="group py-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer">
                      <summary className="flex justify-between items-center font-medium list-none">
                         Entrega e Prazos
                         <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="pt-4 text-sm text-gray-600 dark:text-gray-400">
                         Prazo de produção de 45 dias úteis. Entrega realizada por transportadoras especializadas.
                      </div>
                   </details>
                </div>
             </div>
          </div>

          {/* Related */}
          <div className="mt-24">
             <h2 className="text-3xl font-bold text-center mb-10">Produtos Relacionados</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    {name: "Poltrona Serena", mat: "Linho", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyvED_NGo3CJwP_WnTn5M_2qOOY4ZnQcHTz48DZ2pWH3JB6UGuBPMJYA623pqK7mEq_UqS3xuBnjOh-cGDaIgc40ouMb2eenR6hDbZ_4572sp2KKVx4xO8OV_SdRlumu-4_NjloXNP67pJmLiWiDlkjidnWKxb73HkuURqOOAgtWNTEzk6qkSFo2K_e_LeL1FqfIJWT4EoaKP4oBQWDZCuwRSUTQ10mF6G_hKYX4mIXzzfaZthx4IaXuW55U1rPa8EnPyFbePrmT_E"},
                    {name: "Sofá Curvo Aura", mat: "Bouclé", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9c7xc7I6cyFpdWyBheVBWZ3g0Yqz5XQJ_rq1KC7jiBA3yO4A4EP0EOSFSt5v0KcXRpVGaE7mdpbqj-xol_4xWyOL3jeJ1accpn5VvUU-v-PNZNVi3Z3NKVoGcaoAhtuF0v52tmYnXnUb1nvOwYYhOSvboBhzKX3xcL2FysZzr__1aVfWEQDJY0rLdl8Zio6sVT0oOn4wl-5bQXVqtsKiud8aJUMqqfm6oSUpnU8XIlOuDB_g0SPZQTb4C04HczHTuwXocRbjV9zY"},
                    {name: "Poltrona Clássica", mat: "Couro", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0j8yJTaf_yz8tdaAOCt5eG0G6v0ipftQxE85ieOvoYQ_JHWbk7xpmw1l5xo5AXOL8OaJoK9SLKZU3XKPYhqSh5SCVXnjg1qamAhMkM1p4zOgpKCPPbzPz2_FofmLC1rNgzYHaZElbl4e0OpwBbzGcGeO1t7T5KfLtz64sgEXi0l2fAOTI2hF2CdIEO6dpZRAYgjRAdWt4N8zBxyNBHtcFWrg2fQl3yQd3M5hmU5HudZzqLSgGjuZkso3Wid4phiMKfwE1UHDEo3ZO"},
                    {name: "Sofá Imperial", mat: "Veludo", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1nyzOUqLqaFlxXp-D8xtojshAXfswDQq2v4YiSz1HiKB2kyApFs9-_fIhH4DqV8qnwg4PF_z-8sN2Xz9HHytaFFhCOTzJauWRGI8klqs_eSRTVBVkL50V-KlNQj5kdIclHLoiCqZJKB70WZkvAOfnuPXncOWVy_rboc8devwgG2KA1Pcc3qrk3N4FTBzDJHKT8qXjR_YWGs5_eak3attYJjz-z924xEdmuJRlGCPAevN2pByGbQ11jiKLAXJFgbvZMYmLEfO95rV"}
                 ].map((item, i) => (
                    <div key={i} className="group">
                       <div className="aspect-square bg-gray-200 rounded-md overflow-hidden mb-4 relative">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                       </div>
                       <div className="flex justify-between items-start">
                          <div>
                             <h3 className="font-medium text-sm text-black dark:text-white">{item.name}</h3>
                             <p className="text-sm text-gray-500">{item.mat}</p>
                          </div>
                          <span className="text-sm font-semibold text-primary">Sob Consulta</span>
                       </div>
                    </div>
                 ))}
             </div>
          </div>
       </div>
    </div>
  );
};