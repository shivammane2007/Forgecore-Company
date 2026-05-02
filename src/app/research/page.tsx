export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-8">
              05 — RESEARCH & ENGINEERING
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Innovation Strategy, Engineering Standards, and Long-Term Research Initiatives
            </h1>
            <p className="text-xl text-ivory-300 leading-relaxed">
              Internal R&D culture, code quality philosophy, AI ethics framework, reliability engineering,
              and continuous learning systems that drive technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Strategy */}
      <section id="innovation" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Innovation Strategy
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                LONG-TERM R&D
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE allocates 18% of annual revenue to research and development, split between
                immediate product improvements (60%), medium-term capability building (30%), and
                speculative long-term research (10%). This distribution balances customer needs with
                technological leadership.
              </p>
              <p className="editorial-text">
                Our research teams operate with academic freedom to explore emerging technologies: quantum
                computing applications, advanced cryptography, neuromorphic computing, and novel distributed
                consensus algorithms. Publications in peer-reviewed venues (ACM, IEEE, USENIX) demonstrate
                rigor while contributing to broader technical community.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  ACTIVE RESEARCH AREAS
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                      Post-Quantum Cryptography
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Implementing NIST-approved post-quantum algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium)
                      into production systems. Hybrid schemes combining classical and post-quantum primitives
                      ensure future cryptanalysis resistance while maintaining current security standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                      Confidential Computing
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Leveraging hardware trusted execution environments (Intel SGX, AMD SEV, ARM TrustZone)
                      for data processing in encrypted memory. Enables multi-party computation without
                      exposing plaintext to infrastructure operators or cloud providers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                      Federated Learning at Scale
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Training machine learning models across decentralized data sources without centralizing
                      sensitive information. Differential privacy guarantees prevent model inversion attacks
                      while maintaining statistical utility for predictions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                      Serverless Edge Computing
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Function-as-a-service platforms running on edge nodes with microsecond cold-start
                      latency. WebAssembly isolation provides security guarantees while achieving
                      near-native performance for compute-intensive workloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section id="standards" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Engineering Standards
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                CODE QUALITY
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Code quality is enforced through automated tooling, peer review, and architectural oversight.
                Every line of code undergoes static analysis, security scanning, and test coverage validation
                before merging. Our standards are documented in 400+ pages of internal guidelines covering
                language-specific idioms, architectural patterns, and operational best practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    CODE REVIEW PROCESS
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Mandatory Peer Review
                      </div>
                      <p className="text-xs">
                        Minimum two approvals from senior engineers before merging. Reviewers must
                        understand both business context and technical implementation.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Automated Checks
                      </div>
                      <p className="text-xs">
                        Linting, formatting, type checking, security scanning (Snyk, SonarQube),
                        and test coverage (minimum 80% for critical paths).
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Architecture Review Board
                      </div>
                      <p className="text-xs">
                        Major architectural changes require approval from principal engineers.
                        Design documents precede implementation for complex features.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    TESTING REQUIREMENTS
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Unit Tests
                      </div>
                      <p className="text-xs">
                        Test individual functions and methods in isolation. Mocks and stubs isolate
                        dependencies. Fast execution (&lt;10ms per test).
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Integration Tests
                      </div>
                      <p className="text-xs">
                        Validate interactions between services using containerized test environments.
                        Database migrations tested against production-like data volumes.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Load Tests
                      </div>
                      <p className="text-xs">
                        Performance testing at 150% of peak production load. Chaos engineering
                        validates resilience under failure conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    85%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Average test coverage across codebase
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    &lt;24h
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Median code review turnaround
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    0.08%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Post-deployment defect rate
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    6,400
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Automated tests executed per commit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ethics & Governance */}
      <section id="ethics" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                AI Ethics & Governance
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                RESPONSIBLE AI
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Artificial intelligence systems deployed at scale have societal consequences. Our AI
                governance framework addresses fairness, accountability, transparency, and safety through
                technical controls and organizational oversight. We reject the notion that AI systems are
                neutral—they reflect the values embedded in their design and training data.
              </p>
              <div className="space-y-6 mt-8">
                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Fairness & Bias Mitigation
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    All AI models undergo fairness audits measuring disparate impact across protected
                    attributes (race, gender, age). Training data diversity requirements ensure representative
                    samples. Bias detection algorithms identify and flag problematic patterns before deployment.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Disparate impact analysis measuring outcome parity across groups</li>
                    <li>→ Adversarial debiasing techniques during model training</li>
                    <li>→ Continuous monitoring of model predictions for drift in fairness metrics</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Explainability & Transparency
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    High-stakes decisions (credit approval, medical diagnosis, hiring) require explainable
                    models. LIME and SHAP values provide local explanations for individual predictions.
                    Model cards document intended use, limitations, and performance characteristics.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Feature importance rankings identifying key decision factors</li>
                    <li>→ Counterfactual explanations ("decision would change if...")</li>
                    <li>→ Model documentation following Model Card framework (Mitchell et al.)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Privacy-Preserving ML
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Differential privacy adds calibrated noise to training data preventing individual
                    record identification in model outputs. Federated learning keeps sensitive data
                    on-premises while enabling collaborative model training across organizations.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ ε-differential privacy guarantees with mathematically proven bounds</li>
                    <li>→ Secure multi-party computation for privacy-preserving inference</li>
                    <li>→ Data minimization collecting only necessary features for task</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                    Safety & Robustness
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    AI systems must handle adversarial inputs and distribution shifts gracefully. Red team
                    exercises attempt to fool models using crafted inputs. Out-of-distribution detection
                    flags inputs unlike training data, preventing overconfident incorrect predictions.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Adversarial training with perturbation-augmented datasets</li>
                    <li>→ Uncertainty quantification expressing prediction confidence</li>
                    <li>→ Human-in-the-loop review for high-risk decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Engineering */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Reliability Engineering
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                SRE PRACTICES
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Site Reliability Engineering (SRE) teams ensure production systems meet availability,
                latency, and correctness targets. SRE operates as a bridge between development and
                operations, applying software engineering principles to infrastructure problems.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  SRE PRINCIPLES
                </h3>
                <div className="space-y-4 text-sm text-graphite-800 dark:text-ivory-300">
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Error Budgets:</strong> Services
                    have defined uptime SLAs (e.g., 99.95% = 4.4 hours downtime annually). Error budgets
                    represent acceptable unreliability. Exhausting error budget halts new feature development
                    until reliability improves.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Toil Reduction:</strong> Manual
                    repetitive operational work is automated aggressively. SRE teams spend &lt;50% time on
                    toil, remainder on automation, capacity planning, and architecture improvements.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Blameless Postmortems:</strong> Incidents
                    trigger detailed analysis focusing on systemic factors, not individual errors. Postmortems
                    identify action items preventing recurrence and are publicly shared internally.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Chaos Engineering:</strong> Deliberately
                    injecting failures (network partitions, server crashes, resource exhaustion) validates
                    system resilience. Gamedays simulate major incidents testing runbooks and communication.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    99.97%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Actual uptime (exceeds 99.95% SLA)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    14min
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Mean time to detection (MTTD)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    38min
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Mean time to recovery (MTTR)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    72%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Toil reduction vs previous year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section>
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Continuous Learning
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                KNOWLEDGE SYSTEMS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Technical excellence requires continuous skill development. FORGECORE engineers spend 20%
                of working time on learning activities: reading research papers, attending conferences,
                contributing to open source, and internal knowledge sharing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    INTERNAL PROGRAMS
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Weekly tech talks presenting new technologies and projects</li>
                    <li>→ Internal documentation wiki with 10,000+ technical articles</li>
                    <li>→ Mentorship program pairing junior and senior engineers</li>
                    <li>→ Quarterly hackathons exploring experimental ideas</li>
                    <li>→ Book clubs discussing technical and leadership literature</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    EXTERNAL ENGAGEMENT
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Conference attendance budget ($5,000 per engineer annually)</li>
                    <li>→ Open source contribution during work hours encouraged</li>
                    <li>→ Publishing research findings in peer-reviewed venues</li>
                    <li>→ Speaking at industry conferences and meetups</li>
                    <li>→ Collaboration with universities on research projects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-graphite-900 dark:bg-graphite-800 border border-industrial-700 p-8">
                <blockquote className="text-ivory-200 text-lg leading-relaxed italic">
                  "We hire engineers who are curious about systems that don't yet exist. The best
                  infrastructure engineers are those who read computer science papers for enjoyment,
                  who debate consensus algorithms over coffee, who see elegance in well-designed APIs.
                  Technical depth is not optional—it is the foundation of everything we build."
                </blockquote>
                <div className="mt-6 text-sm text-ivory-400 font-mono tracking-wide">
                  — DR. HELENA VOSS, CHIEF TECHNOLOGY OFFICER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
