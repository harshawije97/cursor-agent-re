"use client";

import { BankingScaleHero } from '@/components/landing/BankingScaleHero'
import { CaseStudiesCarousel } from '@/components/landing/CaseStudiesCarousel'
import { FAQSection } from '@/components/landing/FAQSection'
import { Footer } from '@/components/landing/Footer'
import { IntegrationCarousel } from '@/components/landing/IntegrationCarousel'
import { PortfolioNavbar } from '@/components/landing/PortfolioNavbar'
import { PricingSection } from '@/components/landing/PricingSection'
import { ProductTeaserCard } from '@/components/landing/ProductTeaserCard'

function LandingPage() {
    return (
        <div>
            <PortfolioNavbar />
            <ProductTeaserCard />
            <BankingScaleHero />
            <CaseStudiesCarousel />
            <IntegrationCarousel />
            <PricingSection />
            <FAQSection />
            <Footer />
        </div>
    )
}

export default LandingPage