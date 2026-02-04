import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, ShieldCheck, 
  Award, Layers, Phone, Mail, MapPin, 
  Instagram, Facebook, ArrowRight,
  Box, Briefcase, GraduationCap, HardHat,
  Flag, Zap, MessageCircle, ChevronDown
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  // Data Kontak & Lokasi Update
  const contactInfo = {
    name: "Haerudin",
    phone: "6287824858765",
    displayPhone: "+62 878-2485-8765",
    waLink: "https://wa.me/6287824858765?text=Halo%20Pak%20Haerudin,%20saya%20tertarik%20untuk%20konsultasi%20produksi%20di%20Amanah%20Konveksi.",
    mapLink: "https://maps.app.goo.gl/8yFZWDGjfEBhA7xPA"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'All', label: 'Semua Produk', icon: <Box className="w-4 h-4" /> },
    { id: 'Industrial', label: 'Industrial & Wearpack', icon: <HardHat className="w-4 h-4" /> },
    { id: 'Corporate', label: 'Kemeja & Batik', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'Lifestyle', label: 'T-Shirt & Jacket', icon: <Zap className="w-4 h-4" /> },
    { id: 'Education', label: 'Sekolah & Olahraga', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'Political', label: 'Atribut Partai', icon: <Flag className="w-4 h-4" /> },
  ];

  const portfolioItems = [
    { id: 1, category: 'Industrial', title: 'Heavy Duty Wearpack', img: "/11.png" },
    { id: 2, category: 'Corporate', title: 'Batik Bold Executive', img: "/3.png" },
    { id: 3, category: 'Lifestyle', title: 'Premium Cotton Polo', img: "/1.png" },
    { id: 4, category: 'Lifestyle', title: 'Modern Graphic Jacket', img: "/8.png" },
    { id: 5, category: 'Education', title: 'Sport Jersey Series', img: "/5.png" },
    { id: 6, category: 'Political', title: 'Mass Production Flags', img: "/16.png" },
    { id: 7, category: 'Corporate', title: 'Kids school uniform', img: "/15.png" },
    { id: 8, category: 'Industrial', title: 'Safety Vest High-Viz', img: "/9.png" },
  ];

  const faqs = [
    { q: "Berapa Minimum Order Quantity (MOQ)?", a: "Kami sangat fleksibel. Untuk seragam kustom, MOQ kami mulai dari 24 pcs. Namun untuk proyek partai besar atau pengadaan tender, kami memiliki kapasitas hingga 10.000 pcs per bulan." },
    { q: "Berapa lama estimasi waktu produksi?", a: "Standar pengerjaan kami adalah 14-21 hari kerja setelah approval sampel. Untuk pesanan express (deadline ketat), silakan konsultasikan dengan tim kami untuk penjadwalan prioritas." },
    { q: "Apakah bisa request sampel dulu?", a: "Tentu. Untuk pesanan di atas 50 pcs, kami menyediakan layanan pembuatan Proofing Sample (sampel fisik) untuk memastikan fitting, material, dan warna sesuai ekspektasi Anda sebelum produksi massal." },
    { q: "Bagaimana sistem pembayarannya?", a: "Kami menerapkan sistem Down Payment (DP) 50% untuk memulai produksi, dan pelunasan dilakukan saat barang siap dikirim. Kami menerima transfer bank perusahaan untuk keamanan transaksi." }
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      
      {/* Floating WhatsApp Button - Tetap Hijau WA */}
      <a 
        href={contactInfo.waLink}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-8 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 flex items-center gap-3 group ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">Hubungi Pak {contactInfo.name}</span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-orange-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-orange-200">AK</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">AMANAH</span>
              <span className="text-xs font-bold tracking-[0.3em] text-orange-600">KONVEKSI</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <a href="#profil" className="text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">Profil</a>
            <a href="#kategori" className="text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">Produk</a>
            <a href="#keunggulan" className="text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">Keunggulan</a>
            <a href="#faq" className="text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">FAQ</a>
            <a href={contactInfo.waLink} className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-black hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg ring-4 ring-slate-100 hover:ring-orange-100">
              HUBUNGI KAMI
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8 text-slate-900" /> : <Menu className="w-8 h-8 text-slate-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 gap-8 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {['Profil', 'Produk', 'Keunggulan', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-slate-900 hover:text-orange-600 border-b border-slate-100 pb-4 flex justify-between items-center group">
              {item} <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" />
            </a>
          ))}
          <a href={contactInfo.waLink} className="bg-orange-600 text-white py-5 rounded-2xl text-center text-xl font-black shadow-xl mt-4">
            Chat WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profil" className="relative pt-32 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        {/* Abstract Background Elements (Orange & Yellow Blobs) */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-[120px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-black uppercase tracking-[0.2em] shadow-sm">
              <ShieldCheck className="w-4 h-4" /> Mitra Terpercaya Jakarta Barat
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-slate-900 tracking-tight">
              Visualisasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 italic">Identitas Anda.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg border-l-4 border-orange-200 pl-6">
              Lebih dari sekadar jahit. Kami memadukan <strong>estetika brand</strong> dengan <strong>presisi manufaktur</strong> untuk menciptakan seragam yang membangun kepercayaan diri.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href={contactInfo.waLink} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group hover:-translate-y-1">
                Konsultasi Gratis <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href={contactInfo.mapLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 px-6 py-4 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 hover:border-orange-200 transition-colors cursor-pointer">
                <MapPin className="text-orange-600 w-8 h-8 p-1.5 bg-orange-100 rounded-lg" />
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Lokasi Workshop</span>
                  <span className="text-sm font-bold text-slate-900">Tanah Sereal, Jak-Bar</span>
                </div>
              </a>
            </div>
          </div>
          <div className="relative group perspective-1000">
            {/* Floating Animation Image */}
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl border-[16px] border-white transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 relative z-10 bg-white">
              <div className="absolute inset-0 bg-orange-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
              <img 
                src="ChatGPT Image Feb 4, 2026, 03_17_02 PM.jpg" 
                alt="Produksi Amanah Konveksi" 
                className="w-full h-full object-cover animate-float"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-10 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 animate-bounce-slow z-20">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-500 fill-yellow-100" />
                <div>
                  <p className="font-black text-slate-900 text-lg">Grade A</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Quality Control</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 max-w-[280px] z-20 animate-bounce-slower">
              <div className="flex -space-x-4 mb-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+5}`} alt="Client" />
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-600 flex items-center justify-center text-white text-xs font-bold">+500</div>
              </div>
              <p className="font-bold text-slate-800 text-sm leading-tight">Dipercaya oleh berbagai perusahaan & komunitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Clients */}
      <div className="bg-slate-900 py-10 overflow-hidden border-y border-slate-800">
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap flex gap-16 px-16">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-2xl font-black text-slate-700 uppercase">Bank BCA</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Pertamina</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Telkom Indonesia</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Universitas Indonesia</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Gojek</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Tokopedia</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Gerindra</span>
                <span className="text-2xl font-black text-slate-700 uppercase">Honda</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Keunggulan Section (Cream Background) */}
      <section id="keunggulan" className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-black text-orange-600 uppercase tracking-[0.4em]">Why Choose Us</h2>
            <h3 className="text-4xl font-black text-slate-900">Standar Baru Konveksi Modern</h3>
            <p className="text-slate-500">Kami meninggalkan cara lama. Amanah Konveksi menggunakan pendekatan manajemen profesional dan teknologi pola terkini.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: <Layers className="w-8 h-8" />, title: "Custom Pattern Tech", desc: "Pola dipotong menggunakan perhitungan software untuk presisi ukuran (sizing) yang akurat dan konsisten." },
               { icon: <Zap className="w-8 h-8" />, title: "Speed & Reliability", desc: "Sistem tracking produksi internal memastikan deadline Anda bukan sekadar janji, tapi jaminan." },
               { icon: <ShieldCheck className="w-8 h-8" />, title: "Double QC Pass", desc: "Setiap helai benang diperiksa. Tidak ada toleransi untuk jahitan lompat atau sisa benang yang berantakan." }
             ].map((feature, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-orange-100 group">
                 <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                   {feature.icon}
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h4>
                 <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Interactive Portfolio */}
      <section id="kategori" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-xs font-black text-orange-600 uppercase tracking-[0.4em]">Katalog Produk</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Koleksi Signature</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id 
                    ? 'bg-slate-900 text-white shadow-lg transform scale-105' 
                    : 'bg-orange-50 text-slate-500 hover:bg-orange-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                  <div className="flex gap-2">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"><ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 font-black tracking-widest uppercase text-xs mb-4">Pertanyaan Umum</h2>
            <h3 className="text-3xl md:text-5xl font-black">Hal yang Sering Ditanyakan</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/50">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg md:text-xl text-slate-200">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openFaq === idx ? 'bg-orange-600 border-orange-600 rotate-180' : 'border-slate-600'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 md:p-8 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-orange-600 to-amber-600 rounded-[60px] p-12 md:p-24 text-center text-white shadow-2xl shadow-orange-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Jangan Biarkan Ide Anda <br />Hanya Menjadi Sketsa.
            </h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">
              Diskusikan kebutuhan garmen Anda dengan Pak {contactInfo.name}. Gratis konsultasi desain dan estimasi biaya tanpa komitmen apapun.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={contactInfo.waLink} className="bg-white text-orange-600 px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> Chat WhatsApp Sekarang
              </a>
              <a href={contactInfo.mapLink} target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                Lihat Lokasi Workshop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Cream Background) */}
      <footer className="bg-orange-50 pt-24 pb-12 border-t border-orange-100 text-slate-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl">AK</div>
                <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Amanah <span className="text-orange-600">Konveksi</span></span>
              </div>
              <div className="text-slate-500 leading-relaxed max-w-sm space-y-2">
                <p>
                  Jalan Pekapuran Lima, Tanah Sereal,<br/>
                  Tambora, Jakarta Barat 11210
                </p>
                <div className="pt-2 border-t border-orange-200 inline-block">
                  <p className="font-bold text-slate-900">CP: Bpk. {contactInfo.name}</p>
                  <p className="font-mono text-orange-600 font-bold">{contactInfo.displayPhone}</p>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href={`mailto:hello@amanahkonveksi.com`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-orange-600 hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Navigasi</h5>
              <ul className="space-y-4 font-medium text-sm">
                <li><a href="#" className="hover:text-orange-600">Beranda</a></li>
                <li><a href="#" className="hover:text-orange-600">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-orange-600">Portofolio</a></li>
                <li><a href="#" className="hover:text-orange-600">Karir</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Legal</h5>
              <ul className="space-y-4 font-medium text-sm">
                <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-orange-200 text-xs font-bold uppercase tracking-widest text-slate-400">
            <p>&copy; 2024 Amanah Konveksi Group.</p>
            <p>Crafted with Precision.</p>
          </div>
        </div>
      </footer>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: float 5s ease-in-out infinite reverse; }
        .animate-bounce-slower { animation: float 7s ease-in-out infinite; }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </div>
  );
};

export default App;