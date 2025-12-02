import React, { useState, useEffect } from "react";
import {
    Menu, X, Zap, Lock, TrendingUp, Bitcoin, Gift, ArrowRight,
    ShieldCheck, Globe, CreditCard, Smartphone, Star, ChevronRight,
    CheckCircle2, ExternalLink, MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const whatsappNumber = "2347018524347"; 
    const whatsappMessage = encodeURIComponent("Hi! I'm interested in TME-Xchange services.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT US", href: "#aboutus" },
        { name: "OFFERINGS", href: "#offerings" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <motion.nav
        initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={(
                "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.a href="#" 
                    whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold tracking-tight text-white">
                            TME-<span className="text-yellow-400">Xchange</span>
                        </span>
                    </motion.a>


                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm font-bold tracking-wide text-gray-300 hover:text-yellow-400 transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                            </motion.a>
                        ))}
                        <div className="flex items-center space-x-3">
                            <motion.a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                                Trade Now
                            </motion.a>
                            <motion.button
                            whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById("works").scrollIntoView({ behavior: "smooth" })}
                                className="px-6 py-2.5 bg-transparent border border-yellow-600 text-white font-bold rounded-full hover:bg-yellow-500 hover:text-black transition-all"
                            >
                                Rates
                            </motion.button>
                        </div>
                    </div>

                    <motion.button
                    whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
            {mobileMenuOpen && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black border-b border-white/10 overflow-hidden animate-in slide-in-from-top-5 duration-300">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-lg font-medium text-gray-300 hover:text-yellow-400"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                 className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl mt-4 block text-center">
                            Trade Now
                        </motion.a>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
    );
};

function ScrollingCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            name: "Bitcoin",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
            bg: "from-orange-500/20 to-yellow-500/20"
        },
        {
            name: "Apple Gift Card",
            image: "https://i.pinimg.com/736x/39/d8/9d/39d89dcfb1fbbe74dea5192b4010e81c.jpg",
            bg: "from-gray-500/20 to-gray-700/20"
        },
        {
            name: "Google Play",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png",
            bg: "from-blue-500/20 to-green-500/20"
        },
        {
            name: "E-Transfer",
            image: "https://i.pinimg.com/736x/80/7d/a4/807da473fffa82d1b2fc836f31a2e29c.jpg",
            bg: "bg-zinc-800"
        },
        {
            name: "Amazon Gift Card",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
            bg: "from-yellow-500/20 to-orange-600/20"
        },
        {
            name: "Steam Card",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
            bg: "from-blue-600/20 to-gray-600/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            <div className="relative w-80 h-96">
                <AnimatePresence mode="sync">
                {cards.map((card, idx) => {

                    let position = (idx - currentIndex + cards.length) % cards.length;

                    let isActive = position === 0;
                    let isRight = position === 1;
                    let isLeft = position === cards.length - 1;

                    let className = "absolute inset-0 transition-all duration-700 ease-in-out transform";
                    let style = {};

                    if (isActive) {
                        style = { transform: "translateX(0) scale(1)", zIndex: 20, opacity: 1 };
                    } else if (isRight) {
                        style = { transform: "translateX(100%) scale(0.8) rotate(10deg)", zIndex: 10, opacity: 0.5 };
                    } else if (isLeft) {
                        style = { transform: "translateX(-100%) scale(0.8) rotate(-10deg)", zIndex: 10, opacity: 0.5 };
                    } else {
                        style = { transform: "translateX(0) scale(0)", zIndex: 0, opacity: 0 };
                    }

                    return (
                        <motion.div 
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                key={idx} className={className} style={style}>
                            <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${card.bg} backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8`}>
                                <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}className="w-40 h-40 mb-6 relative">
                                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </motion.div>
                                <div className="text-white font-bold text-2xl text-center">{card.name}</div>
                                <motion.div 
                                initial={{ scale: 0 }}
                                        animate={{ scale: isActive ? 1 : 0.8 }}
                                        className="mt-4 px-4 py-1 rounded-full bg-white/10 text-xs font-mono text-yellow-400 border border-yellow-400/30">
                                    INSTANT TRADE
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
                </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {cards.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-yellow-400 w-8' : 'bg-slate-600'}`}
                    />
                ))}
            </div>
        </div>
    );
}

