import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={toggleCart}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#221f10] shadow-2xl flex flex-col h-full animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-black/10 dark:border-white/10">
          <h2 className="text-xl font-bold text-black dark:text-white">Seu Carrinho</h2>
          <button 
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 gap-4">
              <span className="material-symbols-outlined text-5xl opacity-50">shopping_bag</span>
              <p>Seu carrinho está vazio.</p>
              <button 
                onClick={toggleCart}
                className="text-primary-bright font-bold hover:underline"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.cartId} className="flex gap-4">
                <div className="w-20 h-20 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-black dark:text-white">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                    {item.price === "Sob Consulta" ? (
                       <p className="text-sm text-primary-bright font-medium">{item.price}</p>
                    ) : (
                       <p className="text-sm text-gray-600 dark:text-gray-300">{item.price}</p>
                    )}
                    
                    {/* Options Details */}
                    {item.options && (
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                        {item.options.tecido && <p>Tecido: {item.options.tecido}</p>}
                        {item.options.cor && <p>Cor: {item.options.cor}</p>}
                        {item.options.acabamento && <p>Acabamento: {item.options.acabamento}</p>}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">Qtd: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#1a180e]">
            <div className="mb-4 text-sm text-gray-500 text-center">
              Os valores finais e o frete serão calculados no orçamento.
            </div>
            <button className="w-full h-12 bg-primary-bright text-black font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
              <span>Finalizar Orçamento</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};