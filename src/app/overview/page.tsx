export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-8">
              01 — CORPORATE OVERVIEW
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Organizational Structure, Operating Principles, and Global Deployment Model
            </h1>
            <p className="text-xl text-ivory-300 leading-relaxed">
              Internal documentation made public. This section outlines what FORGECORE Technologies builds,
              why it exists, how it operates, who it serves, and where it maintains infrastructure presence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                What We Build
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                TECHNICAL SCOPE
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE Technologies designs and operates distributed computing infrastructure optimized
                for organizations that process critical data at scale. Our systems handle financial
                transactions, healthcare records, supply chain coordination, energy grid management,
                and government operations across multiple continents with strict regulatory compliance.
              </p>
              <p className="editorial-text">
                We build horizontally scalable architectures capable of processing billions of events per day
                while maintaining sub-15ms response times. Our infrastructure spans private data centers,
                hybrid cloud deployments, and edge computing nodes positioned strategically for regulatory
                compliance and performance optimization.
              </p>
              <p className="editorial-text">
                Core technical capabilities include: distributed database management (PostgreSQL, Cassandra,
                MongoDB), real-time event streaming (Apache Kafka, Pulsar), container orchestration
                (Kubernetes, Docker Swarm), AI model serving (TensorFlow Serving, TorchServe), observability
                systems (Prometheus, Grafana, ELK stack), and zero-trust security frameworks.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  INFRASTRUCTURE COMPONENTS
                </h3>
                <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                  <li>→ Multi-region Kubernetes clusters with automated failover</li>
                  <li>→ Real-time data pipelines processing 50TB+ daily</li>
                  <li>→ Distributed caching layers (Redis, Memcached) for sub-millisecond reads</li>
                  <li>→ Object storage systems handling petabyte-scale datasets</li>
                  <li>→ Load balancers with geographic traffic routing</li>
                  <li>→ CI/CD pipelines with automated security scanning</li>
                  <li>→ Disaster recovery systems with RPO &lt; 5 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Why We Exist
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                ORGANIZATIONAL PURPOSE
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Organizations operating critical infrastructure cannot afford system failures. A trading
                platform going down costs millions per minute. A healthcare system outage puts lives at risk.
                A supply chain disruption cascades across entire economies. Generic cloud services and
                off-the-shelf software cannot meet these requirements.
              </p>
              <p className="editorial-text">
                FORGECORE was established to solve problems that commodity solutions cannot address:
                extreme performance requirements, complex regulatory environments, data sovereignty
                mandates, and operations that span incompatible legal jurisdictions. We build systems
                where technical excellence is mandatory, not aspirational.
              </p>
              <p className="editorial-text">
                Our founding principle: Infrastructure should be invisible when it works, and impossible
                to ignore when it doesn't. We engineer systems that organizations depend on but never
                think about—until they need to scale by 10x, enter a new regulated market, or survive
                an attempted breach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                How We Operate
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                OPERATIONAL MODEL
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE operates as a vertically integrated infrastructure provider. We control the
                entire stack from bare metal provisioning to application layer optimization. This allows
                us to guarantee performance characteristics that would be impossible with third-party
                dependencies.
              </p>
              <p className="editorial-text">
                Every system we deploy undergoes a six-month design phase involving threat modeling,
                performance simulation, compliance auditing, and architecture review. We do not sell
                standardized products. Each deployment is purpose-built for specific operational requirements,
                regulatory constraints, and performance targets.
              </p>
              <p className="editorial-text">
                Our engineering teams are organized into specialized units: Infrastructure Engineering
                (compute, network, storage), Data Engineering (pipelines, databases, warehouses), Security
                Engineering (cryptography, identity, compliance), and AI Systems Engineering (model training,
                serving, monitoring). Each unit maintains internal documentation standards equivalent to
                academic research publications.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  DEPLOYMENT METHODOLOGY
                </h3>
                <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                  <li>→ Requirements analysis and threat modeling (6-8 weeks)</li>
                  <li>→ Architecture design and compliance review (8-12 weeks)</li>
                  <li>→ Infrastructure provisioning and security hardening (4-6 weeks)</li>
                  <li>→ System integration and performance tuning (6-8 weeks)</li>
                  <li>→ Load testing under simulated failure conditions (2-4 weeks)</li>
                  <li>→ Operational handoff and documentation transfer (2 weeks)</li>
                  <li>→ Continuous monitoring with 24/7/365 SRE support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Who We Serve
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                CLIENT PROFILE
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="editorial-text mb-12">
                FORGECORE serves organizations where infrastructure failure results in measurable harm:
                financial loss, operational disruption, regulatory penalties, or threats to human safety.
                Our clients are typically Fortune 500 corporations, national governments, healthcare
                systems, and financial institutions.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Financial Services
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed">
                    Investment banks, trading platforms, payment processors, and insurance providers
                    requiring sub-millisecond latency, perfect data consistency, and regulatory compliance
                    across multiple jurisdictions (SEC, FCA, MAS, BaFin).
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Healthcare & Life Sciences
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed">
                    Hospital networks, pharmaceutical companies, medical device manufacturers, and
                    research institutions managing protected health information under HIPAA, GDPR Article 9,
                    and equivalent frameworks.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Manufacturing & Supply Chain
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed">
                    Global manufacturers, logistics providers, and industrial automation companies
                    coordinating operations across continents with real-time inventory management,
                    predictive maintenance, and just-in-time manufacturing.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Government & Critical Infrastructure
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed">
                    National agencies, municipal governments, energy providers, and transportation
                    authorities operating systems classified under critical infrastructure protection
                    programs (CISA, NCSC, ENISA).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Where We Operate
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                GLOBAL FOOTPRINT
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE maintains infrastructure presence across 47 countries on six continents. Our
                data centers are strategically positioned to satisfy data residency requirements, minimize
                network latency, and ensure operational continuity during regional disruptions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    NORTH AMERICA
                  </h3>
                  <ul className="space-y-1.5 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Primary: New York, San Francisco, Toronto</li>
                    <li>→ Secondary: Chicago, Dallas, Seattle, Vancouver</li>
                    <li>→ Edge: 23 points of presence</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    EUROPE
                  </h3>
                  <ul className="space-y-1.5 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Primary: London, Frankfurt, Amsterdam</li>
                    <li>→ Secondary: Dublin, Paris, Zurich, Stockholm</li>
                    <li>→ Edge: 31 points of presence</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    ASIA-PACIFIC
                  </h3>
                  <ul className="space-y-1.5 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Primary: Singapore, Tokyo, Hong Kong</li>
                    <li>→ Secondary: Sydney, Seoul, Mumbai, Shanghai</li>
                    <li>→ Edge: 28 points of presence</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    MIDDLE EAST & AFRICA
                  </h3>
                  <ul className="space-y-1.5 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Primary: Dubai, Tel Aviv</li>
                    <li>→ Secondary: Johannesburg, Riyadh, Cairo</li>
                    <li>→ Edge: 12 points of presence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section>
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Operating Principles
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                ORGANIZATIONAL STANDARDS
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-10">
                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Performance is Non-Negotiable
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed mb-4">
                    Every system we build must meet documented performance targets under worst-case
                    load conditions. We simulate Black Friday traffic levels, coordinated DDoS attacks,
                    and cascading datacenter failures before any production deployment.
                  </p>
                  <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                    SLA targets: 99.99% uptime minimum, p99 latency &lt; 50ms, zero data loss during
                    failover events, recovery time objective (RTO) &lt; 15 minutes.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Security Through Architecture
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed mb-4">
                    Security is not a feature layer—it is embedded in architectural decisions. We implement
                    defense-in-depth strategies, assume breach scenarios, and design systems that remain
                    functional even when components are compromised.
                  </p>
                  <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                    Standard practices: zero-trust networking, encryption at rest and in transit, hardware
                    security modules for key management, regular penetration testing, automated vulnerability
                    scanning, security-focused code reviews.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Compliance as Foundation
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed mb-4">
                    Regulatory compliance cannot be retrofitted. We design systems with compliance requirements
                    as first-order constraints, not afterthoughts. Every deployment includes audit trails,
                    data lineage tracking, and compliance reporting built into the architecture.
                  </p>
                  <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                    Certified frameworks: SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, PCI DSS Level 1,
                    HIPAA, GDPR Article 32, FedRAMP (in progress).
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Documentation as Code
                  </h3>
                  <p className="text-base text-graphite-800 dark:text-ivory-300 leading-relaxed">
                    Every system includes complete technical documentation: architecture decision records,
                    runbooks, incident response procedures, disaster recovery plans, and operational guides.
                    Documentation is version-controlled, peer-reviewed, and tested for accuracy during
                    disaster recovery drills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
