export default function OfferingsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-8">
              02 — ENTERPRISE OFFERINGS
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Infrastructure Solutions for Mission-Critical Operations
            </h1>
            <p className="text-xl text-ivory-300 leading-relaxed">
              Purpose-built systems architecture, technical scope, deployment models, and business impact
              for organizations requiring enterprise-grade infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Distributed Infrastructure Platform */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 01
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                Distributed Infrastructure Platform
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  A horizontally scalable infrastructure layer designed for organizations processing billions
                  of transactions daily. Provides compute, storage, and network resources with automated
                  orchestration, geographic distribution, and compliance-ready isolation.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Multi-region Kubernetes clusters with cross-region replication</li>
                    <li>→ Auto-scaling based on custom metrics (CPU, memory, request rate, queue depth)</li>
                    <li>→ GitOps-based deployment pipelines with automated rollback</li>
                    <li>→ Service mesh implementation (Istio/Linkerd) for traffic management</li>
                    <li>→ Distributed tracing and observability (Jaeger, OpenTelemetry)</li>
                    <li>→ Infrastructure as code using Terraform and Ansible</li>
                    <li>→ Immutable infrastructure with blue-green deployments</li>
                    <li>→ Network segmentation with microsegmentation policies</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Available as dedicated private cloud (single-tenant), hybrid cloud (on-premises + cloud),
                  or air-gapped deployment for classified environments. All configurations include dedicated
                  SRE support, 24/7/365 monitoring, and incident response.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Reduces infrastructure operating costs by 40-60% through automation and resource optimization.
                  Enables geographic expansion without infrastructure redesign. Provides foundation for
                  rapid product deployment cycles (from months to days).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Data Platform */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 02
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                Real-Time Data Platform
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  Event streaming and data processing infrastructure for applications requiring sub-second
                  decision-making. Handles high-velocity data ingestion, transformation, and routing with
                  guaranteed delivery and exactly-once processing semantics.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Apache Kafka clusters processing 50TB+ daily with multi-datacenter replication</li>
                    <li>→ Apache Flink for stateful stream processing and complex event detection</li>
                    <li>→ Apache Pulsar for geo-replicated messaging with global namespaces</li>
                    <li>→ Schema registry for data contract enforcement and evolution</li>
                    <li>→ Real-time data transformation using ksqlDB and custom processors</li>
                    <li>→ Exactly-once delivery guarantees using transactional producers</li>
                    <li>→ Time-series databases (InfluxDB, TimescaleDB) for temporal data</li>
                    <li>→ Change data capture (CDC) from operational databases</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Deployed as managed service with dedicated infrastructure or integrated into existing
                  Kubernetes environments. Includes real-time monitoring dashboards, alerting, and capacity
                  planning based on historical usage patterns.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Enables real-time fraud detection, dynamic pricing, predictive maintenance, and instant
                  personalization. Typical customers see 70% reduction in data latency and 3x improvement
                  in operational decision speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Systems Infrastructure */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 03
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                AI Systems Infrastructure
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  End-to-end machine learning operations platform covering data preparation, model training,
                  experimentation tracking, deployment, monitoring, and continuous retraining. Designed for
                  organizations deploying hundreds of models in regulated environments.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ GPU clusters (NVIDIA A100, H100) for distributed training</li>
                    <li>→ MLflow for experiment tracking and model registry</li>
                    <li>→ Kubeflow Pipelines for ML workflow orchestration</li>
                    <li>→ Feature stores (Feast, Tecton) for consistent feature engineering</li>
                    <li>→ Model serving with auto-scaling and A/B testing (Seldon, KServe)</li>
                    <li>→ Drift detection and model performance monitoring</li>
                    <li>→ Explainability tools for regulatory compliance (LIME, SHAP)</li>
                    <li>→ Automated retraining pipelines with data quality checks</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Full MLOps platform deployed on dedicated infrastructure with air-gapped options for
                  sensitive data. Includes data science workbenches (JupyterHub), collaborative notebooks,
                  and version-controlled model artifacts.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Reduces time-to-production for ML models from months to weeks. Enables regulatory-compliant
                  AI deployment with full audit trails. Typical ROI realized through automated underwriting,
                  predictive maintenance, demand forecasting, and customer churn prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Trust Security Architecture */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 04
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                Zero-Trust Security Architecture
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  Comprehensive security framework implementing defense-in-depth strategies, continuous
                  verification, and assumed-breach scenarios. Every request is authenticated, authorized,
                  and encrypted regardless of origin.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ Identity and access management with multi-factor authentication</li>
                    <li>→ Service-to-service authentication using mutual TLS (mTLS)</li>
                    <li>→ Hardware security modules (HSMs) for cryptographic operations</li>
                    <li>→ Network microsegmentation with software-defined perimeters</li>
                    <li>→ End-to-end encryption (AES-256) for data at rest and in transit</li>
                    <li>→ Security information and event management (SIEM) integration</li>
                    <li>→ Automated threat detection using behavioral analytics</li>
                    <li>→ Penetration testing, red team exercises, and vulnerability management</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Implemented as overlay on existing infrastructure or integrated into new deployments.
                  Includes 24/7 security operations center (SOC) monitoring, incident response playbooks,
                  and quarterly security audits.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Reduces security incidents by 85%+ through proactive threat detection. Enables compliance
                  with frameworks requiring zero-trust principles (NIST 800-207, BeyondCorp). Protects
                  against insider threats, lateral movement, and credential compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Data Network */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 05
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                Global Data Network
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  Geographically distributed content delivery and edge computing network providing
                  sub-20ms latency globally. Combines CDN capabilities with edge compute for dynamic
                  content processing and regional data residency compliance.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ 94+ points of presence across six continents</li>
                    <li>→ Edge compute nodes running containerized workloads</li>
                    <li>→ Intelligent traffic routing based on latency, cost, and compliance</li>
                    <li>→ DDoS mitigation with 10+ Tbps capacity</li>
                    <li>→ Web application firewall (WAF) with custom rule sets</li>
                    <li>→ Origin shielding and cache hierarchy optimization</li>
                    <li>→ Real-time log streaming for security and analytics</li>
                    <li>→ Private backbone network bypassing public internet</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Deployed as managed service with dedicated capacity or shared infrastructure with
                  resource guarantees. Includes CDN management dashboard, real-time analytics, and
                  automated cache invalidation.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Improves application response times by 60-80% for global users. Reduces origin
                  infrastructure costs through intelligent caching. Enables edge-based personalization
                  and A/B testing without increased latency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Database Services */}
      <section>
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-4">
                OFFERING 06
              </div>
              <h2 className="font-serif text-4xl font-bold text-graphite-950 dark:text-ivory-50">
                Managed Database Services
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Purpose
                </h3>
                <p className="editorial-text">
                  Enterprise-grade database management covering relational, document, graph, and time-series
                  databases. Provides automated backups, point-in-time recovery, read replicas, and
                  zero-downtime migrations.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Technical Scope
                </h3>
                <div className="technical-block">
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ PostgreSQL with high availability (Patroni, Stolon) and connection pooling</li>
                    <li>→ MongoDB sharded clusters with zone-aware replica sets</li>
                    <li>→ Apache Cassandra for globally distributed writes</li>
                    <li>→ Redis clusters for sub-millisecond caching and pub/sub</li>
                    <li>→ Elasticsearch for full-text search and log aggregation</li>
                    <li>→ Neo4j for graph analytics and relationship queries</li>
                    <li>→ Automated backup with retention policies and compliance archiving</li>
                    <li>→ Query performance monitoring and optimization recommendations</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Deployment Model
                </h3>
                <p className="editorial-text">
                  Available as fully managed service with SLA guarantees or self-managed with DBA-as-a-service
                  support. Includes database monitoring, performance tuning, schema migration assistance,
                  and disaster recovery planning.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold mb-3 text-graphite-900 dark:text-ivory-100">
                  Business Impact
                </h3>
                <p className="editorial-text">
                  Eliminates database administration overhead allowing teams to focus on application development.
                  Reduces data loss risk through automated backups and tested recovery procedures. Enables
                  database scaling without application rewrite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
