export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-oxide-500 mb-6 md:mb-8">
              06 — PEOPLE & OPERATIONS
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 text-balance">
              Organizational Structure, Talent Philosophy, and Performance Culture
            </h1>
            <p className="text-lg md:text-xl text-ivory-300 leading-relaxed">
              Leadership framework, hiring standards, career progression, performance expectations,
              and continuous learning systems that define how FORGECORE operates internally.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Organizational Structure
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                FUNCTIONAL DIVISIONS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE operates as a matrix organization balancing functional excellence with
                product-focused delivery. Engineers belong to technical guilds (Infrastructure, Data,
                Security, AI) while serving on product teams. This structure maintains deep technical
                expertise while enabling cross-functional collaboration.
              </p>
              <div className="space-y-8 mt-6 md:mt-8">
                <div>
                  <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                    Engineering Organization
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="technical-block">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-2 md:mb-3">
                        INFRASTRUCTURE ENGINEERING
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300 mb-2">
                        242 engineers responsible for compute, storage, networking, and orchestration layers.
                      </p>
                      <ul className="text-xs text-graphite-700 dark:text-ivory-400 space-y-1">
                        <li>→ Kubernetes Platform Team</li>
                        <li>→ Network Engineering</li>
                        <li>→ Storage Systems</li>
                        <li>→ Site Reliability Engineering</li>
                      </ul>
                    </div>
                    <div className="technical-block">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-2 md:mb-3">
                        DATA ENGINEERING
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300 mb-2">
                        187 engineers building data pipelines, warehouses, and real-time streaming platforms.
                      </p>
                      <ul className="text-xs text-graphite-700 dark:text-ivory-400 space-y-1">
                        <li>→ Data Platform Team</li>
                        <li>→ Stream Processing</li>
                        <li>→ Analytics Infrastructure</li>
                        <li>→ Data Quality & Governance</li>
                      </ul>
                    </div>
                    <div className="technical-block">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-2 md:mb-3">
                        SECURITY ENGINEERING
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300 mb-2">
                        156 engineers implementing security controls, compliance frameworks, and threat detection.
                      </p>
                      <ul className="text-xs text-graphite-700 dark:text-ivory-400 space-y-1">
                        <li>→ Application Security</li>
                        <li>→ Infrastructure Security</li>
                        <li>→ Compliance & Audit</li>
                        <li>→ Security Operations Center</li>
                      </ul>
                    </div>
                    <div className="technical-block">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-2 md:mb-3">
                        AI SYSTEMS ENGINEERING
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300 mb-2">
                        134 engineers developing ML platforms, model serving, and AI operations infrastructure.
                      </p>
                      <ul className="text-xs text-graphite-700 dark:text-ivory-400 space-y-1">
                        <li>→ ML Platform Team</li>
                        <li>→ Model Training Infrastructure</li>
                        <li>→ AI Safety & Ethics</li>
                        <li>→ Research Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xl font-semibold mb-4 text-graphite-900 dark:text-ivory-100">
                    Supporting Functions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                        Product Management
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300">
                        42 product managers translating customer needs into technical requirements. Deep
                        technical backgrounds enable informed prioritization decisions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                        Solutions Architecture
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300">
                        67 solutions architects designing customer-specific implementations. Rotate between
                        customer-facing and internal engineering roles.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold mb-2 text-graphite-900 dark:text-ivory-100">
                        Technical Operations
                      </h4>
                      <p className="text-sm text-graphite-800 dark:text-ivory-300">
                        89 operations engineers managing deployments, monitoring, incident response, and
                        customer support escalations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Leadership Mindset
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                MANAGEMENT APPROACH
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE leadership operates on principle: technical credibility is non-negotiable.
                Engineering managers maintain hands-on technical contribution (20-30% time) while developing
                teams. Leadership is measured by team output, not headcount growth.
              </p>
              <div className="space-y-6 mt-6 md:mt-8">
                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Servant Leadership
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Managers exist to unblock teams, not direct day-to-day work. Engineering teams have
                    autonomy over technical decisions within architectural guidelines. Leadership provides
                    context and constraints, teams determine implementation.
                  </p>
                  <p className="text-xs text-graphite-700 dark:text-ivory-400">
                    Decisions pushed to lowest informed level. Escalation indicates missing context, not
                    lack of authority.
                  </p>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Strategic decisions backed by quantitative analysis. A/B testing validates product
                    changes. Infrastructure investments justified through capacity models. Performance
                    reviews reference objective metrics, not subjective impressions.
                  </p>
                  <p className="text-xs text-graphite-700 dark:text-ivory-400">
                    Gut instinct initiates investigation; data determines action.
                  </p>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Disagree and Commit
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Open debate precedes decisions. Once decided, entire organization commits regardless
                    of individual opinions. Consensus is not required; alignment is mandatory. Decisions
                    are documented with rationale for future reference.
                  </p>
                  <p className="text-xs text-graphite-700 dark:text-ivory-400">
                    Re-litigating settled decisions wastes time; new evidence enables reconsideration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Standards */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Hiring Standards
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                TALENT ACQUISITION
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE maintains high hiring standards accepting approximately 2% of engineering applicants.
                Interview process emphasizes problem-solving ability, system design thinking, and communication
                skills over memorized algorithms. We hire for potential, not just current capabilities.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                  INTERVIEW PROCESS
                </h3>
                <div className="space-y-4 text-sm text-graphite-800 dark:text-ivory-300">
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Technical Screen (60 min):</strong> Live
                    coding session solving real-world problems. Emphasis on code quality, testing approach,
                    and communication. Interviewers probe edge cases and discuss tradeoffs.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">System Design (90 min):</strong> Design
                    large-scale distributed system from requirements. Candidates discuss scalability, reliability,
                    data modeling, and operational concerns. No single correct answer—evaluation focuses on
                    thought process.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Domain Deep-Dive (75 min):</strong> Technical
                    discussion in candidate's area of expertise. Senior candidates explain complex systems
                    they've built, architectural decisions made, and lessons learned.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Behavioral Interview (45 min):</strong> Past
                    experiences revealing collaboration style, conflict resolution, and growth mindset.
                    structured questions with detailed follow-ups.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    2.3%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Engineering offer rate
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    6
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Interview rounds (avg)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    12yr
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Average industry experience
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    78%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Offer acceptance rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Career Tracks
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                ADVANCEMENT PATHS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE offers parallel career tracks: Individual Contributor (IC) and Engineering Management.
                Both paths reach executive compensation and organizational influence. Switching between tracks
                is common and encouraged based on interest and organizational need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    INDIVIDUAL CONTRIBUTOR
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        L3: Software Engineer
                      </div>
                      <p className="text-xs">
                        Contributes to team projects under guidance. Owns well-defined features.
                        Typically 0-3 years experience.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        L4: Senior Engineer
                      </div>
                      <p className="text-xs">
                        Independently designs and implements complex systems. Mentors junior engineers.
                        3-6 years experience.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        L5: Staff Engineer
                      </div>
                      <p className="text-xs">
                        Influences technical direction across multiple teams. Designs systems impacting
                        entire products. 6-10 years.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        L6: Principal Engineer
                      </div>
                      <p className="text-xs">
                        Sets architectural standards organization-wide. Solves company-level technical
                        challenges. 10-15 years.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        L7: Distinguished Engineer
                      </div>
                      <p className="text-xs">
                        Industry expert shaping technical strategy. Publishes research, represents
                        company externally. 15+ years.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    ENGINEERING MANAGEMENT
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        M4: Engineering Manager
                      </div>
                      <p className="text-xs">
                        Manages team of 5-8 engineers. Responsible for delivery, hiring, performance
                        management. 4-8 years experience.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        M5: Senior Engineering Manager
                      </div>
                      <p className="text-xs">
                        Manages 10-15 engineers or multiple teams. Influences product strategy and
                        roadmap. 8-12 years.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        M6: Director of Engineering
                      </div>
                      <p className="text-xs">
                        Manages 30-50 engineers across multiple teams. Owns major product areas.
                        Budget authority. 12-16 years.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        M7: Senior Director / VP Engineering
                      </div>
                      <p className="text-xs">
                        Manages 100+ engineers. Shapes organizational structure and processes.
                        Executive leadership. 16-20 years.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        M8: SVP / CTO
                      </div>
                      <p className="text-xs">
                        Sets technical vision company-wide. Executive team member. Board interaction.
                        20+ years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Culture */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Performance Culture
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                EXPECTATIONS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Performance expectations are explicit, measurable, and consistently enforced. Bi-annual
                reviews evaluate technical contribution, collaboration, and growth trajectory. High
                performers receive significant compensation increases and expanded responsibilities.
                Underperformance triggers support plans with clear improvement criteria.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                  EVALUATION CRITERIA
                </h3>
                <div className="space-y-4 text-sm text-graphite-800 dark:text-ivory-300">
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Technical Impact (40%):</strong> Code
                    contributions, system designs, architecture decisions. Measured by projects shipped,
                    performance improvements, reliability gains. Quality over quantity.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Collaboration (30%):</strong> Code
                    reviews quality, documentation contributions, knowledge sharing, cross-team coordination.
                    Multiplier effect on team productivity.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Technical Growth (20%):</strong> New
                    skills acquired, technologies mastered, certifications obtained. Demonstrated through
                    expanded project scope and complexity.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Leadership (10%):</strong> Mentoring
                    junior engineers, influencing technical decisions, representing engineering in
                    cross-functional discussions. Expected at all levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development */}
      <section>
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Learning & Growth
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                DEVELOPMENT PROGRAMS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE invests $18,000 annually per engineer in professional development. Learning
                time is protected—20% of work week dedicated to skill development, research, and
                experimentation. Knowledge sharing is cultural expectation, not optional activity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    STRUCTURED LEARNING
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Conference attendance ($5,000/year per engineer)</li>
                    <li>→ Online course subscriptions (Coursera, Pluralsight, O'Reilly)</li>
                    <li>→ Certification exam reimbursement (AWS, GCP, CKAD, etc.)</li>
                    <li>→ Technical book library (physical and digital)</li>
                    <li>→ Internal training programs (Kubernetes, Security, AI/ML)</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    EXPERIENTIAL LEARNING
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Rotation programs across engineering teams</li>
                    <li>→ Sabbaticals for long-tenured engineers (3 months paid)</li>
                    <li>→ Research collaboration with universities</li>
                    <li>→ Open source contribution during work hours</li>
                    <li>→ Internal innovation projects (20% time equivalent)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 md:mt-8 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 p-6 sm:p-8">
                <h3 className="font-sans text-lg font-semibold mb-3 md:mb-4 text-graphite-900 dark:text-ivory-100">
                  Compensation Philosophy
                </h3>
                <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-4">
                  FORGECORE compensation targets 90th percentile for technical roles in major tech hubs.
                  Total compensation packages include base salary, annual performance bonus (15-30% of base),
                  equity grants vesting over four years, and comprehensive benefits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      $215K
                    </div>
                    <div className="text-sm text-graphite-700 dark:text-ivory-400">
                      Median engineer base salary
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      $410K
                    </div>
                    <div className="text-sm text-graphite-700 dark:text-ivory-400">
                      Median total compensation (TC)
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                      6.8yr
                    </div>
                    <div className="text-sm text-graphite-700 dark:text-ivory-400">
                      Average employee tenure
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
