import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        
        {/* Hero Section */}
        <div className="w-full @container pt-5">
          <div className="@[480px]:p-0">
            <div className="relative flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded items-center justify-center p-4 group overflow-hidden isolate">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDoHBpiZ9WpXUZk__CVyAMBBxaEHOFHbVvFbe37F78_eXOQBXRbNqfSSxIK74NIwB2LXpnugUiYyfbdQZC7fGU6bVFyopfBLSh4q0azVSnAEiYj0Buz8F-FXLeSO0vS4qeVjzR59SMRxH5TEy0_AbVWBvKgl9lUDh_FznsBGLJ94Hn3KgCCG923J_MzAwdYJ8fdMY9PJkfTj9-WMqs5QbrJDQIXK7nHld5pOR_yh-iq0s8Ya4rzK83KxWaa_3wIrpqXuGNDniz6f2z"
                alt="Luxurious living room with a sophisticated sofa"
                className="absolute inset-0 w-full h-full object-cover"
                // @ts-ignore
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
              
              <div className="flex flex-col gap-2 text-center z-20">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl max-w-2xl drop-shadow-lg">
                  Onde o Design Encontra o Conforto
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base max-w-lg mx-auto drop-shadow-md">
                  Peças exclusivas, criadas sob encomenda para refletir seu estilo único. Descubra a arte do estofado de luxo.
                </h2>
              </div>
              <Link to="/colecoes" className="z-20 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary-bright text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white transition-colors">
                <span className="truncate">Explore a Coleção</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Exclusive Collections Preview */}
        <div>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
            Coleções Exclusivas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
            {[
              { title: "Coleção Atemporal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYHvzUbtdShvdTEn2VJfn_V12uu4tNl7Wz3bMg5Lk07YEKtRr6WUaNWRfhv5lVbexWH3j7kfu1JmWgFcsh7caqbZwyVpq5CR_y-D_IwdAfmAaThzK9923P34NF2FjiT8AkfGEqihy7WTXIMuHJSjQlCUQJQWQDDz42R4ueow4AhVFV07mza_FmSC1xCaCJxt85Wzspfja5XNYP4kEBQzJvy6OpwLgJMMWG5cJ-kDqB1APNIAEGkpTZne2JKKhIVEPU2tA-7R5iMUW0" },
              { title: "Coleção Vanguarda", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA21AM9mNUB4nQro2Ee99F3Aw1HKul2x2yqjHV_G_cxkHfH_RdRSudasahtg6qEa6z_BhNm29NZpSRQTCcw1ywJeDyDoUYdg7NIgrH7ZaVCwS96lTF6yyuLmSoULZgLbPxiJGhc03pThmdBdUW9h6TQ3xnhI4pPPqG8b2h19YV-fGjD1AZ3iyrPDyF_GL3F8NYuywHaKkSop3gWY4HqYe_wDlZTbKvzhgOXRJTzbq1pBvGM78T44uBYAbbSh5QIfEI9HJPUQSW_UEG9" },
              { title: "Coleção Serenidade", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOukusgkpP5mE6XMXmtyCmwCT1uv2ImQUd0NoQMDKCQAILEUxnfoRF8XXQkajV7o6wTBWUu6O_fBEiPDxovGLr4VOxnQ5xl628V7JmtJSbSpsvE9svO5v2FCiEidw1VWt9KEQHglABj17YhVbdHHpQsrUFbDgJJ5mM6quwp78oSNbZ57MPBq-dNZ6Vf_igDfup3aJWmArHUUzl7LdKHrPGMTo49QgFQL8O9EhPgCZ5sJqk4OadUpll5J7mLmdcOf93jFQWiAm6570m" }
            ].map((col, idx) => (
              <Link to="/colecoes" key={idx} className="group relative flex flex-col gap-3 rounded justify-end p-4 aspect-[3/4] overflow-hidden isolate">
                <img 
                  src={col.img} 
                  alt={col.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-3 relative z-20">{col.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Custom Orders Section */}
        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-black dark:text-white tracking-light text-[32px] font-bold leading-tight max-w-[720px]">Estofados Sob Encomenda</h1>
              <p className="text-black/70 dark:text-white/70 text-base font-normal leading-normal max-w-[720px]">
                Nosso serviço sob encomenda permite que você crie uma peça que é verdadeiramente sua. Escolha entre os melhores tecidos, couros e acabamentos para dar vida ao seu projeto.
              </p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-primary-bright text-black text-sm font-bold leading-normal tracking-[0.015em] w-fit hover:bg-white transition-colors">
              <span className="truncate">Inicie Seu Projeto</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
              <div className="w-full aspect-video rounded overflow-hidden relative">
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsPsUEiOIsEM2kTcfKg0KD_uG6aAgdtE4vW7ecBrWM-8puipHCEYSJy3JQILmCW7sjJi9YbbotoSN7U1SYycYy8Pi0Q37zhMl3bJXWLxOGWo_1sKbpwC92Jnbt5uinN7sXH7sFOzLLGZ4SnFQ_GRupwPdwrd5zIHLGx5e-8W_f1xj8nRHtndfra6P0gvit6GR2OoJsS6IcjfGtVP_AOUTem9eS0CzCkbGonhGA3fxmVNCt4icdLcQNFY86wxSyG4HZ7fn5BUyABaHm"
                   alt="Materiais Nobres"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div>
                <p className="text-black dark:text-white text-base font-medium leading-normal">Materiais Nobres</p>
                <p className="text-black/60 dark:text-[#bab59c] text-sm font-normal leading-normal">Uma curadoria de tecidos e couros de alta qualidade.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pb-3 group cursor-pointer">
              <div className="w-full aspect-video rounded overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2kl9Nvkebz2LnTmNuOClEjmUmCFB-5Bw1uo04dLIecRAJC-U1GYZX8g5lTdN_RGdY9osFPRNuzxE1AHPpxYmRRaIwB64LxO5XSI2tNQAYwVcW06kxURtXiiozb7JIQQRJKbn3QsB-DdsbBeiZAXtmcLAG-NkuVGK1ZbVousHQPsDr8lPsMmWAdXw6DXM3nxNVNdxtb5u0Bwtnnko0vmvR07pjKHVdBPG0AW-tNWxuCjV4eUwuX0Rim9R88kp0_ft6KpQ4DwHh5WQw"
                    alt="Design Personalizado"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div>
                <p className="text-black dark:text-white text-base font-medium leading-normal">Design Personalizado</p>
                <p className="text-black/60 dark:text-[#bab59c] text-sm font-normal leading-normal">Trabalhe com nossos designers para criar o estofado perfeito.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};