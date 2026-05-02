export default function SystemsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-oxide-500 mb-6 md:mb-8">
              03 — SYSTEMS & ARCHITECTURE
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 text-balance">
              Technical Architecture, Design Philosophy, and Infrastructure Patterns
            </h1>
            <p className="text-lg md:text-xl text-ivory-300 leading-relaxed">
              Detailed exposition of platform design principles, distributed systems approach, data pipeline
              architecture, security layers, compliance frameworks, and performance optimization strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Design Philosophy */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Platform Design Philosophy
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                ARCHITECTURAL PRINCIPLES
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE systems are designed around three core architectural principles: horizontal
                scalability, fault isolation, and operational transparency. Every component must scale
                independently, fail gracefully, and expose detailed metrics for monitoring.
              </p>
              <p className="editorial-text">
                We reject monolithic architectures in favor of microservices with well-defined service
                boundaries. Services communicate through message queues and API gateways, never through
                direct database access or shared memory. This enables independent deployment cycles,
                technology heterogeneity, and granular scaling decisions.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                  DESIGN CONSTRAINTS
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-1 md:mb-2 text-graphite-900 dark:text-ivory-100">
                      Stateless by Default
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Application services maintain no local state. Session data, caches, and temporary
                      files reside in distributed storage systems (Redis, S3) allowing any instance to
                      handle any request. This enables transparent scaling and zero-downtime deployments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-1 md:mb-2 text-graphite-900 dark:text-ivory-100">
                      Idempotent Operations
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      All API endpoints and message handlers are designed for idempotency. Duplicate requests
                      produce identical results without side effects. This simplifies retry logic, failure
                      recovery, and exactly-once processing guarantees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-1 md:mb-2 text-graphite-900 dark:text-ivory-100">
                      Circuit Breaker Pattern
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Service-to-service calls implement circuit breakers preventing cascading failures.
                      When a downstream service degrades, circuit breakers open automatically, serving
                      cached responses or graceful degradation rather than propagating failures upstream.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold mb-1 md:mb-2 text-graphite-900 dark:text-ivory-100">
                      Observable by Design
                    </h4>
                    <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
                      Every service exposes metrics (Prometheus), structured logs (JSON), and distributed
                      traces (OpenTelemetry). Dashboards visualize service health, request latency, error
                      rates, and resource utilization. Alerts trigger before user-visible degradation occurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributed Systems Approach */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Distributed Systems Approach
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                CONSENSUS & COORDINATION
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Distributed systems introduce fundamental challenges: network partitions, clock skew,
                partial failures, and coordination overhead. We address these through consensus protocols
                (Raft, Paxos), distributed coordination services (etcd, ZooKeeper), and careful application
                of CAP theorem tradeoffs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    CONSISTENCY MODELS
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Strong Consistency
                      </div>
                      <p className="text-xs">
                        Financial transactions, inventory management, and booking systems use strict
                        serializable isolation with distributed locks.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Eventual Consistency
                      </div>
                      <p className="text-xs">
                        User profiles, product catalogs, and analytics data tolerate temporary
                        inconsistency for performance.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Causal Consistency
                      </div>
                      <p className="text-xs">
                        Social feeds, messaging systems, and collaborative tools maintain causal
                        ordering without global coordination.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    PARTITION TOLERANCE
                  </h3>
                  <div className="space-y-3 text-sm text-graphite-800 dark:text-ivory-300">
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Multi-Region Replication
                      </div>
                      <p className="text-xs">
                        Data replicated across geographic regions with conflict-free replicated data
                        types (CRDTs) for offline-first capabilities.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Split-Brain Prevention
                      </div>
                      <p className="text-xs">
                        Quorum-based decision making ensures network partitions cannot create
                        conflicting system states.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-graphite-900 dark:text-ivory-100 mb-1">
                        Automated Failover
                      </div>
                      <p className="text-xs">
                        Health checks and consensus algorithms trigger automatic leader election
                        and traffic rerouting during failures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Pipelines */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Data Pipelines
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                INGESTION & PROCESSING
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Data pipelines move information from operational systems through transformation layers
                into analytical datastores. We implement both batch processing (Apache Spark, Hadoop)
                and stream processing (Apache Flink, Kafka Streams) depending on latency requirements.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                  PIPELINE ARCHITECTURE
                </h3>
                <div className="space-y-4 text-sm text-graphite-800 dark:text-ivory-300">
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Ingestion Layer:</strong> Data
                    enters through REST APIs, message queues, database change streams, or file uploads.
                    Ingestion services validate schemas, deduplicate events, and route to appropriate topics.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Transformation Layer:</strong> Stream
                    processors apply business logic, join multiple data sources, aggregate time windows, and
                    enrich events with reference data. Transformations are versioned and tested independently.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Storage Layer:</strong> Processed
                    data lands in databases optimized for access patterns: OLTP databases for transactional
                    queries, columnar stores for analytics, search indexes for full-text retrieval.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Quality Assurance:</strong> Data
                    quality checks run continuously, measuring completeness, accuracy, consistency, and
                    timeliness. Violations trigger alerts and quarantine corrupted data.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    50TB+
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Daily data processing volume
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    &lt;5min
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    End-to-end pipeline latency
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Data quality SLA target
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Security Layers
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                DEFENSE IN DEPTH
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Security is implemented as concentric layers, each providing independent protection.
                Compromising one layer does not compromise the entire system. We assume adversaries
                have penetrated perimeter defenses and design accordingly.
              </p>
              <div className="space-y-6 mt-8">
                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Layer 1: Network Security
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Virtual private clouds (VPCs) with isolated subnets, network access control lists,
                    security groups, and private link connections. All traffic flows through next-generation
                    firewalls with intrusion detection and prevention.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Zero incoming internet traffic to application layers</li>
                    <li>→ Outbound traffic filtered through egress gateways</li>
                    <li>→ Service mesh encrypts all inter-service communication</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Layer 2: Identity & Access Management
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Every request authenticated using OAuth 2.0, SAML, or mutual TLS. Authorization
                    enforced through role-based access control (RBAC) and attribute-based access control
                    (ABAC) with principle of least privilege.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Just-in-time access provisioning with time-bound permissions</li>
                    <li>→ Multi-factor authentication mandatory for human access</li>
                    <li>→ Service accounts rotated automatically every 90 days</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Layer 3: Data Protection
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    All data encrypted at rest using AES-256 with customer-managed encryption keys stored
                    in hardware security modules. Data in transit uses TLS 1.3 with perfect forward secrecy.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Field-level encryption for sensitive data (PII, PCI, PHI)</li>
                    <li>→ Data masking and tokenization for development environments</li>
                    <li>→ Immutable audit logs of all data access operations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-oxide-600 dark:border-oxide-500 pl-4 sm:pl-6">
                  <h3 className="font-sans text-lg font-semibold mb-2 md:mb-3 text-graphite-900 dark:text-ivory-100">
                    Layer 4: Application Security
                  </h3>
                  <p className="text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed mb-3">
                    Static application security testing (SAST), dynamic application security testing (DAST),
                    and software composition analysis (SCA) integrated into CI/CD pipelines. Vulnerabilities
                    block deployment.
                  </p>
                  <ul className="text-sm text-graphite-700 dark:text-ivory-400 space-y-1">
                    <li>→ Input validation and sanitization on all user inputs</li>
                    <li>→ Content security policies preventing XSS attacks</li>
                    <li>→ Rate limiting and request throttling at API gateways</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Readiness */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Compliance Readiness
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                REGULATORY FRAMEWORKS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Compliance cannot be bolted on after deployment. Our systems are architected with compliance
                controls as foundational requirements. Data residency, audit trails, access controls, and
                retention policies are embedded in infrastructure design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    SECURITY CERTIFICATIONS
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ SOC 2 Type II (annual audits)</li>
                    <li>→ ISO 27001 Information Security</li>
                    <li>→ ISO 27017 Cloud Security</li>
                    <li>→ ISO 27018 Privacy Protection</li>
                    <li>→ PCI DSS Level 1 Service Provider</li>
                    <li>→ CSA STAR Level 2 Certification</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                    REGULATORY COMPLIANCE
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ GDPR (EU General Data Protection)</li>
                    <li>→ CCPA/CPRA (California Privacy)</li>
                    <li>→ HIPAA/HITECH (Healthcare)</li>
                    <li>→ FINRA/SEC (Financial Services)</li>
                    <li>→ ITAR (Export Control)</li>
                    <li>→ FedRAMP Moderate (in progress)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section>
        <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-graphite-950 dark:text-ivory-50">
                Performance Optimization
              </h2>
              <div className="font-mono text-[10px] sm:text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                LATENCY & THROUGHPUT
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                Performance optimization operates at every layer of the stack: network protocols, database
                queries, caching strategies, code efficiency, and resource allocation. We measure performance
                continuously and optimize based on production telemetry.
              </p>
              <div className="technical-block mt-8">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3 md:mb-4">
                  OPTIMIZATION STRATEGIES
                </h3>
                <div className="space-y-4 text-sm text-graphite-800 dark:text-ivory-300">
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Caching Hierarchy:</strong> Multi-tier
                    caching from edge CDN (static assets), application cache (Redis), database query cache,
                    to CPU cache-friendly data structures. Cache invalidation uses time-to-live and
                    event-driven purging.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Database Optimization:</strong> Query
                    execution plans analyzed, indexes created based on access patterns, connection pooling
                    configured, read replicas for read-heavy workloads, and query result caching.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Resource Allocation:</strong> Kubernetes
                    resource requests and limits tuned per service, horizontal pod autoscaling based on
                    custom metrics, and vertical scaling for memory-intensive workloads.
                  </p>
                  <p>
                    <strong className="text-graphite-900 dark:text-ivory-100">Network Optimization:</strong> HTTP/2
                    and HTTP/3 protocols, gRPC for inter-service communication, connection keep-alive,
                    TCP buffer tuning, and anycast routing for lowest-latency paths.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    &lt;15ms
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    p95 API response time
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    1M+
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Requests per second capacity
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Cache hit ratio target
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-oxide-600 dark:text-oxide-500 mb-2">
                    &lt;100ms
                  </div>
                  <div className="text-sm text-graphite-700 dark:text-ivory-400">
                    Database query p99 latency
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
