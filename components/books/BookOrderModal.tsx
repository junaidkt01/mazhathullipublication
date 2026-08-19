'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, CheckCircle, MapPin, User, Phone, Home, MessageCircle, AlertCircle } from 'lucide-react';
import { useOrderModal } from '@/context/OrderContext';
import { MAZHATHULLI_WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
  pincode?: string;
}

export const BookOrderModal: React.FC = () => {
  const { isOpen, item, closeOrderModal } = useOrderModal();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Reset form when modal opens with a new item
  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setPhone('');
      setAddress('');
      setCity('');
      setPincode('');
      setQuantity(1);
      setNotes('');
      setErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, item]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeOrderModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOrderModal]);

  if (!isOpen || !item) return null;

  const unitPrice = item.price || 0;
  const totalPrice = unitPrice * quantity;

  const validate = (): boolean => {
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

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      `Hello Mazhathulli,`,
      ``,
      `I would like to place an order for:`,
      // `📖 *DETAILS*`,
      `• Title: ${item.title}`,
      item.author ? `• Author: ${item.author}` : null,
      `• Quantity: ${quantity}`,
      unitPrice > 0 ? `• Unit Price: ₹${unitPrice}` : null,
      unitPrice > 0 ? `• Total Amount: ₹${totalPrice}` : null,
      ``,
      // `📦 *DELIVERY ADDRESS*`,
      `*DELIVERY ADDRESS*`,
      `• Name: ${fullName.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Address: ${address.trim()}`,
      `• City/Town: ${city.trim()}`,
      `• Pincode: ${pincode.trim()}`,
      notes.trim() ? `• Notes/Requests: ${notes.trim()}` : null,
      ``,
      `Please confirm order availability & payment details. Thank you!`,
    ].filter((line) => line !== null);

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${MAZHATHULLI_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeOrderModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeOrderModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#111111] via-[#1a2332] to-[#0098DA] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                <ShoppingBag className="w-5 h-5 text-[#0098DA]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0098DA] block">
                  Direct Delivery Order
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  Place Order
                </h2>
              </div>
            </div>
            <button
              onClick={closeOrderModal}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Form Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
            {/* Book Item Summary Card */}
            <div className="flex items-center gap-4 p-4 bg-[#FAF9F6] rounded-2xl border border-gray-200/80 shadow-sm">
              {item.cover ? (
                <div className="relative w-16 h-22 sm:w-20 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-white border border-gray-200 p-1 flex items-center justify-center">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-contain p-0.5 drop-shadow-sm"
                  />
                </div>
              ) : (
                <div className="w-16 h-22 sm:w-20 sm:h-28 rounded-lg bg-gradient-to-br from-[#0098DA] to-[#00A859] flex items-center justify-center text-white font-serif font-bold text-xl shrink-0">
                  {item.title.charAt(0)}
                </div>
              )}

              <div className="flex-grow space-y-1">
                {item.category && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0098DA] bg-[#0098DA]/10 px-2 py-0.5 rounded-md inline-block">
                    {item.category}
                  </span>
                )}
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] leading-snug line-clamp-2">
                  {item.title}
                </h3>
                {item.author && (
                  <p className="text-xs text-gray-500 font-sans">By {item.author}</p>
                )}

                <div className="pt-2 flex items-center justify-between">
                  {unitPrice > 0 ? (
                    <span className="font-serif font-bold text-lg text-[#111111]">
                      ₹{unitPrice}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-[#0098DA]">
                      Price on Confirmation
                    </span>
                  )}

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 hover:bg-gray-100 rounded text-gray-700 disabled:opacity-40"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold w-6 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 hover:bg-gray-100 rounded text-gray-700"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Form */}
            <form onSubmit={handleWhatsAppOrder} className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0098DA]" />
                  Enter Delivery Information
                </h4>
              </div>

              {/* Full Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              {/* Delivery Address */}
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

              {/* City & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City / Town / District <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                    }}
                    placeholder="e.g. Kochi / Kozhikode"
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

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Special Requests / Author Signature Note <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Author signed copy request, gift message..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#0098DA] focus:outline-none focus:ring-2 focus:ring-[#0098DA]/20 transition-all"
                />
              </div>

              {/* Summary & Submit Action */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                {unitPrice > 0 && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm">
                    <span className="text-gray-600 font-medium">
                      Total ({quantity} {quantity === 1 ? 'item' : 'items'})
                    </span>
                    <span className="font-serif font-bold text-xl text-[#111111]">
                      ₹{totalPrice}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#00A859] hover:bg-[#00924d] text-white font-medium py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span className="font-semibold text-base">Send Order via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-sans">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00A859]" />
                  <span>Direct fulfillment by Mazhathulli Publishing House. No upfront online payment required.</span>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
