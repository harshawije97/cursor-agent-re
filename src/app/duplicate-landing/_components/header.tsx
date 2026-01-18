/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarConfig {
    type: string;
    position: string;
    zIndex: number;
    behavior: {
        scrollBackground: {
            whenScrolled: string;
            default: string;
        };
    };
    container: {
        maxWidth: string;
        padding: string[];
        height: string;
    };
    brand: {
        label: string;
        action: string;
        styles: {
            button: {
                className: string;
                fontFamily: string;
            };
            text: {
                fontFamily: string;
                fontWeight: number;
            };
        };
    };
    navigation: {
        desktop: {
            visibleFrom: string;
            layout: string;
            gap: string;
            item: {
                className: string;
                fontFamily: string;
                fontWeight: number;
                underline: {
                    enabled: boolean;
                    className: string;
                };
            };
        };
        mobile: {
            visibleUntil: string;
            toggleIcon: {
                open: string;
                closed: string;
            };
        };
    };
    links: Array<{ label: string; href: string }>;
    cta: {
        label: string;
        href: string;
        variant: string;
        styles: {
            background: string;
            hover: string;
            textColor: string;
            rounded: string;
            fontFamily: string;
            fontWeight: number;
        };
    };
    mobileMenu: {
        animation: {
            type: string;
            duration: number;
            easing: string;
        };
        containerClass: string;
        itemClass: string;
    };

}

const Header = ({ config }: { config: NavbarConfig }) => {
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

    // ${config.position}

    // Mapping the classnames for styling
    const navBarClass = `w-full top-0 left-0 right-0 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`;

    const containerClass = `max-w-7xl mx-auto px-6 lg:px-8`;

    return (
        <nav id="nav-bar" className={navBarClass} style={{ zIndex: config.zIndex }}>
            <div id="nav-container-001" className={containerClass}>
                <div id="nav-container-002" className={`flex items-center justify-between ${config.container.height}`}>

                    {/* Brand Section */}
                    <div id="nav-brand" className="shrink-0">
                        <button
                            id="nav-brand-button"
                            onClick={() => handleLinkClick(config.brand.action)}
                            className={config.brand.styles.button.className}
                            style={{ fontFamily: config.brand.styles.button.fontFamily }}
                        >
                            <span
                                id="nav-brand-name"
                                style={{
                                    fontFamily: config.brand.styles.text.fontFamily,
                                    fontWeight: config.brand.styles.text.fontWeight
                                }}
                            >
                                {config.brand.label}
                            </span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div id="nav-links" className={`hidden ${config.navigation.desktop.visibleFrom}:block`}>
                        <div id="nav-links-container" className={`ml-10 flex items-baseline ${config.navigation.desktop.gap}`}>
                            {config.links.map((link) => (
                                <button
                                    id={`nav-link-${link.label}`}
                                    key={link.label}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={config.navigation.desktop.item.className}
                                    style={{
                                        fontFamily: config.navigation.desktop.item.fontFamily,
                                        fontWeight: config.navigation.desktop.item.fontWeight
                                    }}
                                >
                                    <span id={`nav-link-label-${link.label}`}>{link.label}</span>
                                    {/* Underline Animation */}
                                    {config.navigation.desktop.item.underline.enabled && (
                                        <div
                                            id={`nav-link-underline-${link.label}`}
                                            className={config.navigation.desktop.item.underline.className}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div id="nav-cta" className={`hidden ${config.navigation.desktop.visibleFrom}:block`}>
                        <button
                            id="nav-cta-button"
                            onClick={() => handleLinkClick(config.cta.href)}
                            className={`px-6 py-3 text-base font-medium transition-all duration-200 shadow-sm ${config.cta.styles.rounded}`}
                            style={{
                                backgroundColor: config.cta.styles.background,
                                color: config.cta.styles.textColor,
                                fontFamily: config.cta.styles.fontFamily,
                                fontWeight: config.cta.styles.fontWeight
                            }}
                        >
                            {config.cta.label}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div id="nav-toggle" className={`${config.navigation.mobile.visibleUntil}:hidden`}>
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
                        transition={{
                            duration: config.mobileMenu.animation.duration,
                            ease: config.mobileMenu.animation.easing as any
                        }}
                        className={`${config.navigation.mobile.visibleUntil}:hidden ${config.mobileMenu.containerClass} overflow-hidden`}
                    >
                        <div id="nav-mobile-menu-container" className="px-6 py-6 space-y-4">
                            {config.links.map((link) => (
                                <button
                                    id="nav-mobile-menu-link"
                                    key={link.label}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={config.mobileMenu.itemClass}
                                    style={{
                                        fontFamily: config.navigation.desktop.item.fontFamily,
                                        fontWeight: config.navigation.desktop.item.fontWeight
                                    }}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div id="nav-mobile-menu-cta" className="pt-4 border-t border-border">
                                <button
                                    id="nav-mobile-menu-cta-button"
                                    onClick={() => handleLinkClick(config.cta.href)}
                                    className={`w-full py-3 text-base font-semibold ${config.cta.styles.rounded}`}
                                    style={{
                                        backgroundColor: config.cta.styles.background,
                                        color: config.cta.styles.textColor,
                                        fontFamily: config.cta.styles.fontFamily
                                    }}
                                >
                                    {config.cta.label}
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