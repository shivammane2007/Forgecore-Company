export default function ApplicationsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-8">
              04 — INDUSTRY APPLICATIONS
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Sector-Specific Infrastructure Implementations and Measurable Outcomes
            </h1>
            <p className="text-xl text-ivory-300 leading-relaxed">
              Detailed analysis of core challenges, system solutions, and quantifiable business impact
              across six critical industries where FORGECORE maintains active deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Finance */}
      <section id="finance" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 01
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Financial Services
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Investment banking, asset management, payment processing, insurance underwriting, and
                regulatory reporting for global financial institutions.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  Financial institutions operate under extreme constraints: sub-millisecond latency requirements
                  for high-frequency trading, perfect data consistency for transaction processing, regulatory
                  compliance across multiple jurisdictions (SEC, FCA, MAS, BaFin), and 24/7/365 uptime where
                  downtime costs millions per minute.
                </p>
                <p className="editorial-text">
                  Legacy systems built over decades create technical debt, fragmented data silos, and security
                  vulnerabilities. Modernization must occur without disrupting live operations processing trillions
                  of dollars daily. Cloud adoption requires addressing data residency mandates, sovereign cloud
                  requirements, and regulatory approval processes spanning 12-18 months.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    TRADING INFRASTRUCTURE
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Low-latency order management systems with &lt;500 microsecond response times</li>
                    <li>→ Market data processing handling 10M+ messages per second</li>
                    <li>→ Algorithmic trading platforms with FPGA acceleration</li>
                    <li>→ Risk management systems calculating real-time portfolio exposure</li>
                    <li>→ Direct market access (DMA) with exchange co-location</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    PAYMENT PROCESSING
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Transaction processing with exactly-once guarantees and idempotency</li>
                    <li>→ Fraud detection using machine learning models scoring in &lt;10ms</li>
                    <li>→ Multi-currency settlement with real-time FX rate integration</li>
                    <li>→ PCI DSS Level 1 compliant tokenization and encryption</li>
                    <li>→ Reconciliation systems processing 100M+ transactions daily</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    REGULATORY COMPLIANCE
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Audit trail systems capturing all system events with tamper-proof logging</li>
                    <li>→ Know Your Customer (KYC) and Anti-Money Laundering (AML) automation</li>
                    <li>→ Trade surveillance detecting market manipulation patterns</li>
                    <li>→ Regulatory reporting (MiFID II, Dodd-Frank, EMIR) with automated filing</li>
                    <li>→ Data lineage tracking for Basel III and Solvency II compliance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      $4.2B
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Daily transaction volume processed
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      420μs
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Average order execution latency
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      99.8%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Fraud detection accuracy rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 02
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Healthcare & Life Sciences
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Hospital networks, electronic health records, medical imaging, clinical trials, pharmaceutical
                research, and population health management.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  Healthcare systems manage life-critical information where errors result in patient harm.
                  Protected health information (PHI) requires HIPAA compliance, GDPR Article 9 special
                  category data protection, and jurisdiction-specific regulations. Interoperability between
                  disparate EHR systems creates integration nightmares.
                </p>
                <p className="editorial-text">
                  Medical imaging generates petabytes of DICOM data requiring long-term retention, instant
                  retrieval, and AI-powered analysis. Clinical decision support systems must integrate
                  real-time patient data, medical literature, and genomic information while maintaining
                  physician autonomy and liability boundaries.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    CLINICAL DATA PLATFORM
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ FHIR-compliant health records with HL7 integration for legacy systems</li>
                    <li>→ Master patient index (MPI) resolving identity across provider networks</li>
                    <li>→ Clinical data warehouse aggregating structured and unstructured data</li>
                    <li>→ Real-time alerting for critical lab values and adverse drug events</li>
                    <li>→ Consent management tracking patient authorization for data sharing</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    MEDICAL IMAGING
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ PACS (Picture Archiving and Communication System) with zero data loss</li>
                    <li>→ AI-powered image analysis for radiology workflow optimization</li>
                    <li>→ 3D reconstruction and visualization for surgical planning</li>
                    <li>→ Vendor-neutral archive (VNA) consolidating imaging across facilities</li>
                    <li>→ Secure image sharing with referring physicians and specialists</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    RESEARCH INFRASTRUCTURE
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ De-identification pipelines producing research-ready datasets</li>
                    <li>→ Genomic data processing with variant annotation and interpretation</li>
                    <li>→ Clinical trial management tracking enrollment and outcomes</li>
                    <li>→ Real-world evidence platforms analyzing treatment effectiveness</li>
                    <li>→ Federated learning enabling multi-site research without data sharing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      24M
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Patient records managed across network
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      8.2PB
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Medical imaging data stored
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      40%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Reduction in adverse drug events
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section id="manufacturing" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 03
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Manufacturing & Supply Chain
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Industrial automation, inventory management, predictive maintenance, quality control,
                and global logistics coordination.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  Modern manufacturing operates on razor-thin margins where production downtime costs thousands
                  per minute. Supply chains span continents with thousands of suppliers creating visibility
                  gaps and coordination failures. Just-in-time manufacturing requires perfect synchronization
                  between procurement, production, and distribution.
                </p>
                <p className="editorial-text">
                  Industrial IoT generates terabytes of sensor data from production lines, but extracting
                  actionable insights requires real-time analytics and machine learning. Quality control
                  systems must detect defects at production speeds (thousands of units per hour) while
                  maintaining low false-positive rates.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    INDUSTRIAL IOT PLATFORM
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Edge computing processing sensor data locally before cloud transmission</li>
                    <li>→ Digital twin simulations modeling factory operations in real-time</li>
                    <li>→ Predictive maintenance models forecasting equipment failures</li>
                    <li>→ Computer vision systems for automated quality inspection</li>
                    <li>→ Production optimization using reinforcement learning algorithms</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    SUPPLY CHAIN VISIBILITY
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Real-time inventory tracking across warehouses and in-transit goods</li>
                    <li>→ Demand forecasting using time-series models and external signals</li>
                    <li>→ Supplier relationship management with performance scorecards</li>
                    <li>→ Route optimization for logistics with traffic and weather integration</li>
                    <li>→ Blockchain-based provenance tracking for regulatory compliance</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    PRODUCTION SYSTEMS
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Manufacturing execution systems (MES) coordinating shop floor operations</li>
                    <li>→ Overall equipment effectiveness (OEE) monitoring and analysis</li>
                    <li>→ Automated scheduling optimizing production sequences</li>
                    <li>→ Energy management systems reducing facility operating costs</li>
                    <li>→ Statistical process control detecting quality drift</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      32%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Reduction in unplanned downtime
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      18%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Improvement in OEE metrics
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      $2.1M
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Annual savings from predictive maintenance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government */}
      <section id="government" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 04
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Government & Public Sector
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Federal agencies, municipal governments, public safety systems, transportation infrastructure,
                and citizen services platforms.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  Government systems serve entire populations with stringent accessibility, security, and
                  reliability requirements. Public sector procurement processes demand extensive compliance
                  documentation, security clearances, and multi-year certification timelines. Legacy systems
                  dating back decades must interoperate with modern infrastructure.
                </p>
                <p className="editorial-text">
                  Air-gapped networks for classified systems prevent cloud adoption, requiring on-premises
                  deployments with limited connectivity. Transparency and audit requirements mandate complete
                  traceability of all system operations while protecting citizen privacy and national security
                  interests.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    CITIZEN SERVICES
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Unified identity management for cross-agency authentication</li>
                    <li>→ Digital service delivery platforms with accessibility compliance (WCAG 2.1 AA)</li>
                    <li>→ Case management systems tracking citizen interactions across departments</li>
                    <li>→ Multi-language support and automated translation services</li>
                    <li>→ Privacy-preserving analytics measuring service effectiveness</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    PUBLIC SAFETY
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Computer-aided dispatch (CAD) systems routing emergency responses</li>
                    <li>→ Real-time crime centers aggregating surveillance and sensor data</li>
                    <li>→ Predictive policing models identifying high-risk areas</li>
                    <li>→ Evidence management with chain-of-custody tracking</li>
                    <li>→ Emergency notification systems reaching millions in seconds</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    INFRASTRUCTURE MONITORING
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Smart city sensors monitoring traffic, air quality, and utilities</li>
                    <li>→ Transportation management optimizing traffic signal timing</li>
                    <li>→ Asset management tracking maintenance of public infrastructure</li>
                    <li>→ Energy grid monitoring with demand response programs</li>
                    <li>→ Disaster response coordination platforms for emergency management</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      8.4M
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Citizens served through digital platforms
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      45sec
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Average emergency dispatch time
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      28%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Reduction in traffic congestion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy & Utilities */}
      <section id="energy" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 05
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Energy & Utilities
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Electric grids, renewable energy management, oil & gas operations, water systems, and
                critical infrastructure protection.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  Energy infrastructure powers entire economies, making reliability non-negotiable. Smart grid
                  systems balance supply and demand in real-time across distributed generation sources
                  (solar, wind, natural gas). Renewable energy introduces volatility requiring advanced
                  forecasting and storage management.
                </p>
                <p className="editorial-text">
                  Critical infrastructure protection requires NERC CIP compliance, ICS/SCADA security, and
                  air-gapped operational technology networks. Coordinated attacks on grid infrastructure
                  represent national security threats, demanding defense-grade cybersecurity and physical
                  security integration.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    SMART GRID MANAGEMENT
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ SCADA systems monitoring grid operations with millisecond precision</li>
                    <li>→ Demand response programs automatically reducing consumption during peaks</li>
                    <li>→ Distributed energy resource management (DERMS) coordinating solar/wind/battery</li>
                    <li>→ Outage management systems with predictive fault detection</li>
                    <li>→ Energy trading platforms optimizing wholesale market participation</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    OPERATIONAL TECHNOLOGY SECURITY
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Air-gapped networks isolating control systems from enterprise IT</li>
                    <li>→ Industrial protocol monitoring detecting anomalous SCADA commands</li>
                    <li>→ Physical access controls integrated with cybersecurity systems</li>
                    <li>→ Threat intelligence sharing across utility sector (E-ISAC)</li>
                    <li>→ Incident response plans with backup manual control procedures</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    ASSET PERFORMANCE
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Predictive maintenance on transformers, turbines, and transmission lines</li>
                    <li>→ Thermal imaging and drone inspection of infrastructure</li>
                    <li>→ Vegetation management preventing transmission line interference</li>
                    <li>→ Weather forecasting integration for renewable generation prediction</li>
                    <li>→ Energy storage optimization maximizing battery lifecycle</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      15GW
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Grid capacity under active management
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      99.97%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      System availability (SAIDI reduction)
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      22%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Increase in renewable integration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise SaaS */}
      <section id="saas">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                INDUSTRY 06
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-graphite-950 dark:text-ivory-50">
                Enterprise SaaS
              </h2>
              <p className="text-sm text-graphite-700 dark:text-ivory-400 leading-relaxed">
                Multi-tenant platforms, B2B software providers, collaboration tools, and enterprise
                application infrastructure.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Core Challenge
                </h3>
                <p className="editorial-text mb-4">
                  SaaS platforms serve thousands of enterprise customers on shared infrastructure while
                  maintaining data isolation, tenant-specific customization, and predictable performance.
                  Each tenant demands enterprise SLAs, but shared infrastructure must achieve cost efficiency
                  through resource pooling.
                </p>
                <p className="editorial-text">
                  Scaling from startup to enterprise requires architectural evolution without disrupting
                  existing customers. Security models must prevent tenant cross-contamination while enabling
                  collaboration features. Compliance certifications (SOC 2, ISO 27001) apply to entire
                  platforms, not individual tenants.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  System Solution
                </h3>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    MULTI-TENANT ARCHITECTURE
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Shared database with row-level security enforcing tenant isolation</li>
                    <li>→ Dedicated compute pods for enterprise tier customers</li>
                    <li>→ Resource quotas preventing noisy neighbor problems</li>
                    <li>→ Tenant-specific configuration and feature flags</li>
                    <li>→ Zero-downtime schema migrations across all tenants</li>
                  </ul>
                </div>
                <div className="technical-block mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    PLATFORM SCALABILITY
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Horizontal autoscaling based on tenant-specific metrics</li>
                    <li>→ Database sharding distributing tenants across clusters</li>
                    <li>→ CDN integration for static assets and API responses</li>
                    <li>→ Rate limiting protecting shared infrastructure from abuse</li>
                    <li>→ Background job queues with priority-based execution</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    OBSERVABILITY
                  </h4>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Per-tenant performance dashboards and usage analytics</li>
                    <li>→ Cost attribution tracking infrastructure spend by customer</li>
                    <li>→ SLA monitoring with automated compensation workflows</li>
                    <li>→ Error tracking with tenant-specific debugging contexts</li>
                    <li>→ Capacity planning forecasting infrastructure needs</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                  Measurable Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      12,400
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Enterprise tenants on shared platform
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      10x
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Infrastructure efficiency vs single-tenant
                    </div>
                  </div>
                  <div className="bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6">
                    <div className="font-mono text-3xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      99.95%
                    </div>
                    <div className="text-sm text-graphite-800 dark:text-ivory-300">
                      Platform uptime SLA achievement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
