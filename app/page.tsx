"use client";

import Image from "next/image";
import { useState } from "react";

const trustCards = [
  ["Every requirement has an owner", "Nothing is published without a named institution, a source link, a version, a validation status and a review date. If any of those are missing, the request lacks proof and is not published."],
  ["Claims carry evidence class", "Self-declared, submitted, source-verified and independently verified are shown as different things. Nothing is presented as confirmed until it has been."],
  ["Highly Confidential", "You choose the recipient, the fields, the documents and the expiry date. Withdraw at any time and access stops immediately, while the record of what happened is kept."],
  ["A person makes every decision", "Shortlisting, referral and outcome acceptance are made by a named officer with a recorded reason. No score decides anything about you, and any decision can be challenged."],
];

function Logo() {
  return <Image src="/nseg-logo.png" alt="Nigeria Service Expert Gateway" width={140} height={32} priority />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Nigeria Service Expert Gateway home"><Logo /></a>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          <div className={`navlinks ${menuOpen ? "is-open" : ""}`}>
            <a href="#why-trust-us" onClick={closeMenu}>Why trust us</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#the-process" onClick={closeMenu}>The process</a><a href="#observatory" onClick={closeMenu}>Observatory</a>
          </div>
          <div className="nav-actions"><a className="login" href="/login">Log In</a><a className="get-started" href="/get-started">Get Started</a></div>
        </nav>
        <div className="hero-content" id="top">
          <p className="official-badge">An official platform of the Federal Ministry of Industry, Trade and Investment</p>
          <h1 id="hero-title">Nigerian expertise,<br />matched to the world — <em>with proof</em></h1>
          <p className="hero-description">A national platform where international demand is verified, market requirements are published with their source, Nigerian capability is evidenced rather than claimed.</p>
          <div className="hero-buttons"><a className="cta cta-primary" href="/get-started">Register as a Buyer</a><a className="cta" href="/get-started">Register as an Exporter</a><a className="cta cta-observatory" href="#observatory">View the Observatory <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="hero-card hero-card-left" aria-label="Requirements summary"><i aria-hidden="true" /><strong>8 published requirements</strong><small>6 owning institutions, each version-dated</small></aside>
        <aside className="hero-card hero-card-right" aria-label="Providers summary"><i aria-hidden="true" /><strong>6 evidenced providers</strong><small>5 with current capacity confirmations</small></aside>
        <div className="hero-wave" aria-hidden="true" />
      </section>
      <section className="trust-section" id="why-trust-us" aria-labelledby="trust-title">
        <h2 id="trust-title">Why we can be trusted</h2>
        <div className="trust-grid">
          {trustCards.map(([title, description], index) => <article className="trust-card" key={title}><i className={`trust-icon trust-icon-${index + 1}`} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>
      <section className="legacy-metrics" id="observatory"><span>$1m <i /> Verified Export Value</span><span>8 <i /> Published Requirements</span><span>6 <i /> Validating Institutions</span></section>
      <section className="legacy-approach" id="how-it-works"><div className="legacy-art"><h2>Our<br />Approach</h2><b>↘</b><Image src="/3-removebg.png" alt="Decorative abstract glass form" width={280} height={220} /></div><div><strong>We check every credential, track every engagement,<br />and guide you through each layer of trust.</strong><p><b>Four principles, in order;</b><br /><b>1. Verification before opportunity</b> — every identity, credential and delivery record is checked against national and international registries.<br /><b>2. Readiness, not just registration</b> — exporters move through a structured readiness pathway until capability meets the standards buyers expect.<br /><b>3. Trust that compounds</b> — three tiers, from Registered Talent to Top-Rated Export Partner, reward track record with real reach.<br /><b>4. One identity, every portal</b> — a single account and audit trail carries across demand, regulation, supply and policy intelligence.</p></div></section>
      <section className="legacy-process" id="the-process"><h2>The Process</h2><p>From a stated requirement to a verified outcome. Five stages you can follow end to end inside this working prototype.</p><div className="legacy-process-grid"><article><b>01</b><h3>Demand placed by buyer</h3><p>A buyer submits a structured requirement. Authority and credibility are checked.</p></article><article><b>02</b><h3>Verification & regulation</h3><p>An officer decides, with a recorded reason. One canonical opportunity is created.</p></article><Image src="/Frame 12611563343.png" alt="Abstract glass connection" width={420} height={310}/><article><b>03</b><h3>System matches capability</h3><p>Evidenced capability and stated capacity are compared, with the reasoning shown in full.</p></article><article><b>04</b><h3>Consent & referral</h3><p>Nothing is disclosed until the exporter agrees, field by field, with an expiry.</p></article><article><b>05</b><h3>Contract & outcomes</h3><p>Accepted, then recorded with evidence and verified by authorized personnel.</p></article></div></section>
      <footer className="legacy-footer"><div><FooterLogo /><p>Delivered by the National Coordination Mechanism for Services Exports and the National Talent Export Programme.</p></div><FooterColumn title="Explore" links={["Requirements register", "Observatory", "How it works", "Our standards"]}/><FooterColumn title="About" links={["The programme", "Governance", "Participating institutions", "Service documentation"]}/><FooterColumn title="Get Help" links={["Support and FAQs", "Report a problem", "Challenge a decision", "Contact us"]}/><div className="legacy-copyright"><span>© 2026 Nigeria Service Export Gateway. All rights reserved.</span><nav><a href="#top">Sitemap</a><a href="#top">Security</a><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></nav></div></footer>
    </main>
  );
}

const footerLinkTargets: Record<string, string> = { "Requirements register": "#observatory", Observatory: "#observatory", "How it works": "#how-it-works", "Our standards": "#why-trust-us", "The programme": "#top", Governance: "#top", "Participating institutions": "#why-trust-us", "Service documentation": "#the-process", "Support and FAQs": "#top", "Report a problem": "#top", "Challenge a decision": "#the-process", "Contact us": "#top" };

function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div className="legacy-footer-column"><b>{title}</b>{links.map((link) => <a href={footerLinkTargets[link] ?? "#top"} key={link}>{link}</a>)}</div>; }

function FooterLogo() { return <div className="footer-logo" aria-label="Nigeria Service Export Gateway"><span className="footer-logo-mark" aria-hidden="true"><Image src="/nseg-logo.png" alt="" width={158} height={38} /></span><span>Nigeria Service<br />Export Gateway</span></div>; }
