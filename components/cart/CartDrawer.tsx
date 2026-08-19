'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MapPin,
  User,
  Phone,
  Home,
  MessageCircle,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MAZHATHULLI_WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
  pincode?: string;
}

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalAmount,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Reset step & body overflow state when modal open state changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep('cart');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!address.trim()) newErrors.address = 'Delivery address is required';
    if (!city.trim()) newErrors.city = 'City / Town is required';
    if (!pincode.trim()) newErrors.pincode = 'Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const itemsSummary = items
      .map(
        (item, index) =>
          `${index + 1}. *${item.title}*${item.author ? ` by ${item.author}` : ''} - ${item.quantity} ${item.quantity > 1 ? 'copies' : 'copy'}${item.price ? ` @ ₹${item.price}` : ''}`
      )
      .join('\n');

    const messageLines = [
      `Hello Mazhathulli,`,
      ``,
      `I would like to place an order for the following books:`,
      ``,
      `*SELECTED BOOKS (${totalCount} total items)*`,
      itemsSummary,
      ``,
      totalAmount > 0 ? `*TOTAL ESTIMATE: ₹${totalAmount}*` : null,
      ``,
      `*DELIVERY ADDRESS*`,
      `• Name: ${fullName.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Address: ${address.trim()}`,
      `• City/Town: ${city.trim()}`,
      `• Pincode: ${pincode.trim()}`,
      notes.trim() ? `• Notes/Requests: ${notes.trim()}` : null,
      ``,
      `Please confirm order availability and delivery options. Thank you!`,
    ].filter((line) => line !== null);

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${MAZHATHULLI_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeCart}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Slide-over Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full z-10"
        >
          {/* Header */}
          <div className="bg-[#111111] text-white p-5 flex items-center justify-between shrink-0 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#0098DA]/20 text-[#0098DA] rounded-xl border border-[#0098DA]/30">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold leading-tight">
                  {step === 'cart' ? 'Your Shopping Cart' : 'Checkout & Delivery'}
                </h2>
                <p className="text-xs text-gray-400 font-sans">
                  {step === 'cart'
                    ? `${totalCount} ${totalCount === 1 ? 'book' : 'books'} selected`
                    : 'Enter shipping details'}
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          {items.length === 0 ? (
            /* Empty Cart View */
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111111] mb-2">
                Your cart is empty
              </h3>
              <p className="text-sm text-gray-500 font-sans mb-6 max-w-xs leading-relaxed">
                Explore our rich catalogue of Malayalam literature and add books to your cart.
              </p>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0098DA] hover:bg-[#0082bd] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Browse Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : step === 'cart' ? (
            /* Cart Items List View */
            <>
              <div className="flex-grow overflow-y-auto p-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Selected Titles
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-[#FAF9F6] rounded-2xl border border-gray-200/80 shadow-sm"
                  >
                    {/* Book Thumbnail */}
                    <div className="relative w-14 h-20 rounded-lg overflow-hidden bg-white border border-gray-200 shrink-0 flex items-center justify-center">
                      {item.cover ? (
                        <Image
                          src={item.cover}
                          alt={item.title}
                          fill
                          className="object-contain p-0.5"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0098DA] to-[#00A859] flex items-center justify-center text-white font-serif font-bold text-lg">
                          {item.title.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Book Details */}
                    <div className="flex-grow min-w-0 space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#111111] line-clamp-1 leading-snug">
                        {item.title}
                      </h4>
                      {item.author && (
                        <p className="text-[11px] text-gray-500 font-sans truncate">
                          By {item.author}
                        </p>
                      )}
                      <div className="text-xs font-serif font-bold text-[#111111] pt-0.5">
                        {item.price ? `₹${item.price}` : 'Catalogue Title'}
                      </div>
                    </div>

                    {/* Quantity & Delete Actions */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Remove book"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 bg-white border border-gray-300 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-0.5 hover:bg-gray-100 rounded text-gray-700 disabled:opacity-30"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-0.5 hover:bg-gray-100 rounded text-gray-700"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer Summary */}
              <div className="p-5 bg-gray-50 border-t border-gray-200 shrink-0 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Total Books ({totalCount})</span>
                    <span className="font-semibold text-gray-900">{totalCount} items</span>
                  </div>
                  {totalAmount > 0 && (
                    <div className="flex items-center justify-between text-base font-bold pt-2 border-t border-gray-200">
                      <span className="text-[#111111]">Total Amount</span>
                      <span className="font-serif text-xl text-[#0098DA]">₹{totalAmount}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-[#00A859] hover:bg-[#00924d] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base active:scale-[0.98]"
                >
                  <span>Proceed to Delivery Info</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            /* Delivery Address & Order Confirmation Form View */
            <div className="flex-grow flex flex-col overflow-y-auto">
              <form onSubmit={handleWhatsAppCheckout} className="flex-grow p-5 space-y-4 overflow-y-auto">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="text-xs text-[#0098DA] font-semibold hover:underline"
                  >
                    ← Back to Cart Items ({totalCount})
                  </button>
                  <span className="text-xs text-gray-400 font-sans">Step 2 of 2</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0098DA]" />
                    Shipping & Contact Information
                  </h4>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="e.g. Ananya Nair"
                      className={`w-full px-3.5 py-2.5 pl-9 text-sm rounded-xl border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#0098DA]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all`}
                    />
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="e.g. 9961260138"
                      className={`w-full px-3.5 py-2.5 pl-9 text-sm rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#0098DA]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all`}
                    />
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Shipping Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                      }}
                      placeholder="House / Flat No, Street, Landmark, Area..."
                      className={`w-full px-3.5 py-2.5 pl-9 text-sm rounded-xl border ${
                        errors.address ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#0098DA]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all`}
                    />
                    <Home className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.address}
                    </p>
                  )}
                </div>

                {/* City & Pincode Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City / District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                      }}
                      placeholder="e.g. Kochi"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.city ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#0098DA]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value);
                        if (errors.pincode) setErrors((prev) => ({ ...prev, pincode: undefined }));
                      }}
                      placeholder="e.g. 682001"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                        errors.pincode ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#0098DA]'
                      } focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all`}
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.pincode}
                      </p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Special Requests / Notes <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Author signatures, gift notes..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#0098DA] focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-3 space-y-3 shrink-0">
                  {totalAmount > 0 && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm">
                      <span className="text-gray-600 font-medium">Total ({totalCount} items)</span>
                      <span className="font-serif font-bold text-lg text-[#111111]">
                        ₹{totalAmount}
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#00A859] hover:bg-[#00924d] text-white font-medium py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                    <span className="font-semibold text-base">Send Multi-Book Order via WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-sans text-center">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00A859] shrink-0" />
                    <span>Direct fulfillment by Mazhathulli. No online payment required.</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
