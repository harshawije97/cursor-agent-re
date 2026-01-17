"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/**
 * Header Component (Auralink)
 * Generated from structured UI configuration.
 */
const Header = () => {
    // Hooks defined in JSON
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Data mapping from 'links' and 'cta'
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
    ];

    // Effect hook for scroll handling logic
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Utility Functions
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleLinkClick = (href: string) => {
        closeMobileMenu();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav id="nav-bar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div id="nav-container-001" className="max-w-7xl mx-auto px-6 lg:px-8">
                <div id="nav-container-002" className="flex items-center justify-between h-20">

                    {/* Brand Section */}
                    <div id="nav-brand" className="shrink-0">
                        <button
                            id="nav-brand-button"
                            onClick={() => handleLinkClick("#home")}
                            className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
                            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                            <span id="nav-brand-name" style={{ fontFamily: "Figtree", fontWeight: 800 }}>
                                Auralink
                            </span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div id="nav-links" className="hidden md:block">
                        <div id="nav-links-container" className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    id={`nav-link-${link.label}`}
                                    key={link.label}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                                    style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400 }}
                                >
                                    <span id={`nav-link-label-${link.label}`}>{link.label}</span>
                                    {/* Underline Animation */}
                                    <div id={`nav-link-underline-${link.label}`} className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div id="nav-cta" className="hidden md:block">
                        <button
                            id="nav-cta-button"
                            onClick={() => handleLinkClick("#contact")}
                            className="bg-[#156d95] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#156d95]/90 transition-all duration-200 shadow-sm"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                fontWeight: 500
                            }}
                        >
                            Start Free Trial
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div id="nav-toggle" className="md:hidden">
                        <button
                            id="nav-toggle-button"
                            onClick={toggleMobileMenu}
                            className="text-foreground hover:text-primary p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Collapse Animation) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="nav-mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
                    >
                        <div id="nav-mobile-menu-container" className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    id="nav-mobile-menu-link"
                                    key={link.label}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
                                    style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400 }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div id="nav-mobile-menu-cta" className="pt-4 border-t border-border">
                                <button
                                    id="nav-mobile-menu-cta-button"
                                    onClick={() => handleLinkClick("#contact")}
                                    className="w-full bg-[#156d95] text-white py-3 rounded-full text-base font-semibold"
                                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                >
                                    Start Free Trial
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;