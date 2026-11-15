/**
 * Friends Track Call Taxi — Centralized Translations
 * ----------------------------------------------------
 * All English and Tamil text is strictly stored here.
 * Absolutely NO emojis are used in this file or any user-facing text.
 * Real details are sourced directly from the original site (Est. 2009, Karur).
 */

export type Lang = "ta" | "en";

export interface Strings {
  /* NAV */
  nav_home: string;
  nav_about: string;
  nav_fleet: string;
  nav_testimonials: string;
  nav_booking: string;
  nav_contact: string;
  lang_toggle: string;
  lang_toggle_aria: string;

  /* TOP BAR & TRUST STRIP */
  topbar_service_note: string;
  topbar_landline_label: string;
  topbar_mobile_label: string;
  trust_est: string;
  trust_service: string;
  trust_coverage: string;
  trust_pricing: string;
  trust_maintenance: string;

  /* HERO */
  hero_badge: string;
  hero_headline: string;
  hero_sub: string;
  hero_cta: string;
  hero_call_cta: string;
  hero_direct_phone: string;
  hero_tag_local: string;
  hero_tag_chennai: string;
  hero_tag_bangalore: string;
  hero_tag_puducherry: string;
  hero_image_alt: string;

  /* STATS */
  stat1_num: string;
  stat1_label: string;
  stat2_num: string;
  stat2_label: string;
  stat3_num: string;
  stat3_label: string;
  stat4_num: string;
  stat4_label: string;

  /* BOOKING SECTION */
  booking_badge: string;
  booking_title: string;
  booking_sub: string;
  booking_reassurance: string;
  field_name_label: string;
  field_name_ph: string;
  field_phone_label: string;
  field_phone_ph: string;
  field_pickup_label: string;
  field_pickup_ph: string;
  field_pickup_gps_btn: string;
  field_drop_label: string;
  field_drop_ph: string;
  field_drop_search_btn: string;
  field_members_label: string;
  field_car_type_label: string;
  quick_pick_label: string;
  btn_send: string;
  btn_sending: string;
  location_fetching: string;
  location_success: string;
  location_denied: string;
  location_error: string;
  search_suggestions_empty: string;
  form_success_title: string;
  form_success_desc: string;
  form_success_whatsapp: string;
  form_success_call: string;
  form_success_reset: string;
  err_name: string;
  err_phone: string;
  err_pickup: string;
  err_drop: string;
  err_members: string;

  /* FLEET */
  fleet_badge: string;
  fleet_title: string;
  fleet_sub: string;
  car1_name: string;
  car1_seats: string;
  car1_desc: string;
  car1_feat1: string;
  car1_feat2: string;
  car1_feat3: string;
  car2_name: string;
  car2_seats: string;
  car2_desc: string;
  car2_feat1: string;
  car2_feat2: string;
  car2_feat3: string;
  car3_name: string;
  car3_seats: string;
  car3_desc: string;
  car3_feat1: string;
  car3_feat2: string;
  car3_feat3: string;
  fleet_book_btn: string;

  /* ABOUT */
  about_badge: string;
  about_title: string;
  about_text: string;
  about_feat1: string;
  about_feat2: string;
  about_feat3: string;
  about_est_badge: string;
  about_est_text: string;
  about_safety_badge: string;

  /* TESTIMONIALS */
  testi_badge: string;
  testi_title: string;
  testi_verified: string;
  t1_text: string;
  t1_name: string;
  t1_role: string;
  t2_text: string;
  t2_name: string;
  t2_role: string;
  t3_text: string;
  t3_name: string;
  t3_role: string;

  /* FOOTER */
  footer_cta_heading: string;
  footer_cta_sub: string;
  footer_about_title: string;
  footer_tagline: string;
  footer_about_text: string;
  footer_links_title: string;
  footer_contact_title: string;
  footer_phone_label: string;
  footer_email_label: string;
  footer_address_label: string;
  footer_address: string;
  footer_copy: string;
  footer_designed: string;

  /* FLOATING BUTTONS */
  btn_whatsapp_aria: string;
  btn_phone_aria: string;
}

