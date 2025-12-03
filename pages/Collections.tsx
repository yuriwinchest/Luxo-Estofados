import React from 'react';

const collections = [
  {
    title: "Coleção Bauhaus",
    desc: "Inspirada na pureza das formas e na funcionalidade do design modernista, esta coleção celebra a simplicidade elegante.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD54Vcf1n1eg27Ve1ACwzNuJ3Ky9VPtBjvwnOLZTmwRxjStYgWqtf6aAn4CXLLYcFvJckilyo3EaNDOI-TAqODRYTjmYnPRM-5KH5KqQiGuN61BSQ1L1aoyDXn6ELpeh9hY14IwSMwWPb0LdxrIcfwvoxXhGb_wXdn04sEuGRjbgLz72O0lVSAqPhtcdBMLhH8Dt0NuiB4ikWbxVgoR6wJy-OmaYMPdDO3YbQy6pkTaHvX5IeMrmu1sLtJqho51qehHUx9DngKZY9id"
  },
  {
    title: "Linha Riviera",
    desc: "Evocando a sofisticação da costa, a Linha Riviera combina materiais nobres e um design que inspira serenidade e conforto.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXnxpxThzypPwJWzIyMpVB2KTm7rX5uJKQqODMPb_YGvjNX6sn5pmYxaCrKhIDJZ_eB3t8O-v-dZHEftSdoi0W0WURtK8uZOUZaE-XcaW7he8EJrXSA6FkuYfhLuBERbJwKwlpazX--oFYhK8qPqi5XoigQke0TMV0b8Ffp06CzJ_Qzmq4n_OoIXA2IYRa4zbUeR-SF3DD64Rhj3GlJQzyg6iKqoOkZH9IM3W8nGXtwi39bTqVGegR4XRdHJBV6RZhSy5OOCoLpw5l"
  },
  {
    title: "Série Cosmopolitan",
    desc: "Um tributo às grandes metrópoles. Designs arrojados e texturas ricas que trazem a energia urbana para o seu espaço.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhzA7TtlKQU0Jiq2pesCTSSrJLtUb9YCZmPRKO0sHeh-c5ueegF6HZ3Iow3GpzNWz60wWbmwX3W01rwTfZWvx_FBFiROtgXrwUBzTV97yXadUbNgqodl_EFVqhcxcOJOr_fpm87TlcGTNbDszQZgkgz6XERaigYWhI5Qmw_Rsx83btdjAUqO95IA-bsU7idd6FdpwYyzK0EPYulndy8cFgUk2EnZphuMOvS8EM8NPm83OR-9vGH50fT_ICme3Q6VnDau4Jo4q19BBd"
  }
];

export const Collections: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-10">
       <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
             <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-4">Coleções Exclusivas</h1>
             <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
               Descubra nossas inspirações e encontre o seu estilo. Peças únicas que transformam ambientes.
             </p>
             <button className="mt-6 bg-primary-bright text-black px-6 py-3 rounded font-bold hover:bg-white transition-colors">
               Ver Coleções
             </button>
          </div>

          <div className="flex flex-col gap-12">
            {collections.map((col, idx) => (
              <div 
                key={idx}
                className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl min-h-[400px] md:min-h-[500px] shadow-2xl overflow-hidden group"
                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("${col.img}")` }}
              >
                 <div className="flex w-full flex-col md:flex-row items-start md:items-end justify-between gap-6 p-8 md:p-12 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex max-w-[600px] flex-1 flex-col gap-2">
                       <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight font-serif">{col.title}</h2>
                       <p className="text-white/90 text-lg font-medium leading-relaxed">
                          {col.desc}
                       </p>
                    </div>
                    <button className="flex items-center justify-center rounded-full h-12 px-6 bg-primary-bright text-black text-sm font-bold hover:bg-white transition-colors shadow-lg">
                       Explorar Coleção
                    </button>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );
};
