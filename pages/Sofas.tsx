import React from 'react';
import { Link } from 'react-router-dom';

const sofas = [
  { id: 'firenze', name: "Sofá Firenze", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh3pz9E9aX-klQqVHmUkGe2GUR-lSH4plqlhsxv9cuTVh8hsj8OLfzss5-FGj8VGsLuHW34Gmgoh6gAKHBxIdFo77GBsqkdHyV7LHPkBOekCvhoKV_qwqDg9lIsQGqIJy8rGeZ1N5WdclmfclSGExeXLhvqgkosOajLNWFsz9NCiNA2AybMnXryG8gGDkYRBXG3pQNFWCeaEHnWDOd_rW_dK-jLXDdQbcKWSkBhLFnJpaRXJZQ_Qe4v3d2eoJb_iAeeoiKDlmS7HzJ" },
  { id: 'monaco', name: "Sofá Monaco", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAh_q3L4VzqWTLDM382UkjTX2pePZD20omqVTG05kMTwrh57-1FbsO2PCYqaNUcFiKuUrsrjo8amG8e2kxZPl41FVNaaAoFZCfDt9VrqDm-1DLQCwagQW5XYt3I5aVD5LsVgonDvPUW6LYHMAXogUn6sf_Pv0PkPBt0QTl7yc_04sTKARthRnD6v5EUa7to4WhpYLUpXJdkOLkHfkit7P0bxqVYPz5A87yfscAjSavCOWq1HK0EVq-8H7-uxGvay_85PU59Yukjoti" },
  { id: 'verona', name: "Sofá Verona", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIwicGJUhsCclOkeYfD3YgvbL1gikm-0JYg4MSwUdUoNPTOL9WouJnNX2PCpREwNGQBv1OGL7MMMYTPDczGivnQTSXwVK81cUWsgLO8JiF5mfSVlnON45WZ99RBhrCCYfDbrK1xynEYiqBqnWkyfKf5UMDwbSlSktNe7QBGhv3lC0BeIXbCjCYc1eE8aAR3Fa4rOsJMOxQZO419Ww_JS8qiT68hiLVfMQha9AgSIygoJEWjXZ-I9E4S_uMA1Twflk0B5DyoFf2Skan" },
  { id: 'capri', name: "Sofá Capri", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCWbrwDP9upAX_HGJmGCI4uvstv44mXmeJWEu5cmMMYSVraKDKDrJwghkGr3Ibz2r4k_9J8SAHYOO1wn7qjNK5YJyl9gERKqcTqf3QE7jDnRJnuBPWaw9fztgce08ScYRElksU1SMfRnKDwog_qDtqYJSBsmlfrsuYaThXt6ck0ao3ZNvxZe1o_Yc64eiiLiVSZOxnDawtQ_5M437xBKSlL6_uEkN9Abg3StFBB6ZC70V9q0Tm77F9MED_hgcvwVDCHSyJLBydAQBA" },
  { id: 'siena', name: "Sofá Siena", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6qENNhiaQr-Vvz9ZtsMzQOqp4AXdC12VLnfOQkIyIrwpgOzZb8Hz0Trdbzn1jZ7d03XLhXvKYINzE7WFKnIRPow50mwS-jv0L_tvgb6aerF1WTRPXFxRu54rvB5iqINbQtcv2EfCOyacQpdb1duKzqRo1hDb_gOXMWHbedqSMBSthOfXGtuhfK9kCQknrAgPULXbQdQ02XQAKVYZ86Tk9ustcb6tS3naQU2hUKFTzJe_dhP_vykYdZ7UPtKYEE6zNUWdoh76JxoTL" },
  { id: 'bellagio', name: "Sofá Bellagio", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVkVqdQL1kie4-F7auwXGGzgQ0zCGxd5Nx2-gHnp5YC9nv22179eex_pH-GMt-BzfGG3aPEt5ZcfaqhSUmWrUG0cZbJGTBArxr_6lAjoNofMpnFl_-08v-RaS9CUj17KzqPtnsfYCUCzgv-32xjBe-LrJXbC2jICrx7X9AGAFm-sYAm0IfZm9akjsDNQyB2l0EmYG8LOY3XC7fnJVV7aGTEzdQb5U4HLodxnD1fEDjIoyyfovL0U5GQYnrOJ_9rnU5nyYcPOXnO_v-" },
  { id: 'elegance', name: "Sofá Modular Elegance", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkULFtQEYOioNdps1-5zcfHiN3SKhP2I6Cr2q8hukqR25bCIeL9j2BHhNokzYzi-rPqcOfWlHRxhXKSudGOnWNtHWi5RKy_8Rgww2PD1RgSQNHVpPUqe0kiZVSf2h9fiSdgTy6WeouuhMxspnYU7O0cPMExcqhcqx0HnGV9O9Vbcd8yIA-4zoumKmgnoCqpLhh9DQ3T4lIiQs97sErlM_7T9RegVEmgxImD0QRX2Pf6Oz7eDlbBY3x5HZ-lYpSxVgGYPx5fJl0k6x1" },
  { id: 'portofino', name: "Sofá Portofino", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcvBr9thU4pAULdQMC8mVoVvAfhTWSwYpQseHEEimMANLat_feMlYHvNT6SNOkxVLq5YcsDCWWkpmW6etei8U3D8TNisuPmgtNAjHZJ9vJiWzj-ERU61-5vLkotnawkemShTpSg_ydBpJzmGz6J4_K_-62pNCKt6iEwYZBZacpZTSbG1y-oWAAtA8p7cZK1S-ZVXWCcDOAFkAqb1SzM2ZFD4xRhuUTyZbIghacoARxGbvgeQ3Dk8Z8vvqg8DwI3t9sJiZekINy0wX3" },
  { id: 'ravello', name: "Sofá Ravello", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvVibTUUoRXEWWtElwgdetZTSuOauazcQSpqoItF2uYy-KNHVn6SeS7ioHaqh4wscfv9H8Kdy5LIzcHHquh9GD8pnboAfu33SNTOtW1FS3lG11z6c2hoy-ZukLvJhnbrf5VfW7KBbpg8jR1ipYOR2akJbxJU69IDZfSYr1ttl5FFz9DKC-5Fex_lmBMRrMugiywIrHam8K7wym3-sLH2-ODIAsqe3t7gh66m92pIC7v54TiBg0srpURuD9v91lQooTmS-pi7uVF6Mb" },
];

export const Sofas: React.FC = () => {
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
            <Link to={sofa.id === 'elegance' ? `/product/${sofa.id}` : '#'} key={sofa.id} className="group flex flex-col gap-3 cursor-pointer">
               <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl overflow-hidden relative" style={{ backgroundImage: `url("${sofa.image}")` }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                     <span className="material-symbols-outlined text-lg">favorite_border</span>
                  </button>
               </div>
               <div>
                  <p className="text-black dark:text-white text-lg font-bold group-hover:text-primary-bright transition-colors">{sofa.name}</p>
                  <p className="text-black/60 dark:text-[#bab59c] text-sm font-normal">Sob Consulta</p>
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