const ta: Strings = {
  /* NAV */
  nav_home: "முகப்பு",
  nav_fleet: "வாகனங்கள்",
  nav_about: "அறிமுகம்",
  nav_testimonials: "மதிப்புரைகள்",
  nav_booking: "இப்போதே முன்பதிவு",
  nav_contact: "தொடர்பு",
  lang_toggle: "English",
  lang_toggle_aria: "Switch to English",

  /* TOP BAR & TRUST STRIP */
  topbar_service_note: "24/7 சேவை • கரூர், தமிழ்நாடு, சென்னை, பெங்களூரு & புதுச்சேரி",
  topbar_landline_label: "லேண்ட்லைன்: 04324 - 235000",
  topbar_mobile_label: "மொபைல்: 7339340800",
  trust_est: "2009 முதல் சேவை",
  trust_service: "24/7 வாடகை கார்",
  trust_coverage: "கரூர், சென்னை, பெங்களூரு, புதுச்சேரி",
  trust_pricing: "தெளிவான, நியாயமான கட்டணம்",
  trust_maintenance: "முறைப்படி பராமரிக்கப்படும் வாகனங்கள்",

  /* HERO */
  hero_badge: "நிறுவனம் 2009",
  hero_headline: "நம்பகமான வாடகை கார் சேவை, எப்போதும் உங்கள் பயணத்திற்கு.",
  hero_sub:
    "கரூர் மற்றும் தமிழ்நாடு முழுவதும் பாதுகாப்பான, அமைதியான பயணம். அனுபவமிக்க ஓட்டுனர்கள் மற்றும் சுத்தமான வாகனங்களுடன் உடனே பதிவு செய்யுங்கள்.",
  hero_cta: "வாடகை கார் பதிவு செய்க",
  hero_call_cta: "உடனே அழைக்கவும்",
  hero_direct_phone: "நேரடி தொலைபேசி: 04324 - 235000 / 235300",
  hero_tag_local: "கரூர் உள்ளூர்",
  hero_tag_chennai: "சென்னை",
  hero_tag_bangalore: "பெங்களூரு",
  hero_tag_puducherry: "புதுச்சேரி",
  hero_image_alt: "கரூர் பிரண்ட்ஸ் டிராக் வாடகை கார்",

  /* STATS */
  stat1_num: "15+",
  stat1_label: "ஆண்டுகள் சேவை",
  stat2_num: "24/7",
  stat2_label: "முழு நேர சேவை",
  stat3_num: "100%",
  stat3_label: "பாதுகாப்பான பயணம்",
  stat4_num: "5 / 5",
  stat4_label: "வாடிக்கையாளர் திருப்தி",

  /* BOOKING SECTION */
  booking_badge: "நேரடி முன்பதிவு",
  booking_title: "உங்கள் பயணத்தை பதிவு செய்யுங்கள்",
  booking_sub: "கீழே உள்ள விவரங்களை நிரப்பவும். எங்கள் குழுவினர் உடனடியாக உறுதிப்படுத்துவார்கள்.",
  booking_reassurance:
    "நிறுவனம் 2009 முதல் செயல்படுகிறது. ஓட்டுனர்கள் அனுபவமிக்கவர்கள், வாகனங்கள் தொடர்ந்து பராமரிக்கப்படுகின்றன. பதிவு செய்ததும் உடனடியாக உறுதிப்படுத்தல் அழைப்பு வரும்.",
  field_name_label: "முழு பெயர்",
  field_name_ph: "உங்கள் பெயரை உள்ளிடவும்",
  field_phone_label: "தொலைபேசி எண்",
  field_phone_ph: "10 இலக்க மொபைல் எண் (எ.கா. 9876543210)",
  field_pickup_label: "புறப்படும் இடம் (Pick-up)",
  field_pickup_ph: "முகவரியை உள்ளிடவும் அல்லது என் இருப்பிடத்தை தேர்ந்தெடுக்கவும்",
  field_pickup_gps_btn: "என் இருப்பிடம்",
  field_drop_label: "சேரும் இடம் (Drop-off)",
  field_drop_ph: "இலக்கு முகவரியை உள்ளிடவும்",
  field_drop_search_btn: "தேடுக",
  field_members_label: "பயணிகள் எண்ணிக்கை",
  field_car_type_label: "வாகன வகை",
  quick_pick_label: "முக்கிய இடங்கள்:",
  btn_send: "பதிவை உறுதிப்படுத்துக",
  btn_sending: "பதிவு அனுப்பப்படுகிறது...",
  location_fetching: "தற்போதைய இருப்பிடம் கண்டறியப்படுகிறது...",
  location_success: "இருப்பிடம் கண்டறியப்பட்டது.",
  location_denied: "இருப்பிட அனுமதி கிடைக்கவில்லை. முகவரியை நேரடியாக உள்ளிடுங்கள்.",
  location_error: "இருப்பிடத்தை கண்டறிய முடியவில்லை. முகவரியை நேரடியாக உள்ளிடுங்கள்.",
  search_suggestions_empty: "பொருத்தமான முகவரி கிடைக்கவில்லை. நேரடியாக தட்டச்சு செய்யுங்கள்.",
  form_success_title: "பதிவு விவரங்கள் பெறப்பட்டன",
  form_success_desc:
    "உங்கள் வாடகை கார் முன்பதிவு கோரிக்கை அனுப்பப்பட்டது. எங்கள் நிர்வாக குழுவினர் உடனடியாக உங்களை தொலைபேசியில் அழைத்து உறுதிப்படுத்துவார்கள்.",
  form_success_whatsapp: "வாட்ஸ்அப் மூலம் தொடர்புகொள்ள",
  form_success_call: "அழைக்க: 7339340800",
  form_success_reset: "மற்றொரு பயணம் பதிவு செய்க",
  err_name: "தயவுசெய்து உங்கள் பெயரை உள்ளிடுங்கள்.",
  err_phone: "சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடுங்கள்.",
  err_pickup: "தயவுசெய்து புறப்படும் இடத்தை உள்ளிடுங்கள்.",
  err_drop: "தயவுசெய்து சேரும் இடத்தை உள்ளிடுங்கள்.",
  err_members: "குறைந்தது ஒரு பயணியையாவது குறிப்பிட வேண்டும்.",

  /* FLEET */
  fleet_badge: "வாகன வகைகள்",
  fleet_title: "எங்கள் வாகன வரிசை",
  fleet_sub:
    "அனைத்து வாகனங்களும் முறைப்படி பராமரிக்கப்படுகின்றன. ஓட்டுனர்கள் அனுபவமிக்கவர்கள், சிறந்த வழி அறிவு கொண்டவர்கள்.",
  car1_name: "சேடான் / டவுன் டாக்சி",
  car1_seats: "4 பயணிகள்",
  car1_desc: "நகர பயணம் மற்றும் வெளி மாவட்ட பயணத்திற்கு ஏற்ற சொகுசான, சிக்கனமான சேடான் வாகனம்.",
  car1_feat1: "குளிர்சாதன வசதி (AC) & சுத்தமான இருக்கைகள்",
  car1_feat2: "போதுமான பொருட்கள் வைக்கும் இடம்",
  car1_feat3: "நகர மற்றும் நெடுஞ்சாலை பயணம்",
  car2_name: "எஸ்யுவி / இன்னோவா",
  car2_seats: "6 முதல் 7 பயணிகள்",
  car2_desc: "குடும்பத்தினர் மற்றும் நண்பர்கள் குழுக்களுக்கு விசாலமான, பாதுகாப்பான நெடுந்தூர பயண வாகனம்.",
  car2_feat1: "கூடுதல் லக்கேஜ் இடம்",
  car2_feat2: "மிகவும் வசதியான இருக்கைகள்",
  car2_feat3: "நீண்ட தூர பயணங்களுக்கு ஏற்றது",
  car3_name: "ஹைப்ரிட் டாக்சி",
  car3_seats: "4 பயணிகள்",
  car3_desc: "சுற்றுச்சூழலுக்கு உகந்த, குறைந்த சத்தத்துடன் சீராக இயங்கும் நவீன வாடகை கார் சேவை.",
  car3_feat1: "அமைதியான, மென்மையான இயக்கம்",
  car3_feat2: "எரிபொருள் திறன் மிக்கது",
  car3_feat3: "சரியான நேர பயணம்",
  fleet_book_btn: "இந்த வாகனத்தை தேர்வு செய்க",

  /* ABOUT */
  about_badge: "எங்களைப் பற்றி",
  about_title: "கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி",
  about_text:
    "கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி — தமிழ்நாடு, சென்னை, பெங்களூரு மற்றும் புதுச்சேரி முழுவதும் பாதுகாப்பான, சிக்கனமான பயணத்திற்கு உங்கள் நம்பகமான சேவை. நிறுவனம் 2009 ஆம் ஆண்டு நிறுவப்பட்டது. நாங்கள் பாதுகாப்பான, சிறந்த முறையில் பராமரிக்கப்படும் வாகனங்களை வழங்குகிறோம். எங்கள் ஓட்டுனர்கள் அனுபவமிக்கவர்கள், முறையாக பயிற்சி பெற்றவர்கள், வழிகளை நன்கு அறிந்தவர்கள். ஒவ்வொரு பயணியும் அமைதியான மற்றும் பாதுகாப்பான பயணத்தை அனுபவிப்பதை நாங்கள் உறுதி செய்கிறோம்.",
  about_feat1: "24/7 நகர மற்றும் வெளி மாவட்ட சேவை",
  about_feat2: "திறமையான ஓட்டுனர்கள் மற்றும் சுத்தமான வாகனங்கள்",
  about_feat3: "மலிவான மற்றும் வெளிப்படையான கட்டணங்கள்",
  about_est_badge: "2009 முதல் சேவை",
  about_est_text: "15 ஆண்டுகளுக்கும் மேலான தொடர்ச்சியான வாடிக்கையாளர் நம்பிக்கை.",
  about_safety_badge: "பாதுகாப்பான மற்றும் அமைதியான பயணம்",

  /* TESTIMONIALS */
  testi_badge: "வாடிக்கையாளர் கருத்துகள்",
  testi_title: "பயணிகளின் அனுபவம்",
  testi_verified: "சரிபார்க்கப்பட்ட வாடிக்கையாளர்",
  t1_text: "மிக வேகமான சேவை, மலிவான கட்டணம் மற்றும் நம்பகமான ஓட்டுனர்கள்.",
  t1_name: "பூபதி பாலகிருஷ்ணன்",
  t1_role: "வாடிக்கையாளர்",
  t2_text: "சிறந்த கால் டாக்சி சேவை, சரியான கட்டணம் — மொத்தத்தில் மிகவும் நல்ல அனுபவம்.",
  t2_name: "சிவா ஆர்.",
  t2_role: "வாடிக்கையாளர்",
  t3_text: "நல்ல ஓட்டுனர் மற்றும் சிறந்த வாடிக்கையாளர் ஆதரவு சேவை.",
  t3_name: "முகமது இஸ்மாயில்",
  t3_role: "வாடிக்கையாளர்",

  /* FOOTER */
  footer_cta_heading: "உடனே வாடகை கார் தேவையா?",
  footer_cta_sub: "24 மணி நேரமும் செயல்படும் எங்களின் நேரடி தொலைபேசியை அழையுங்கள் அல்லது வாட்ஸ்அப் செய்யுங்கள்.",
  footer_about_title: "பிரண்ட்ஸ் டிராக் பற்றி",
  footer_tagline: "2009 முதல் தமிழகம் முழுவதும் நம்பகமான பயணம்.",
  footer_about_text:
    "கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி — 2009 முதல் தமிழ்நாடு, சென்னை, பெங்களூரு, புதுச்சேரி உள்ளிட்ட பகுதிகளில் நம்பகமான வாடகை கார் சேவை.",
  footer_links_title: "விரைவு இணைப்புகள்",
  footer_contact_title: "தொடர்பு முகவரி",
  footer_phone_label: "தொலைபேசி எண்கள்",
  footer_email_label: "மின்னஞ்சல்",
  footer_address_label: "முகவரி",
  footer_address:
    "2வது மாடி, R.K. காம்ப்ளக்ஸ், துளிர் பார்மசி மேல் மாடி, 04, எதிர் டபுள் டேங்க் ரோடு, கரூர், தமிழ்நாடு 639004",
  footer_copy: "© கரூர் பிரண்ட்ஸ் டிராக் கால் டாக்சி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  footer_designed: "வடிவமைப்பு: Forelius Technologies",

  /* FLOATING BUTTONS */
  btn_whatsapp_aria: "வாட்ஸ்அப் மூலம் தொடர்புகொள்ள",
  btn_phone_aria: "தொலைபேசியில் அழைக்க",
};

