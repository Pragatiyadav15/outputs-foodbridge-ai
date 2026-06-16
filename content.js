import {
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  HeartHandshake,
  Leaf,
  MapPinned,
  MessageCircleHeart,
  Recycle,
  Route,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
  Warehouse,
} from "lucide-react";

export const navItems = ["Impact", "How It Works", "AI Features", "Dashboard", "Stories"];

export const impactStats = [
  { label: "Meals Saved", value: 128640, suffix: "+", icon: UtensilsCrossed },
  { label: "NGOs Connected", value: 418, suffix: "+", icon: UsersRound },
  { label: "Hostels Registered", value: 1260, suffix: "+", icon: Warehouse },
  { label: "People Fed", value: 94500, suffix: "+", icon: MessageCircleHeart },
  { label: "Food Waste Reduced", value: 71, suffix: "%", icon: Recycle },
];

export const processSteps = [
  {
    title: "Hostel uploads available food",
    copy: "Mess teams add photos, quantity, pickup window, and dietary tags in under a minute.",
    icon: UtensilsCrossed,
  },
  {
    title: "AI estimates quantity and freshness",
    copy: "Computer vision and rules-based checks estimate servings, shelf life, and safe handling priority.",
    icon: BrainCircuit,
  },
  {
    title: "Nearest NGO gets notified",
    copy: "Smart matching ranks NGOs by distance, capacity, urgency, and verified availability.",
    icon: MapPinned,
  },
  {
    title: "Food reaches people in need",
    copy: "Pickup, route, handoff, photos, and impact certificates are tracked end to end.",
    icon: ShieldCheck,
  },
];

export const aiFeatures = [
  { title: "Food Quantity Prediction", icon: BrainCircuit, copy: "Forecast surplus by menu, attendance, seasonality, exams, and local events." },
  { title: "Smart NGO Matching", icon: Sparkles, copy: "Prioritizes verified partners who can collect safely within the freshness window." },
  { title: "Route Optimization", icon: Route, copy: "Clusters pickups and drop-offs to reduce time, cost, and emissions." },
  { title: "Food Freshness Detection", icon: ScanSearch, copy: "Flags risk levels from image cues, time prepared, packaging, and storage context." },
  { title: "AI Analytics Dashboard", icon: BarChart3, copy: "Turns every donation into operational insights, certificates, and CSR reports." },
  { title: "AI Assistant Chatbot", icon: Bot, copy: "Guides mess managers, volunteers, and NGO coordinators through live workflows." },
];

export const stories = [
  {
    quote: "FoodBridge AI helped our hostel turn a daily waste problem into a campus pride movement.",
    name: "Anika Rao",
    role: "Hostel Warden, Pune",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
    metric: "18,400 meals saved",
  },
  {
    quote: "The matching system lets us accept food confidently because freshness and pickup timing are already clear.",
    name: "Farhan Khan",
    role: "NGO Operations Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
    metric: "42 partner hostels",
  },
  {
    quote: "Volunteering feels meaningful because every pickup has proof, route clarity, and a human story.",
    name: "Meera Joseph",
    role: "Student Volunteer",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=320&q=80",
    metric: "760 families reached",
  },
];

export const partners = [
  "Seva Kitchen",
  "Green Plate",
  "NSS Campus",
  "Hope Meals",
  "Aarogya Trust",
  "Bright Hostels",
  "CSR Circle",
  "City Relief",
  "CareCart",
  "Campus Canteens",
];

export const environmentalMetrics = [
  { label: "CO2 emissions prevented", value: "214 t", icon: Leaf },
  { label: "Water resources saved", value: "18.7M L", icon: Recycle },
  { label: "Safe meals redistributed", value: "128k+", icon: UtensilsCrossed },
];

export const liveDonations = [
  { from: "Veda Hostel", to: "Hope Meals", meals: 164, x: "21%", y: "42%" },
  { from: "North Campus Mess", to: "Seva Kitchen", meals: 92, x: "58%", y: "28%" },
  { from: "Bright Canteen", to: "City Relief", meals: 236, x: "72%", y: "62%" },
];

export const audienceCards = [
  { title: "Hostels", icon: Building2, copy: "Reduce waste, earn verified impact reports, and make students proud of campus values." },
  { title: "NGOs", icon: HeartHandshake, copy: "Receive timely, safe, trackable food leads with pickup windows and route support." },
  { title: "Colleges", icon: ShieldCheck, copy: "Build a transparent sustainability program for audits, CSR, and community trust." },
];
