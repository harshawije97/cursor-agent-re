export const headerComponent = {
  "imports": {
    "modules": ["framer-motion", "react", "lucide-react"],
    "alias": {
      "framer-motion": ["motion", "AnimatePresence"],
      "lucide-react": ["Menu", "X"],
      "react": ["useState", "useEffect"]
    }
  },
  "data": {
    "navigationLinks": [
      {
        "name": "Features",
        "href": "#features"
      },
      {
        "name": "Pricing",
        "href": "#pricing"
      },
      {
        "name": "Solutions",
        "href": "#solutions"
      },
      {
        "name": "Resources",
        "href": "#resources"
      }
    ]
  },
  "body": {
    "name": "PortfolioNavbar",
    "hooks": [
      {
        "useState": [
          "isMobileMenuOpen",
          "setIsMobileMenuOpen",
          "isScrolled",
          "setIsScrolled"
        ]
      },
      {
        "useEffect": [
          {
            "body": "const handleScroll = () => {\n\t\tsetIsScrolled(window.scrollY > 20)\n\t}\n\twindow.addEventListener(\"scroll\", handleScroll)\n\treturn () => window.removeEventListener(\"scroll\", handleScroll)",
            "callback": []
          }
        ]
      }
    ],
    "functions": {
      "toggleMobileMenu": "const toggleMobileMenu = () => {\n\tsetIsMobileMenuOpen(!isMobileMenuOpen)\n}",
      "closeMobileMenu": "const closeMobileMenu = () => {\n\tsetIsMobileMenuOpen(false)\n}",
      "handleLinkClick": {
        "arguments": "href",
        "body": "closeMobileMenu()\nconst element = document.querySelector(href)\nif (element) {\n\telement.scrollIntoView({\n\t\tbehavior: \"smooth\",\n\t})\n}"
      }
    },
    "renderedOutput": {
      "type": "navbar",
      "position": "fixed",
      "zIndex": 50,
      "behavior": {
        "scrollBackground": {
          "whenScrolled": "bg-background/95 backdrop-blur-md shadow-sm",
          "default": "bg-transparent"
        }
      },
      "container": {
        "maxWidth": "7xl",
        "padding": ["px-6", "lg:px-8"],
        "height": "h-20"
      },
      "brand": {
        "label": "Auralink",
        "action": "#home",
        "styles": {
          "button": {
            "className": "text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200",
            "fontFamily": "Plus Jakarta Sans, sans-serif"
          },
          "text": {
            "fontFamily": "Figtree",
            "fontWeight": 800
          }
        }
      },
      "navigation": {
        "desktop": {
          "visibleFrom": "md",
          "layout": "horizontal",
          "gap": "space-x-8",
          "item": {
            "className": "text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 relative group",
            "fontFamily": "Figtree, sans-serif",
            "fontWeight": 400,
            "underline": {
              "enabled": true,
              "className": "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
            }
          }
        },
        "mobile": {
          "visibleUntil": "md",
          "toggleIcon": {
            "open": "X",
            "closed": "Menu"
          }
        }
      },
      "links": [
        { "label": "Home", "href": "#home" },
        { "label": "Features", "href": "#features" },
        { "label": "Pricing", "href": "#pricing" }
      ],
      "cta": {
        "label": "Start Free Trial",
        "href": "#contact",
        "variant": "primary",
        "styles": {
          "background": "#156d95",
          "hover": "#156d95/90",
          "textColor": "#ffffff",
          "rounded": "rounded-full",
          "fontFamily": "Plus Jakarta Sans, sans-serif",
          "fontWeight": 500
        }
      },
      "mobileMenu": {
        "animation": {
          "type": "collapse",
          "duration": 0.3,
          "easing": "easeInOut"
        },
        "containerClass": "bg-background/95 backdrop-blur-md border-t border-border",
        "itemClass": "block w-full text-left text-foreground hover:text-primary py-3 text-lg font-medium transition-colors duration-200"
      }
    }
  },
  "output_format": {
    "style": "clean, modern UI",
    "constraints": [
      "Include security best practices",
      "Do not use LaTeX for non-technical prose"
    ]
  },
  "technologies": ["React", "Tailwind CSS"]
}