const en: Strings = {
  /* NAV */
  nav_home: "Home",
  nav_fleet: "Our Fleet",
  nav_about: "About Us",
  nav_testimonials: "Reviews",
  nav_booking: "Book Now",
  nav_contact: "Contact",
  lang_toggle: "தமிழ்",
  lang_toggle_aria: "தமிழில் பார்க்க மாறவும்",

  /* TOP BAR & TRUST STRIP */
  topbar_service_note: "24/7 Taxi Service • Karur, Tamil Nadu, Chennai, Bangalore & Puducherry",
  topbar_landline_label: "Landline: 04324 - 235000",
  topbar_mobile_label: "Mobile: 7339340800",
  trust_est: "Established 2009",
  trust_service: "24/7 Citywide Service",
  trust_coverage: "Karur, Chennai, Bangalore, Puducherry",
  trust_pricing: "Affordable & Transparent Fares",
  trust_maintenance: "Regularly Maintained Vehicles",

  /* HERO */
  hero_badge: "Established 2009",
  hero_headline: "Your Trusted Taxi Service, Ready When You Are.",
  hero_sub:
    "Safe, punctual, and cost-saving journeys across Karur and Tamil Nadu. Professional drivers and well-maintained vehicles ready 24/7.",
  hero_cta: "Book Your Cab",
  hero_call_cta: "Call Now",
  hero_direct_phone: "Direct Phone: 04324 - 235000 / 235300",
  hero_tag_local: "Karur Local",
  hero_tag_chennai: "Chennai",
  hero_tag_bangalore: "Bangalore",
  hero_tag_puducherry: "Puducherry",
  hero_image_alt: "Karur Friends Track Call Taxi Fleet",

  /* STATS */
  stat1_num: "15+",
  stat1_label: "Years of Service",
  stat2_num: "24/7",
  stat2_label: "Always Available",
  stat3_num: "100%",
  stat3_label: "Safe Journeys",
  stat4_num: "5 / 5",
  stat4_label: "Customer Rating",

  /* BOOKING SECTION */
  booking_badge: "Direct Booking",
  booking_title: "Book Your Cab in Seconds",
  booking_sub: "Enter your travel details below. Our dispatch team will confirm your ride promptly.",
  booking_reassurance:
    "Established in 2009. Safe and well-maintained vehicles. Experienced drivers ensure a peaceful ride. Our team calls you immediately to confirm.",
  field_name_label: "Full Name",
  field_name_ph: "Enter your full name",
  field_phone_label: "Phone Number",
  field_phone_ph: "10-digit mobile number (e.g. 9876543210)",
  field_pickup_label: "Pick-up Location",
  field_pickup_ph: "Enter pick-up address or use current location",
  field_pickup_gps_btn: "Use My Location",
  field_drop_label: "Drop-off Location",
  field_drop_ph: "Enter drop-off destination",
  field_drop_search_btn: "Search",
  field_members_label: "Number of Passengers",
  field_car_type_label: "Vehicle Type",
  quick_pick_label: "Popular Destinations:",
  btn_send: "Confirm Booking",
  btn_sending: "Sending booking...",
  location_fetching: "Detecting your current location...",
  location_success: "Location detected successfully.",
  location_denied: "Location permission was denied. Please type your address manually.",
  location_error: "Unable to detect location. Please type your address manually.",
  search_suggestions_empty: "No matching address found. Please type manually.",
  form_success_title: "Booking Request Received",
  form_success_desc:
    "Your cab booking details have been generated. Our dispatch team will call your phone number shortly to confirm driver assignment.",
  form_success_whatsapp: "Open WhatsApp Chat",
  form_success_call: "Call Us: 7339340800",
  form_success_reset: "Book Another Ride",
  err_name: "Please enter your name.",
  err_phone: "Please enter a valid 10-digit Indian mobile number.",
  err_pickup: "Please enter your pick-up location.",
  err_drop: "Please enter your drop-off destination.",
  err_members: "Please specify at least 1 passenger.",

  /* FLEET */
  fleet_badge: "Vehicle Fleet",
  fleet_title: "Choose Your Vehicle",
  fleet_sub:
    "All vehicles are regularly maintained. Drivers are well-experienced, properly trained, and know the best routes.",
  car1_name: "Sedan / Town Taxi",
  car1_seats: "4 Passengers",
  car1_desc: "Comfortable, economical sedan ideal for city rides and outstation travel.",
  car1_feat1: "Air Conditioning & Clean Interior",
  car1_feat2: "Spacious Luggage Boot",
  car1_feat3: "City & Highway Travel",
  car2_name: "SUV / Innova",
  car2_seats: "6 to 7 Passengers",
  car2_desc: "Spacious multi-utility vehicle designed for families and group outstation trips.",
  car2_feat1: "Generous Luggage Capacity",
  car2_feat2: "Extra Legroom & Reclining Seats",
  car2_feat3: "Smooth Long-Distance Highway Ride",
  car3_name: "Hybrid Taxi",
  car3_seats: "4 Passengers",
  car3_desc: "Smooth, quiet, and eco-friendly hybrid vehicle for modern city transit.",
  car3_feat1: "Quiet & Smooth Ride",
  car3_feat2: "Fuel-Efficient & Eco-Friendly",
  car3_feat3: "Punctual Travel",
  fleet_book_btn: "Select This Vehicle",

  /* ABOUT */
  about_badge: "About Us",
  about_title: "Karur Friends Track Call Taxi",
  about_text:
    "Welcome to Karur Friends Track Call Taxi — your most trusted partner for cost-saving and safe journeys in and around Tamil Nadu, Chennai, Bangalore, and Puducherry. Established in 2009, we are one of the region's most preferred taxi services. We provide safe, regularly maintained vehicles driven by experienced, courteous professionals with strong route knowledge. Every passenger is assured a peaceful, comfortable ride with transparent pricing.",
  about_feat1: "24/7 Citywide & Outstation Service",
  about_feat2: "Professional Drivers & Clean Vehicles",
  about_feat3: "Affordable & Transparent Fares",
  about_est_badge: "Serving Since 2009",
  about_est_text: "Over 15 years of continuous service throughout Tamil Nadu.",
  about_safety_badge: "100% Peaceful & Safe Journey",

  /* TESTIMONIALS */
  testi_badge: "Client Reviews",
  testi_title: "What Our Passengers Say",
  testi_verified: "Verified Customer",
  t1_text: "The fastest service, affordable price, and reliable drivers.",
  t1_name: "Boopathy Balakrishnan",
  t1_role: "Customer",
  t2_text: "Good call taxi service, best rates, overall a very nice experience.",
  t2_name: "Siva R.",
  t2_role: "Customer",
  t3_text: "Good driver and good customer care services.",
  t3_name: "Mohamad Ismail",
  t3_role: "Customer",

  /* FOOTER */
  footer_cta_heading: "Need a Cab Right Now?",
  footer_cta_sub: "Call our 24/7 dispatch hotline directly or message us on WhatsApp.",
  footer_about_title: "About Friends Track",
  footer_tagline: "Trusted rides across Tamil Nadu since 2009.",
  footer_about_text:
    "Karur Friends Track Call Taxi — trusted taxi and cab service in Tamil Nadu, Bangalore, Chennai, and nearby since 2009. Drivers ensure every passenger enjoys a peaceful journey.",
  footer_links_title: "Quick Links",
  footer_contact_title: "Contact Details",
  footer_phone_label: "Phone Numbers",
  footer_email_label: "Email",
  footer_address_label: "Address",
  footer_address:
    "2nd Floor, R.K. Complex, Thulir Pharmacy Upstairs, 04, Opp. Double Tank Road, Karur, Tamil Nadu 639004",
  footer_copy: "© Karur Friends Track Call Taxi. All rights reserved.",
  footer_designed: "Designed by Forelius Technologies",

  /* FLOATING BUTTONS */
  btn_whatsapp_aria: "Chat on WhatsApp",
  btn_phone_aria: "Call Us on Phone",
};

export const translations: Record<Lang, Strings> = { ta, en };


