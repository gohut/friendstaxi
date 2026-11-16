"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import {
  GpsIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  AlertCircleIcon,
  SendIcon,
  CarIcon,
  ClockIcon,
} from "@/components/Icons";

export function BookingSection() {
  const { t, lang } = useLang();

  // Form Field State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [members, setMembers] = useState(1);

  // Touched state to validate only onBlur
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Geolocation & Autocomplete State
  const [isLocLoading, setIsLocLoading] = useState(false);
  const [locMessage, setLocMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [dropSuggestions, setDropSuggestions] = useState<string[]>([]);
  const [isSearchingDrop, setIsSearchingDrop] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Input Refs for focusing first invalid field
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const pickupRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLInputElement>(null);

  // Debounced search for drop suggestions
  useEffect(() => {
    if (drop.trim().length < 3) {
      setDropSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingDrop(true);
      try {
        const query = encodeURIComponent(`${drop.trim()}, Tamil Nadu, India`);
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=4`,
          { headers: { "Accept-Language": lang === "ta" ? "ta,en" : "en" } }
        );
        if (res.ok) {
          const data = await res.json();
          const places = data.map((item: { display_name: string }) => item.display_name);
          setDropSuggestions(places);
        }
      } catch {
        // Fallback: manual typing is preserved
      } finally {
        setIsSearchingDrop(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [drop, lang]);

  // Validation logic
  const validateField = (field: string, val: string | number): string => {
    switch (field) {
      case "name":
        if (!String(val).trim()) return t.err_name;
        return "";
      case "phone": {
        const cleaned = String(val).replace(/\D/g, "");
        if (!/^[6-9]\d{9}$/.test(cleaned)) return t.err_phone;
        return "";
      }
      case "pickup":
        if (!String(val).trim()) return t.err_pickup;
        return "";
      case "drop":
        if (!String(val).trim()) return t.err_drop;
        return "";
      case "members":
        if (Number(val) < 1) return t.err_members;
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string, value: string | number) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  // "Use My Current Location" Handler
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocMessage({ text: t.location_error, isError: true });
      return;
    }

    setIsLocLoading(true);
    setLocMessage({ text: t.location_fetching, isError: false });

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { "Accept-Language": lang === "ta" ? "ta,en" : "en" } }
          );
          if (res.ok) {
            const data = await res.json();
            const locationName = data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
            setPickup(locationName);
            setErrors((prev) => ({ ...prev, pickup: "" }));
            setLocMessage({ text: t.location_success, isError: false });
          } else {
            setPickup(`GPS (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`);
            setLocMessage({ text: t.location_success, isError: false });
          }
        } catch {
          setPickup(`GPS (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`);
          setLocMessage({ text: t.location_success, isError: false });
        } finally {
          setIsLocLoading(false);
          setTimeout(() => setLocMessage(null), 4000);
        }
      },
      (err) => {
        setIsLocLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setLocMessage({ text: t.location_denied, isError: true });
        } else {
          setLocMessage({ text: t.location_error, isError: true });
        }
        setTimeout(() => setLocMessage(null), 6000);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Stepper handlers
  const incrementMembers = () => {
    setMembers((prev) => Math.min(prev + 1, 15));
    setErrors((prev) => ({ ...prev, members: "" }));
  };

  const decrementMembers = () => {
    setMembers((prev) => Math.max(prev - 1, 1));
    setErrors((prev) => ({ ...prev, members: "" }));
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all touched
    setTouched({
      name: true,
      phone: true,
      pickup: true,
      drop: true,
      members: true,
    });

    const nameErr = validateField("name", name);
    const phoneErr = validateField("phone", phone);
    const pickupErr = validateField("pickup", pickup);
    const dropErr = validateField("drop", drop);
    const membersErr = validateField("members", members);

    const newErrors = {
      name: nameErr,
      phone: phoneErr,
      pickup: pickupErr,
      drop: dropErr,
      members: membersErr,
    };

    setErrors(newErrors);

    // Focus first invalid field without wall of errors
    if (nameErr) {
      nameRef.current?.focus();
      return;
    }
    if (phoneErr) {
      phoneRef.current?.focus();
      return;
    }
    if (pickupErr) {
      pickupRef.current?.focus();
      return;
    }
    if (dropErr) {
      dropRef.current?.focus();
      return;
    }

    // Submit with loading state
    setIsSubmitting(true);

    // Prepare strictly clean WhatsApp dispatch message (NO emojis!)
    const cleanPhone = phone.replace(/\D/g, "");
    const dispatchMessage = `*KARUR FRIENDS TRACK CALL TAXI - BOOKING REQUEST*
Name: ${name.trim()}
Phone: ${cleanPhone}
Passengers: ${members}
Pick-up Location: ${pickup.trim()}
Drop-off Location: ${drop.trim()}

Please confirm my ride booking. Thank you!`;

    const encoded = encodeURIComponent(dispatchMessage);
    const whatsappUrl = `https://wa.me/917339340800?text=${encoded}`;

    // Brief simulated loading state for clear user feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setPickup("");
    setDrop("");
    setMembers(1);
    setTouched({});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="booking"
      className="py-12 sm:py-16 md:py-20 bg-slate-50 relative overflow-hidden border-b-2 border-black"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="neo-badge bg-[#080A55] text-white mb-2.5">
            <CarIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
            <span>{t.booking_badge}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0F1D] tracking-tight uppercase">
            {t.booking_title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium max-w-lg mx-auto">
            {t.booking_sub}
          </p>
        </div>

        {/* Main Focused Booking Card */}
        <div className="neo-glass p-5 sm:p-8 bg-white relative">
          
          {submitted ? (
            /* Clear Confirmation State with Direct Alternatives */
            <div className="text-center py-6 sm:py-10 space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 bg-[#0A45B8] text-white border-2 border-black mx-auto flex items-center justify-center shadow-[3px_3px_0px_#000]">
                <CheckIcon className="w-8 h-8 text-[#FFCE00]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0F1D]">
                  {t.form_success_title}
                </h3>
                <p className="text-sm text-slate-700 font-medium max-w-md mx-auto leading-relaxed">
                  {t.form_success_desc}
                </p>
              </div>

              {/* Booking Summary Recapped */}
              <div className="bg-slate-50 border-2 border-black p-4 max-w-md mx-auto text-left text-xs font-semibold space-y-1.5 shadow-[2px_2px_0px_#000]">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{t.field_name_label}:</span>
                  <span className="font-bold text-slate-900">{name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{t.field_phone_label}:</span>
                  <span className="font-bold text-slate-900">{phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{t.field_pickup_label}:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[200px]">{pickup}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{t.field_drop_label}:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[200px]">{drop}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.field_members_label}:</span>
                  <span className="font-bold text-slate-900">{members}</span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Direct Call */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/917339340800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-[#25D366] hover:bg-[#20ba59] text-white w-full sm:w-auto font-extrabold gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>{t.form_success_whatsapp}</span>
                </a>

                <a
                  href="tel:7339340800"
                  className="neo-btn neo-btn-blue w-full sm:w-auto font-extrabold gap-2"
                >
                  <PhoneIcon className="w-4 h-4 text-[#FFCE00]" />
                  <span>{t.form_success_call}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-slate-600 underline hover:text-black p-2"
                >
                  {t.form_success_reset}
                </button>
              </div>
            </div>
          ) : (
            /* Focused Clean Form in Logical Order */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* 1. Name */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                >
                  {t.field_name_label} <span className="text-red-600">*</span>
                </label>
                <input
                  ref={nameRef}
                  id="booking-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  onBlur={() => handleBlur("name", name)}
                  placeholder={t.field_name_ph}
                  className="neo-input"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {touched.name && errors.name && (
                  <p
                    id="name-error"
                    className="mt-1.5 text-xs font-bold text-red-700 flex items-center gap-1.5"
                  >
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* 2. Phone Number (Numeric keypad, autocomplete tel) */}
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                >
                  {t.field_phone_label} <span className="text-red-600">*</span>
                </label>
                <input
                  ref={phoneRef}
                  id="booking-phone"
                  name="tel"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  onBlur={() => handleBlur("phone", phone)}
                  placeholder={t.field_phone_ph}
                  className="neo-input"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {touched.phone && errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-1.5 text-xs font-bold text-red-700 flex items-center gap-1.5"
                  >
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* 3. Pick-up Location + Location Finder Action */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="booking-pickup"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-900"
                  >
                    {t.field_pickup_label} <span className="text-red-600">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleGetCurrentLocation}
                    disabled={isLocLoading}
                    className="neo-btn text-xs px-2.5 py-1 min-h-[36px] bg-white hover:bg-slate-100 text-black border border-black flex items-center gap-1.5 font-bold"
                  >
                    <GpsIcon className={`w-3.5 h-3.5 text-[#0A45B8] ${isLocLoading ? "animate-spin" : ""}`} />
                    <span>{isLocLoading ? t.location_fetching : t.field_pickup_gps_btn}</span>
                  </button>
                </div>
                <input
                  ref={pickupRef}
                  id="booking-pickup"
                  name="pickup"
                  type="text"
                  autoComplete="street-address"
                  required
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                    if (errors.pickup) setErrors((prev) => ({ ...prev, pickup: "" }));
                  }}
                  onBlur={() => handleBlur("pickup", pickup)}
                  placeholder={t.field_pickup_ph}
                  className="neo-input"
                  aria-invalid={!!errors.pickup}
                  aria-describedby={errors.pickup ? "pickup-error" : undefined}
                />
                {/* Friendly GPS Status Notice */}
                {locMessage && (
                  <p
                    className={`mt-1.5 text-xs font-bold p-2 border ${
                      locMessage.isError
                        ? "bg-amber-50 text-amber-900 border-amber-300"
                        : "bg-blue-50 text-blue-900 border-blue-300"
                    }`}
                  >
                    {locMessage.text}
                  </p>
                )}
                {touched.pickup && errors.pickup && (
                  <p
                    id="pickup-error"
                    className="mt-1.5 text-xs font-bold text-red-700 flex items-center gap-1.5"
                  >
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.pickup}</span>
                  </p>
                )}
              </div>

              {/* 4. Drop-off Location + Suggestions */}
              <div className="relative">
                <label
                  htmlFor="booking-drop"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                >
                  {t.field_drop_label} <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <input
                    ref={dropRef}
                    id="booking-drop"
                    name="destination"
                    type="text"
                    required
                    value={drop}
                    onChange={(e) => {
                      setDrop(e.target.value);
                      if (errors.drop) setErrors((prev) => ({ ...prev, drop: "" }));
                    }}
                    onBlur={() => handleBlur("drop", drop)}
                    placeholder={t.field_drop_ph}
                    className="neo-input pr-10"
                    aria-invalid={!!errors.drop}
                    aria-describedby={errors.drop ? "drop-error" : undefined}
                  />
                  {isSearchingDrop && (
                    <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-bold">
                      ...
                    </span>
                  )}
                </div>

                {/* Suggestions Dropdown */}
                {dropSuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border-2 border-black z-30 shadow-[3px_3px_0px_#000] max-h-48 overflow-y-auto">
                    {dropSuggestions.map((place, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setDrop(place);
                          setDropSuggestions([]);
                          setErrors((prev) => ({ ...prev, drop: "" }));
                        }}
                        className="w-full text-left px-3 py-2.5 text-xs font-semibold text-slate-900 hover:bg-[#FFCE00] border-b border-slate-100 last:border-b-0 flex items-center gap-2"
                      >
                        <MapPinIcon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        <span className="truncate">{place}</span>
                      </button>
                    ))}
                  </div>
                )}

                {touched.drop && errors.drop && (
                  <p
                    id="drop-error"
                    className="mt-1.5 text-xs font-bold text-red-700 flex items-center gap-1.5"
                  >
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.drop}</span>
                  </p>
                )}
              </div>

              {/* 5. Number of Members (Clean Stepper: minus, number, plus) */}
              <div>
                <label
                  htmlFor="member-stepper"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                >
                  {t.field_members_label} <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decrementMembers}
                    disabled={members <= 1}
                    className="neo-btn bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 p-0 border-2 border-black"
                    aria-label="Decrease passenger count"
                  >
                    <MinusIcon className="w-8 h-8 text-black" />
                  </button>

                  <div
                    id="member-stepper"
                    className="w-16 h-12 border-2 border-black bg-white flex items-center justify-center font-extrabold text-lg text-slate-900 shadow-[2px_2px_0px_#000]"
                    aria-live="polite"
                  >
                    {members}
                  </div>

                  <button
                    type="button"
                    onClick={incrementMembers}
                    disabled={members >= 15}
                    className="neo-btn bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 p-0 border-2 border-black"
                    aria-label="Increase passenger count"
                  >
                    <PlusIcon className="w-8 h-8 text-black" />
                  </button>

                </div>
                {errors.members && (
                  <p className="mt-1.5 text-xs font-bold text-red-700 flex items-center gap-1.5">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.members}</span>
                  </p>
                )}
              </div>

              {/* 6. Send Button (Prominent, loading state) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-btn neo-btn-yellow w-full py-4 text-base font-extrabold gap-2.5 shadow-[4px_4px_0px_#000] disabled:opacity-75"
                >
                  <SendIcon className="w-5 h-5 text-black" />
                  <span>{isSubmitting ? t.btn_sending : t.btn_send}</span>
                </button>
              </div>

              {/* 7. Short Reassurance Line (Facts only from old site: Est. 2009, Call-back) */}
              <div className="pt-2 text-center border-t border-slate-200">
                <p className="text-xs text-slate-600 font-bold leading-relaxed max-w-lg mx-auto">
                  {t.booking_reassurance}
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
