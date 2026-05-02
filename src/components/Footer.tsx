'use client';

import Link from 'next/link';

const footerSections = [
  {
    title: 'CORPORATE',
    links: [
      { name: 'Corporate Overview', href: '/overview' },
      { name: 'Enterprise Offerings', href: '/offerings' },
      { name: 'Systems Architecture', href: '/systems' },
      { name: 'Global Operations', href: '/operations' },
    ],
  },
  {
    title: 'APPLICATIONS',
    links: [
      { name: 'Industry Applications', href: '/applications' },
      { name: 'Financial Systems', href: '/applications#finance' },
      { name: 'Healthcare Infrastructure', href: '/applications#healthcare' },
      { name: 'Manufacturing Operations', href: '/applications#manufacturing' },
    ],
  },
  {
    title: 'RESEARCH',
    links: [
      { name: 'Research & Engineering', href: '/research' },
      { name: 'AI Ethics & Governance', href: '/research#ethics' },
      { name: 'Engineering Standards', href: '/research#standards' },
      { name: 'Innovation Strategy', href: '/research#innovation' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Enterprise Contact', href: '/contact' },
      { name: 'Data Protection', href: '/contact#data-protection' },
      { name: 'Compliance Notes', href: '/contact#compliance' },
      { name: 'Terms of Service', href: '/contact#terms' },
    ],
  },
];

const offices = [
  { city: 'NEW YORK', address: '475 Fifth Avenue, Floor 28' },
  { city: 'LONDON', address: 'Canary Wharf, 1 Canada Square' },
  { city: 'SINGAPORE', address: 'Marina Bay Financial Centre, Tower 2' },
  { city: 'FRANKFURT', address: 'TaunusTurm, Taunustor 1' },
];

export default function Footer() {
  return (
    <footer className="border-t border-industrial-300 dark:border-industrial-700 bg-graphite-950 dark:bg-graphite-900 text-ivory-100">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4 md:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory-300 hover:text-ivory-50 transition-colors block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Offices */}
        <div className="section-divide pt-12 md:pt-16 mb-12 md:mb-16">
          <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-6 md:mb-8">
            GLOBAL OFFICES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {offices.map((office) => (
              <div key={office.city}>
                <div className="font-mono text-xs font-bold tracking-widest text-ivory-100 mb-2">
                  {office.city}
                </div>
                <div className="text-sm text-ivory-400 leading-relaxed">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="section-divide pt-12 md:pt-16 mb-8 md:mb-12">
          <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4 md:mb-6">
            COMPLIANCE & DATA PROTECTION
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-sm text-ivory-400 leading-relaxed">
            <div>
              <p className="mb-4">
                FORGECORE Technologies operates under strict compliance with international data protection
                regulations including GDPR (EU), CCPA (California), PIPEDA (Canada), and PDPA (Singapore).
                All data processing activities are conducted in accordance with ISO 27001 standards.
              </p>
              <p>
                Security certifications: SOC 2 Type II, ISO 27001, ISO 27018, ISO 27017.
                Financial compliance: PCI DSS Level 1, SOX, FINRA.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Export control compliance: U.S. EAR, ITAR where applicable. Data residency options available
                for EU, UK, US, APAC regions. Cross-border data transfer mechanisms: Standard Contractual
                Clauses (SCCs), Binding Corporate Rules (BCRs).
              </p>
              <p className="text-xs text-ivory-500 mt-4 md:mt-6">
                This platform is designed for enterprise procurement officers, technical decision-makers,
                and institutional stakeholders. For vendor inquiries, partnership proposals, or security
                assessments, utilize the structured contact system.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divide pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-ivory-100 relative shrink-0">
              <div className="absolute inset-1 border border-ivory-100" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-oxide-600" />
            </div>
            <span className="font-serif font-bold text-lg text-ivory-50">
              FORGECORE
            </span>
          </div>
          <div className="text-xs text-ivory-500 font-mono text-left md:text-right">
            © 2026 FORGECORE TECHNOLOGIES<br className="md:hidden" /> — ALL RIGHTS RESERVED — EST. 2019
          </div>
        </div>
      </div>
    </footer>
  );
}