const Hero = () => {
    const whatsappNumber = "2347018524347"; 
    const whatsappMessage = encodeURIComponent("Hi! I want to get started with TME-Xchange.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-black to-black" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-8"
                        >
                            <span className="text-yellow-400 text-sm font-semibold">Fast. Secure. Reliable.</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight mb-6"
                        >
                            Exchange confidently with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                TME-Xchange
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
                        >
                            In the world of digital arbitrage and exchange, cash flow is king. Our platform is built to maximize your liquidity, offering instant settlements for Gift Cards, e-Transfers, and digital wallet transactions.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300 transition-all flex items-center gap-2"
                            >
                                Get Started <ArrowRight size={20} />
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" })}
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:border-white/40 transition-all hover:bg-white/5"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
                        >
                            {[
                                { value: "X10", label: "Trading Volume" },
                                { value: "500+", label: "Satisfied Clients" },
                                { value: "24/7", label: "Support" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <ScrollingCards />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Marquee = () => {
    return (
        <div className="bg-yellow-400 py-4 overflow-hidden relative z-20 border-y border-black">
            <motion.div 
                animate={{ x: [0, -1920] }}
                transition={{ 
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex whitespace-nowrap"
            >
                {[...Array(4)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="mx-8 text-xl font-bold text-black flex items-center">
                            ANNOUNCEMENT: All Payment Method Available!
                        </span>
                        <span className="mx-8 text-xl font-bold text-black flex items-center">
                            All rates are subject to change. Please contact our admin to get updated rates. Thank you!
                        </span>
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            icon: <Zap className="w-10 h-10 text-yellow-400" />,
            title: "Lightning Fast",
            desc: "Instant settlements mean your funds are available immediately. No more waiting days for payouts."
        },
        {
            icon: <Lock className="w-10 h-10 text-yellow-400" />,
            title: "Bank-Level Security",
            desc: "Enterprise-grade encryption and multi-layer security protocols protect every transaction."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
            title: "Best Rates",
            desc: "Competitive rates that put more money in your pocket. We constantly monitor the market for you."
        }
    ];

    return (
        <section id="aboutus" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-yellow-400">TME-Xchange?</span></h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing digital asset exchange with unmatched speed, security, and reliability.
                        We believe that accessing your money shouldn't be a waiting game. By combining cutting-edge encryption with an intuitive, user-friendly interface, we've built the ultimate bridge for your financial needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-400/10"
                        >
                            <motion.div 
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="w-20 h-20 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors"
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AssetPill = ({ name, symbol, color }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
        <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`}></div>
        <span className="text-sm font-medium text-gray-300">{name}</span>
        {symbol && <span className="text-xs text-gray-500 font-mono">{symbol}</span>}
    </div>
);

const Offerings = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="offerings" className="py-24 bg-zinc-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl">
                        <motion.div 
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Zap size={14} />
                            <span>Instant Exchange</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Exchange</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
                            Trade all major gift cards, cryptocurrencies, and digital assets with confidence in a secure, high-liquidity environment.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-black border border-yellow-500/30 backdrop-blur-sm p-8 hover:border-yellow-400 transition-all duration-500"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Bitcoin size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                                <Bitcoin className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Cryptocurrency</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">Trade Bitcoin, Ethereum, USDT, and other leading digital assets.</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <AssetPill name="Bitcoin" symbol="BTC" color="text-orange-400" />
                                <AssetPill name="Ethereum" symbol="ETH" color="text-purple-400" />
                                <AssetPill name="Tether" symbol="USDT" color="text-emerald-400" />
                                <AssetPill name="Solana" symbol="SOL" color="text-indigo-400" />
                                <AssetPill name="Binance" symbol="BNB" color="text-yellow-400" />
                                <div className="flex items-center justify-center text-xs font-semibold text-gray-500 border border-white/10 rounded-lg bg-white/5">
                                    +12 More
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="md:col-span-5 relative h-full min-h-[300px] rounded-3xl overflow-hidden group border border-white/10 hover:border-yellow-400/30 transition-all duration-500"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/25/37/7b/25377b1620c3da9bdf557c78ecda6da1.jpg"
                            alt="Digital Asset Flow"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
                            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                                <ShieldCheck size={20} />
                                <span>Secure Escrow</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Bank-Grade Security</h3>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="md:col-span-5 relative group overflow-hidden rounded-3xl bg-black border border-white/10 backdrop-blur-sm p-8 hover:border-blue-400/50 transition-all duration-500"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Gift size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <Gift className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Gift Cards</h3>
                            <p className="text-gray-400 mb-6">High rates for iTunes, Amazon, Steam, and Google Play.</p>
                            <div className="flex flex-wrap gap-2">
                                {['Amazon', 'Apple', 'Steam', 'Google Play'].map((card, idx) => (
                                    <AssetPill key={idx} name={card} color="text-blue-400" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="rounded-3xl bg-black border border-white/10 hover:border-cyan-400/50 p-8 flex flex-col justify-between hover:bg-white/5 transition-all duration-300"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Globe className="text-cyan-400 mb-4" size={40} />
                            <div>
                                <h4 className="text-xl font-bold">Global Access</h4>
                                <p className="text-sm text-gray-400 mt-2">Accepting cards from USD, GBP, EUR, CAD, and AUD.</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="rounded-3xl bg-black border border-white/10 hover:border-emerald-400/50 p-8 flex flex-col justify-between hover:bg-white/5 transition-all duration-300"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <CreditCard className="text-emerald-400 mb-4" size={40} />
                            <div>
                                <h4 className="text-xl font-bold">Instant Payouts</h4>
                                <p className="text-sm text-gray-400 mt-2">Direct deposits to your bank account or crypto wallet.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <span className="text-xl font-bold tracking-tighter flex items-center gap-1"><Smartphone size={20} /> CashApp</span>
                    <span className="text-xl font-bold tracking-widest font-serif">ZEELLE</span>
                    <span className="text-xl font-bold italic font-mono text-blue-400">PayPal</span>
                    <span className="text-xl font-bold tracking-tight text-orange-400">Mastercard</span>
                    <span className="text-xl font-bold flex items-center gap-1"><div className="w-4 h-4 rounded-full bg-red-500"></div> Visa</span>
                </motion.div>
            </div>
        </section>
    );
};

const HowItWorks = () => {
    const stepVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section id="works" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">How It <span className="text-yellow-400">Works</span></h2>
                </motion.div>

                <div className="relative">
                    <motion.div 
                        className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent -translate-y-1/2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Connect", desc: "Connect in minutes with just a link and meet with our verified admin" },
                            { step: "02", title: "Select Asset", desc: "Choose from our wide range of supported cards, bank transactions and crypto" },
                            { step: "03", title: "Get Quote", desc: "See real-time rates before you commit" },
                            { step: "04", title: "Instant Payout", desc: "Receive your funds immediately" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                custom={idx}
                                variants={stepVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className="relative bg-black z-10 flex flex-col items-center text-center p-6 group"
                            >
                                <motion.div 
                                    className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-yellow-400 flex items-center justify-center text-3xl font-bold text-yellow-400 mb-6 shadow-[0_0_20px_rgba(250,204,21,0.2)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-shadow"
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {item.step}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Reviews = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const reviews = [
        {
            name: "Adesegun Olaleye",
            rating: 5,
            review: "The instant payouts are a game-changer. I've tried other platforms, but nothing comes close to this level of efficiency. E sharp no be joke!"
        },
        {
            name: "Destiny Gift",
            rating: 5,
            review: "Best rates in the market, hands down. I've been using TME-Xchange for 6 months now and the customer service is exceptional. They respond within minutes, even at odd hours."
        },
        {
            name: "Omoja Adewale",
            role: "Vendor",
            rating: 5,
            review: "Highly recommend for anyone serious about digital trading."
        },
        {
            name: "HeadBoy Crypto",
            rating: 5,
            review: "I've processed over $1k through TME-Xchange this year. Zero issues. The platform is reliable, fast, and the rates are consistently competitive. This is my go-to exchange platform."
        },
        {
            name: "Danny Chaze",
            role: "Freelancer",
            rating: 5,
            review: "As someone who receives payments in gift cards, TME-Xchange has made it so easy to convert them to cash instantly."
        },
        {
            name: "Kehinde O",
            role: "BTC",
            rating: 5,
            review: " I love that I can see and discuss real-time rates before making a trade. TME-Xchange has earned my complete trust and loyalty."
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-zinc-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-yellow-400">Clients Say</span></h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what real users have to say about TME-Xchange.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:border-yellow-400/30"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.review}"</p>
                            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white">{review.name}</p>
                                    {review.role && <p className="text-xs text-gray-500">{review.role}</p>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-gray-400 font-semibold">TRUSTED BY 500+ USERS</div>
                    <div className="text-gray-400">•</div>
                    <div className="text-gray-400 font-semibold">4.9/5 AVERAGE RATING</div>
                </motion.div>
            </div>
        </section>
    );
};


 const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-yellow-400">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Have questions? We're here to help 24/7.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow-400/5 blur-[100px] pointer-events-none" />

                    <form 
                        onSubmit={handleSubmit}
                        className="relative z-10 space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-yellow-400 text-white placeholder-gray-500 transition-colors"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-yellow-400 text-white placeholder-gray-500 transition-colors"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-yellow-400 text-white placeholder-gray-500 transition-colors"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>
                        {success && (
                            <p className="text-green-500 text-sm font-medium">{success}</p>
                        )}
                        <button type="submit" className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full transition transform hover:scale-105 shadow-lg shadow-yellow-600/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
                        <a href="#" className="text-2xl font-bold tracking-tight text-white mb-4 block">
                            TME-<span className="text-yellow-400">Xchange</span>
                        </a>
                        <p className="text-gray-400 max-w-sm">
                            Your trusted partner in digital asset exchange. Fast, secure, and reliable.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                            <li><a href="#aboutus" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                            <li><a href="#offerings" className="hover:text-yellow-400 transition-colors">Offerings</a></li>
                            <li><a href="#reviews" className="hover:text-yellow-400 transition-colors">Reviews</a></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="font-bold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-500 text-sm">© 2025 TME-Xchange. All rights reserved.</p>
                    <p className="text-gray-500 text-sm">Developed by Akinremi Daniel</p>
                </motion.div>
            </div>
        </footer>
    );
};


function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Features />
                <Offerings />
                <HowItWorks />
                <Reviews />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;