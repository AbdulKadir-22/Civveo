import React, { useState } from 'react';
import { Search, MapPin, ShoppingBag, User, Store, Check, ArrowRight, Instagram, Send } from 'lucide-react';
import { joinWaitlist } from './apiService'; // Make sure path matches

export default function CivveoReplicated() {
  // --- STATE MANAGEMENT ---
  const [topEmail, setTopEmail] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [role, setRole] = useState('customer'); // Default for bottom form
  const [loading, setLoading] = useState(false);

  // --- HANDLERS ---
  const handleJoin = async (emailToUse, roleToUse) => {
    if (!emailToUse) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const result = await joinWaitlist(emailToUse, roleToUse);
      alert(result.message); // "Welcome to the Civveo waitlist!"
      
      // Clear inputs on success
      setTopEmail('');
      setBottomEmail('');
    } catch (error) {
      alert(error.message); // e.g., "You are already on the list!"
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#050b09] text-white min-h-screen font-sans selection:bg-[#00ff9d] selection:text-[#050b09]">
      
      {/* Background Gradients/Glows - Global */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00ff9d] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[#00ff9d] opacity-[0.02] blur-[150px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00ff9d] rounded-full flex items-center justify-center relative shadow-[0_0_15px_rgba(0,255,157,0.3)]">
            <div className="w-5 h-5 border-[3px] border-[#050b09] rounded-full"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight">Civveo</span>
        </div>
        <button 
          onClick={() => document.getElementById('bottom-form').scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#00ff9d] text-[#050b09] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#00e68a] hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Join Waitlist
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-16 pb-32 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative">
        <div className="z-10">
          <h1 className="text-5xl md:text-[4rem] leading-[1.1] font-bold mb-6 tracking-tight">
            Find products available near you
            <span className="relative inline-block ml-3 text-[#00ff9d]">
              instantly.
              {/* Squiggle SVG */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#00ff9d]" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                <path d="M0 10 Q 25 20 50 10 T 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            Stop guessing. Discover what local shops around you actually have, before you step out. <span className="text-gray-200 font-medium">Launching soon in India.</span>
          </p>
          
          {/* --- TOP FORM INTEGRATION --- */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex-1 bg-[#0d1412] border border-gray-800 focus-within:border-[#00ff9d] rounded-xl px-4 py-4 flex items-center gap-3 transition-colors">
              <div className="text-gray-500"><Send size={18} /></div>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-transparent outline-none flex-1 text-white placeholder-gray-600 text-sm"
                value={topEmail}
                onChange={(e) => setTopEmail(e.target.value)}
              />
            </div>
            <button 
              onClick={() => handleJoin(topEmail, 'customer')}
              disabled={loading}
              className="bg-[#00ff9d] text-[#050b09] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#00e68a] transition shadow-[0_0_15px_rgba(0,255,157,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-4 font-medium tracking-wide">NO SPAM. UNSUBSCRIBE ANYTIME.</p>
        </div>
        
        {/* Right Side Visual - Map Effect */}
        <div className="relative h-[500px] w-full bg-gradient-to-b from-[#0d1613] to-[#050b09] rounded-3xl border border-gray-800 overflow-hidden group">
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
          </div>
          
          {/* Radar Sweep Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,157,0.1)_60deg,transparent_60deg)] animate-spin opacity-30 rounded-full pointer-events-none blur-xl"></div>
          
          {/* Floating Cards */}
          <div className="absolute top-[30%] left-[10%] right-[10%] flex flex-col gap-4">
             {/* Card 1 */}
            <div className="bg-[#0a120f]/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl flex items-center gap-4 shadow-2xl transform transition-all hover:scale-105 cursor-default">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                 <span className="text-black font-bold text-xs">NIKE</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm">Nike Air Zoom</h4>
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded">In Stock</span>
                  <span className="text-xs text-gray-400">• 0.8km away</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0a120f]/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl flex items-center gap-4 shadow-2xl ml-12 transform transition-all hover:scale-105 cursor-default">
              <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                 <span className="text-white font-bold text-xs">WATCH</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm">Galaxy Watch 4</h4>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded">In Stock</span>
                  <span className="text-xs text-gray-400">• 1.2km away</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-3">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Old Way</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            People search online, walk into stores with screenshots, and still can't find what's actually available nearby.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Endless Searching", desc: "Scouring multiple websites without finding accurate local stock information.", icon: Search },
            { title: "Wasted Trips", desc: "Walking into stores with screenshots, only to be told \"it's out of stock.\"", icon: MapPin },
            { title: "Inventory Uncertainty", desc: "Never truly knowing if the item is actually sitting on the shelf right now.", icon: ShoppingBag }
          ].map((item, i) => (
            <div key={i} className="bg-[#0d1412] border border-gray-800/60 p-8 rounded-2xl hover:border-gray-700 transition-colors group">
              <div className="w-14 h-14 bg-[#141f1c] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a2924] transition-colors">
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Solution Section */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto bg-[#080f0d] rounded-3xl border border-gray-800/50 relative overflow-hidden">
        {/* Decorative background blur inside container */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00ff9d]/5 to-transparent pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-3">The Solution</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Civveo</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Civveo bridges the gap between online search and offline buying. Users discover nearby product availability instantly, and local shops get visibility.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Search products near you", desc: "Find exactly what you need in your neighbourhood instantly." },
                { title: "See shop location instantly", desc: "Get precise directions and walk in immediately to buy." },
                { title: "Trust real reviews", desc: "Rely on feedback from real local shoppers, not bots." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 bg-[#00ff9d] rounded flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,255,157,0.3)]">
                    <Check className="w-3.5 h-3.5 text-[#050b09] stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#00ff9d] transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
                {/* Chat Bubble Interface */}
                <div className="bg-[#0d1412] border border-gray-800 rounded-2xl p-6 relative">
                    {/* User Bubble */}
                    <div className="flex justify-end mb-6">
                        <div className="bg-[#1a2924] text-gray-200 px-5 py-3 rounded-2xl rounded-tr-sm text-sm border border-gray-700">
                            Where can I buy a USB-C hub nearby?
                        </div>
                    </div>

                    {/* System Bubble */}
                    <div className="flex justify-start">
                         <div className="bg-[#00ff9d] text-[#050b09] rounded-2xl rounded-tl-sm p-4 w-full shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                            <div className="flex items-center gap-3 border-b border-[#050b09]/10 pb-3 mb-3">
                                <Store className="w-6 h-6" />
                                <div>
                                    <p className="font-bold text-sm">TechZone Electronics</p>
                                    <p className="text-xs opacity-80">0.4km away • Open now</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold bg-[#050b09]/10 px-2 py-1 rounded">In Stock: 3 left</span>
                                <span className="text-xs font-bold flex items-center gap-1">Get Directions <ArrowRight size={12}/></span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Green Line Connection */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[40px] bg-gradient-to-b from-transparent via-[#00ff9d] to-transparent opacity-50"></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Center Aligned */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-3">How it Works</p>
            <h2 className="text-4xl font-bold">Simple as 1–2–3</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent -z-10"></div>
            
             {[
                { title: "Search a product", desc: "Enter what you're looking for in the app.", icon: Search },
                { title: "Find nearby shops", desc: "See who has it in stock within minutes.", icon: MapPin },
                { title: "Walk in & buy", desc: "Go to the store and purchase instantly.", icon: ShoppingBag }
             ].map((step, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                     <div className="w-20 h-20 bg-[#0d1412] border border-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg relative group">
                        <div className="absolute inset-0 bg-[#00ff9d] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500"></div>
                        <step.icon className="w-8 h-8 text-[#00ff9d]" />
                     </div>
                     <h3 className="text-xl font-bold mb-2">{i+1}. {step.title}</h3>
                     <p className="text-gray-400 text-sm max-w-xs">{step.desc}</p>
                 </div>
             ))}
        </div>
      </section>

      {/* Built for Everyone Section */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Built for Everyone</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customers Card */}
          <div className="bg-[#0d1412] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff9d]/30 transition-colors">
            <div className="w-12 h-12 bg-[#141f1c] rounded-lg flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-6">For Customers</h3>
            <div className="space-y-4">
              {[
                "Fast discovery, no delivery wait",
                "Trusted local shops",
                "Save on shipping costs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00ff9d] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Shopkeepers Card */}
          <div className="bg-[#0d1412] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff9d]/30 transition-colors">
            <div className="w-12 h-12 bg-[#141f1c] rounded-lg flex items-center justify-center mb-6">
              <Store className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-6">For Shopkeepers</h3>
            <div className="space-y-4">
              {[
                "Instant digital presence",
                "Increase local footfall",
                "Simple inventory listings"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00ff9d] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="bottom-form" className="px-6 md:px-12 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Be the first to use <span className="text-[#00ff9d]">Civveo</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join the revolution of hyperlocal shopping. Early access members get exclusive perks.
        </p>
        
        {/* --- BOTTOM FORM INTEGRATION --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="name@example.com"
            className="flex-1 bg-[#0d1412] border border-gray-800 rounded-xl px-5 py-4 outline-none text-white placeholder-gray-500 focus:border-[#00ff9d] transition-colors"
            value={bottomEmail}
            onChange={(e) => setBottomEmail(e.target.value)}
          />
          <button 
            onClick={() => handleJoin(bottomEmail, role)}
            disabled={loading}
            className="bg-[#00ff9d] text-[#050b09] px-8 py-4 rounded-xl font-bold hover:bg-[#00e68a] transition shadow-[0_0_15px_rgba(0,255,157,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : 'Get Early Access'}
          </button>
        </div>
        
        {/* --- RADIO BUTTON INTEGRATION --- */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <input 
              type="radio" 
              name="user-type" 
              className="accent-[#00ff9d] w-4 h-4" 
              checked={role === 'customer'}
              onChange={() => setRole('customer')}
            />
            <span>I'm a customer</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <input 
              type="radio" 
              name="user-type" 
              className="accent-[#00ff9d] w-4 h-4" 
              checked={role === 'shopkeeper'}
              onChange={() => setRole('shopkeeper')}
            />
            <span>I own a shop</span>
          </label>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 border-t border-gray-800/50 mt-12 bg-[#030605]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#00ff9d] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-[#050b09] rounded-full"></div>
             </div>
             <div className="flex flex-col">
                <span className="font-bold leading-tight">Civveo</span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide">© 2024 Civveo Inc.</span>
             </div>
          </div>
          
          <div className="flex gap-4">
            {[Instagram, Send].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/abdul.kadir_001/" target="_blank" className="w-10 h-10 bg-[#0d1412] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                    <Icon size={18} />
                </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}