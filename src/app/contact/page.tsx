'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    organizationType: '',
    department: '',
    firstName: '',
    lastName: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    projectScope: '',
    message: '',
    complianceRequirements: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-8">
              07 — ENTERPRISE CONTACT & LEGAL
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Structured Inquiry System, Global Offices, and Legal Framework
            </h1>
            <p className="text-xl text-ivory-300 leading-relaxed">
              Enterprise procurement inquiries, technical evaluations, partnership proposals, and
              compliance documentation access for qualified organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Contact Form */}
      <section className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
              Enterprise Inquiry Form
            </h2>
            <p className="editorial-text">
              This form is intended for qualified enterprise organizations, government agencies, and
              institutional partners. Response time: 2-5 business days depending on inquiry complexity.
              For urgent matters, include specific requirements and timeline constraints.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  ORGANIZATION TYPE *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.organizationType}
                  onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                >
                  <option value="">Select Type</option>
                  <option value="enterprise">Enterprise Corporation (Fortune 1000)</option>
                  <option value="financial">Financial Institution</option>
                  <option value="healthcare">Healthcare Organization</option>
                  <option value="government">Government Agency</option>
                  <option value="education">Educational Institution</option>
                  <option value="technology">Technology Company</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  DEPARTMENT *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  <option value="">Select Department</option>
                  <option value="cto">Office of the CTO</option>
                  <option value="infrastructure">Infrastructure Engineering</option>
                  <option value="security">Information Security</option>
                  <option value="procurement">Procurement / Vendor Management</option>
                  <option value="legal">Legal / Compliance</option>
                  <option value="executive">Executive Leadership</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  FIRST NAME *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  LAST NAME *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  JOB TITLE *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  ORGANIZATION NAME *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Inquiry Details */}
            <div>
              <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                INQUIRY TYPE *
              </label>
              <select
                required
                className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              >
                <option value="">Select Inquiry Type</option>
                <option value="architecture">Architecture Review / Technical Evaluation</option>
                <option value="deployment">New Deployment / Implementation</option>
                <option value="partnership">Partnership / Strategic Alliance</option>
                <option value="security">Security Assessment / Compliance Audit</option>
                <option value="support">Enterprise Support Escalation</option>
                <option value="procurement">Procurement / Vendor Qualification</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                PROJECT SCOPE
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                placeholder="Describe technical requirements, expected scale, timeline, and specific challenges..."
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-3">
                DETAILED MESSAGE *
              </label>
              <textarea
                required
                rows={8}
                className="w-full px-4 py-3 bg-ivory-100 dark:bg-graphite-900 border border-industrial-300 dark:border-industrial-700 text-graphite-900 dark:text-ivory-100 focus:outline-none focus:border-oxide-600"
                placeholder="Provide detailed context, specific questions, and any relevant background information..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="industrial-btn w-full md:w-auto"
            >
              SUBMIT ENTERPRISE INQUIRY
            </button>
          </form>
        </div>
      </section>

      {/* Global Offices */}
      <section className="border-b border-industrial-300 dark:border-industrial-700 bg-graphite-900 dark:bg-graphite-900 text-ivory-100">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <h2 className="font-serif text-3xl font-bold mb-12 text-ivory-50">
            Global Office Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4">
                HEADQUARTERS — NEW YORK
              </h3>
              <div className="space-y-2 text-sm text-ivory-300">
                <p>475 Fifth Avenue</p>
                <p>Floor 28</p>
                <p>New York, NY 10017</p>
                <p>United States</p>
                <p className="pt-2 text-ivory-400">+1 (212) 555-0100</p>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4">
                EMEA — LONDON
              </h3>
              <div className="space-y-2 text-sm text-ivory-300">
                <p>1 Canada Square</p>
                <p>Canary Wharf</p>
                <p>London E14 5AB</p>
                <p>United Kingdom</p>
                <p className="pt-2 text-ivory-400">+44 (20) 7946 0100</p>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4">
                APAC — SINGAPORE
              </h3>
              <div className="space-y-2 text-sm text-ivory-300">
                <p>Marina Bay Financial Centre</p>
                <p>Tower 2, Level 32</p>
                <p>Singapore 018982</p>
                <p>Singapore</p>
                <p className="pt-2 text-ivory-400">+65 6591 0100</p>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-oxide-500 mb-4">
                EU — FRANKFURT
              </h3>
              <div className="space-y-2 text-sm text-ivory-300">
                <p>TaunusTurm</p>
                <p>Taunustor 1</p>
                <p>60310 Frankfurt am Main</p>
                <p>Germany</p>
                <p className="pt-2 text-ivory-400">+49 (69) 9675 0100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section id="data-protection" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Data Protection Statement
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                PRIVACY FRAMEWORK
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
              <p>
                FORGECORE Technologies processes personal information in accordance with applicable data
                protection regulations including the EU General Data Protection Regulation (GDPR), California
                Consumer Privacy Act (CCPA/CPRA), and equivalent frameworks in all jurisdictions where we operate.
              </p>
              <div className="technical-block">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  DATA PROCESSING PRINCIPLES
                </h3>
                <ul className="space-y-2">
                  <li>→ <strong>Lawful Basis:</strong> Processing based on legitimate business interest, contract
                  necessity, or explicit consent</li>
                  <li>→ <strong>Purpose Limitation:</strong> Data collected for specified purposes and not further
                  processed incompatibly</li>
                  <li>→ <strong>Data Minimization:</strong> Only necessary data collected for stated purposes</li>
                  <li>→ <strong>Accuracy:</strong> Reasonable steps taken to ensure personal data accuracy</li>
                  <li>→ <strong>Storage Limitation:</strong> Retention periods defined based on legal and business
                  requirements</li>
                  <li>→ <strong>Security:</strong> Appropriate technical and organizational measures protecting data</li>
                </ul>
              </div>
              <div className="technical-block">
                <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                  DATA SUBJECT RIGHTS
                </h3>
                <ul className="space-y-2">
                  <li>→ Right to access personal data we hold about you</li>
                  <li>→ Right to rectification of inaccurate personal data</li>
                  <li>→ Right to erasure ("right to be forgotten") under certain circumstances</li>
                  <li>→ Right to restrict processing in specific situations</li>
                  <li>→ Right to data portability in machine-readable format</li>
                  <li>→ Right to object to processing based on legitimate interests</li>
                </ul>
              </div>
              <p className="text-xs text-graphite-700 dark:text-ivory-400 mt-6">
                Data subject requests should be submitted to: privacy@forgecore.tech. Requests will be
                processed within 30 days (GDPR) or 45 days (CCPA) as required by applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="border-b border-industrial-300 dark:border-industrial-700">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Compliance Framework
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                CERTIFICATIONS & AUDITS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="editorial-text">
                FORGECORE maintains comprehensive compliance programs audited annually by independent third
                parties. Compliance documentation, audit reports, and security questionnaire responses
                available to qualified enterprise prospects under NDA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    SECURITY CERTIFICATIONS
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ SOC 2 Type II (annual audit)</li>
                    <li>→ ISO/IEC 27001:2013</li>
                    <li>→ ISO/IEC 27017:2015 (Cloud Security)</li>
                    <li>→ ISO/IEC 27018:2019 (PII Protection)</li>
                    <li>→ PCI DSS Level 1 Service Provider</li>
                    <li>→ CSA STAR Level 2 Certification</li>
                  </ul>
                </div>
                <div className="technical-block">
                  <h3 className="font-mono text-xs font-bold tracking-widest text-graphite-900 dark:text-ivory-100 mb-4">
                    REGULATORY COMPLIANCE
                  </h3>
                  <ul className="space-y-2 text-sm text-graphite-800 dark:text-ivory-300">
                    <li>→ GDPR (EU Data Protection)</li>
                    <li>→ CCPA/CPRA (California Privacy)</li>
                    <li>→ HIPAA/HITECH (Healthcare)</li>
                    <li>→ FINRA/SEC (Financial Services)</li>
                    <li>→ FedRAMP Moderate (in authorization)</li>
                    <li>→ ITAR (Export Control Compliance)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <div className="content-grid">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-bold mb-4 text-graphite-950 dark:text-ivory-50">
                Legal Notices
              </h2>
              <div className="font-mono text-xs tracking-widest text-oxide-600 dark:text-oxide-500">
                TERMS & CONDITIONS
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm text-graphite-800 dark:text-ivory-300 leading-relaxed">
              <p>
                <strong className="text-graphite-900 dark:text-ivory-100">Service Terms:</strong> All services
                provided under Master Services Agreement (MSA) negotiated individually with enterprise customers.
                Standard contract templates available upon qualified inquiry. Minimum contract value: $500,000
                annually. Contract terms: typically 12-36 months with renewal options.
              </p>
              <p>
                <strong className="text-graphite-900 dark:text-ivory-100">Service Level Agreements:</strong> Standard
                SLA guarantees 99.95% uptime for production systems. Enhanced SLAs available with dedicated
                infrastructure deployments. Penalties for SLA violations: service credits calculated pro-rata based
                on downtime duration and severity.
              </p>
              <p>
                <strong className="text-graphite-900 dark:text-ivory-100">Intellectual Property:</strong> All
                infrastructure code, proprietary algorithms, and system designs remain FORGECORE intellectual
                property. Customer data and application code remain customer intellectual property. Limited
                license granted for operation during contract term.
              </p>
              <p>
                <strong className="text-graphite-900 dark:text-ivory-100">Limitation of Liability:</strong> Liability
                limited to fees paid in preceding 12-month period except in cases of gross negligence or willful
                misconduct. Indirect, consequential, and punitive damages excluded except where prohibited by law.
              </p>
              <p>
                <strong className="text-graphite-900 dark:text-ivory-100">Termination:</strong> Either party may
                terminate for material breach with 90-day notice. Data extraction period: 30 days post-termination.
                All data permanently deleted after extraction period. Partial refunds not available for early
                termination without cause.
              </p>
              <p className="text-xs text-graphite-700 dark:text-ivory-400 mt-8">
                Last Updated: January 2026 — These terms apply to enterprise service agreements executed after this date.
                Existing customers operate under terms agreed at contract execution. For legal inquiries: legal@forgecore.tech
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
