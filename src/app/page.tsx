import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center border-b border-industrial-300 dark:border-industrial-700">
        {/* Grid Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                 linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}
        />
        
        <div className="relative max-w-content mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-5xl">
            {/* System Identifier */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 border-2 border-graphite-900 dark:border-ivory-100 relative">
                <div className="absolute inset-2 border border-graphite-900 dark:border-ivory-100" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-oxide-600" />
              </div>
              <div className="font-mono text-xs tracking-widest text-graphite-700 dark:text-ivory-400">
                ESTABLISHED 2019 — GLOBAL OPERATIONS — ISO 27001 CERTIFIED
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 text-graphite-950 dark:text-ivory-50">
              DISTRIBUTED
              <br />
              INFRASTRUCTURE
              <br />
              FOR ENTERPRISE
              <br />
              COMPUTING
            </h1>

            {/* Secondary Headline */}
            <h2 className="font-sans text-2xl lg:text-3xl font-semibold leading-tight mb-12 text-graphite-800 dark:text-ivory-200 max-w-3xl">
              High-performance systems architecture, AI-driven data platforms, and mission-critical
              infrastructure for organizations operating at global scale.
            </h2>

            {/* Dense Paragraph */}
            <div className="prose prose-lg max-w-prose-wide mb-16">
              <p className="editorial-text mb-6">
                FORGECORE Technologies designs, deploys, and maintains distributed computing infrastructure
                for multinational corporations, financial institutions, healthcare networks, and government
                agencies. Our systems process over 2.4 trillion transactions annually across 47 countries,
                maintaining 99.997% uptime while adhering to the most stringent regulatory frameworks
                worldwide.
              </p>
              <p className="editorial-text mb-6">
                We specialize in horizontally scalable data architectures, real-time processing pipelines,
                AI model orchestration, and zero-trust security implementations. Our engineering teams
                have built infrastructure that supports operations ranging from high-frequency trading
                systems to national healthcare databases, from supply chain optimization platforms to
                autonomous vehicle coordination networks.
              </p>
              <p className="editorial-text">
                This is not software-as-a-service. This is infrastructure-as-foundation. Purpose-built,
                compliance-ready, performance-optimized systems designed for organizations where failure
                is not an option.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/contact" className="industrial-btn">
                REQUEST ARCHITECTURE REVIEW
              </Link>
              <Link href="/overview" className="text-sm font-medium tracking-wide text-graphite-900 dark:text-ivory-100 hover:text-oxide-600 dark:hover:text-oxide-500 transition-colors flex items-center gap-2 group">
                READ CORPORATE OVERVIEW
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* System Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-industrial-300 dark:border-industrial-700">
              <div>
                <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                  2.4T
                </div>
                <div className="text-sm text-graphite-700 dark:text-ivory-400 leading-snug">
                  Annual transactions processed globally
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                  99.997%
                </div>
                <div className="text-sm text-graphite-700 dark:text-ivory-400 leading-snug">
                  System uptime across all infrastructure
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                  47
                </div>
                <div className="text-sm text-graphite-700 dark:text-ivory-400 leading-snug">
                  Countries with active deployments
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                  &lt;12ms
                </div>
                <div className="text-sm text-graphite-700 dark:text-ivory-400 leading-snug">
                  Average global response latency
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview Strip */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="technical-block border-l-2 border-oxide-500">
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-3">
                INFRASTRUCTURE LAYER
              </h3>
              <p className="text-sm text-ivory-300 leading-relaxed">
                Kubernetes-orchestrated microservices, multi-region replication, automated failover,
                edge compute distribution, CDN integration, and infrastructure-as-code deployment pipelines.
              </p>
            </div>
            <div className="technical-block border-l-2 border-oxide-500">
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-3">
                DATA ARCHITECTURE
              </h3>
              <p className="text-sm text-ivory-300 leading-relaxed">
                Real-time streaming with Apache Kafka, distributed databases (PostgreSQL, Cassandra),
                data lakes on object storage, ETL pipelines, OLAP cubes, and time-series optimization.
              </p>
            </div>
            <div className="technical-block border-l-2 border-oxide-500">
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-3">
                SECURITY FRAMEWORK
              </h3>
              <p className="text-sm text-ivory-300 leading-relaxed">
                Zero-trust architecture, end-to-end encryption, hardware security modules, SOC 2 Type II
                compliance, penetration testing, threat modeling, and continuous security monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
