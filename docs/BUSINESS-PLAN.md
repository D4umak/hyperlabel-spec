# HyperLabel — Business Plan

**Track Any Cargo, Anywhere**

---

## Executive Summary

**HyperLabel** is a disposable GPS tracking label that provides real-time cargo visibility for $20-25 per shipment. Unlike traditional trackers costing $100-500, HyperLabel is thin (3.5mm), works in 180+ countries, and requires no technical setup—just scan, peel, and stick.

**Market Opportunity:** The global cargo tracking market exceeds $20B, with a growing segment of small-to-medium businesses underserved by expensive enterprise solutions.

**Business Model:** Direct-to-business label sales with expanding margins at scale (47% → 69% gross margin over 3 years).

**Traction:** Production-ready hardware, live platform, and ready for first customer pilots.

**Funding:** Seeking $250K seed to manufacture initial inventory, acquire first 150 customers, and reach $125K revenue in Year 1.

---

## 1. The Problem

### 1.1 Cargo Visibility Gap

Businesses shipping high-value goods face three critical challenges:

| Problem | Impact | Current Solutions Fall Short |
|---------|--------|------------------------------|
| **Black Holes** | Cargo goes dark during flights, ocean transit, and remote areas | Traditional trackers lose connectivity; carrier systems only work within their network |
| **Cost Barrier** | Tracking devices cost $100-500+ each | Not economical for single shipments or SMBs |
| **Complexity** | Enterprise solutions require IT integration | Overkill for businesses shipping 10-100 items/year |

### 1.2 Market Pain Points

**From Customer Research:**

> "I ship $50K worth of electronics from Shenzhen to London. The forwarder gives me updates every 3-4 days. If something goes wrong, I find out too late." — E-commerce Seller

> "We tried Tive, but at $200 per tracker, it only makes sense for shipments over $10K. Most of our orders are $2-5K." — Amazon FBA Seller

**Quantified Pain:**
- **$15B** lost annually to cargo theft and delays globally
- **70%** of SMB shipments have limited or no tracking
- **40%** of logistics executives cite visibility as top-3 priority

---

## 2. The Solution

### 2.1 Product Overview

**HyperLabel** is a credit-card-thin GPS tracking label that:

- **Costs $20-25** (vs. $100-500 for competitors)
- **Works everywhere** (180+ countries, including flights & ocean)
- **Requires zero setup** (scan QR code, peel, stick, track)
- **Lasts 60+ days** (covers most international shipments)

### 2.2 How It Works

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  1. ORDER   │───▶│  2. PEEL &  │───▶│  3. TRACK   │───▶│  4. RECEIVE │
│   LABELS    │    │    STICK    │    │  ANYWHERE   │    │    CARGO    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     │                   │                  │                   │
     ▼                   ▼                  ▼                   ▼
  Buy online         Activate by        Real-time map      Consignee
  (1-10 packs)       QR scan,          with alerts &      confirms
                     attach label       share link         delivery
```

### 2.3 Key Features

| Feature | Benefit |
|---------|---------|
| **Ultra-thin design** (3.5mm) | Fits on any package without bulk |
| **Global eSIM** (Onomondo) | Works in 180+ countries automatically |
| **Offline storage** | Captures location even without signal, syncs later |
| **Shareable links** | Consignee tracks without account |
| **Delivery confirmation** | Automatic geofence detection |
| **Low battery alerts** | Proactive notifications |

### 2.4 Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Hardware** | Custom PCB, LTE-M modem, GPS | Designed for manufacturing scale |
| **Connectivity** | Onomondo eSIM | Single SIM, global coverage |
| **Platform** | Next.js, PostgreSQL, Clerk, Stripe | Modern, scalable architecture |
| **Hosting** | Vercel / GCP | Auto-scaling, 99.9% uptime |

---

## 3. Market Analysis

### 3.1 Market Size

| Segment | Size | Notes |
|---------|------|-------|
| **TAM** | $20B+ | Global cargo tracking & visibility market |
| **SAM** | $2B | Addressable with disposable labels (SMB + mid-market) |
| **SOM (Year 1)** | $500K | China → EU/US corridor |
| **SOM (Year 3)** | $5M | Expanded geography + enterprise |

### 3.2 Market Trends

**Tailwinds:**
- eSIM costs dropped 70% since 2022
- LTE-M/NB-IoT coverage expanding rapidly
- Supply chain visibility is board-level priority post-COVID
- E-commerce cross-border trade growing 25% YoY

**Market Growth:** 12% CAGR for cargo tracking, 25%+ for disposable solutions

### 3.3 Target Customers

**Primary (MVP):**

| Segment | Size | Pain Level | Volume |
|---------|------|------------|--------|
| **Amazon FBA sellers** | 2M+ globally | High | 10-100/month |
| **E-commerce brands** | 100K+ | High | 50-500/month |
| **Art & antiques dealers** | 50K+ | Very High | 5-20/month |
| **Electronics traders** | 200K+ | High | 20-200/month |

**Secondary (Year 2+):**

| Segment | Opportunity |
|---------|-------------|
| Freight forwarders | White-label / resale partnerships |
| 3PL providers | Integrated solution |
| Enterprise logistics | API integration |

### 3.4 Customer Personas

**Persona 1: "The Importer" (Primary Buyer)**
- E-commerce seller shipping from China to EU/US
- Ships 20-50 packages/month, avg value $3-10K each
- Currently uses carrier tracking (unreliable) or nothing
- Willing to pay $20-30 for peace of mind on high-value items

**Persona 2: "The Forwarder" (Secondary User)**
- Receives label from importer
- Activates and attaches to cargo
- Values simplicity (no app download, no account required)

---

## 4. Competitive Analysis

### 4.1 Competitive Landscape

| Competitor | Type | Price | Target | Weakness vs. HyperLabel |
|------------|------|-------|--------|-------------------------|
| **Tive** | Reusable | $150-300 | Enterprise | Too expensive for SMB |
| **Roambee** | Reusable | $200-400 | Enterprise | Complex setup, long contracts |
| **Sensitech** | Reusable | $300+ | Pharma/cold chain | Niche, very expensive |
| **SODAQ** | Smart label | €50-100 | Mid-market | Higher price, reusable model |
| **Sensos** | Smart label | €30-80 | Mid-market | Similar but higher price |
| **Reelables** | Disposable | $15-25 | SMB | Direct competitor |

### 4.2 Competitive Positioning

```
                    HIGH PRICE
                        │
     Sensitech ●        │        ● Controlant
        $300+           │            $400+
                        │
     Roambee ●          │        ● Tive
        $200            │          $150
                        │
    ────────────────────┼────────────────────
    ENTERPRISE          │           CONSUMER
    (Complex)           │           (Simple)
                        │
     SODAQ ●            │        
       €75              │        ★ HyperLabel
                        │            $22
     Sensos ●           │        ● Reelables
       €50              │            $20
                        │
                    LOW PRICE
```

### 4.3 Competitive Moat

| Advantage | Description | Defensibility |
|-----------|-------------|---------------|
| **Hardware IP** | Proprietary ultra-thin design (3.5mm, 60+ day battery) | Medium - patents pending |
| **Manufacturing** | China-based founder with supplier relationships | High - 5+ year head start |
| **Unit Economics** | <$8/label COGS at scale | Medium - volume-dependent |
| **First-Mover** | No dominant player in disposable tracking | Low - fast-followers possible |
| **Customer Relationships** | Direct access to China export ecosystem | High - trust-based |

---

## 5. Go-to-Market Strategy

### 5.1 Phase 1: Founder-Led Sales (Months 1-6)

**Target:** 150 customers, 5,500 labels, $125K revenue

| Channel | Tactic | Expected Customers |
|---------|--------|-------------------|
| **Founder network** | Direct outreach to Andrii's contacts | 30-40 |
| **Amazon seller communities** | Reddit, Facebook groups, forums | 40-50 |
| **LinkedIn outreach** | Targeted messaging to e-commerce sellers | 30-40 |
| **Content marketing** | SEO blog posts, YouTube demos | 20-30 |
| **Referrals** | Customer word-of-mouth | 10-20 |

**Key Messages:**
- "Track your $5K shipment for $22, not $200"
- "Know exactly where your cargo is—even on a plane"
- "No app, no contract, no complexity"

### 5.2 Phase 2: Scalable Channels (Months 7-18)

| Channel | Investment | Expected ROI |
|---------|------------|--------------|
| **Google Ads** | $30K | 3-4x |
| **Trade shows** | $15K | Relationship-building |
| **Partnerships** | BD effort | Revenue share |
| **API integrations** | Engineering | Enterprise deals |

### 5.3 Pricing Strategy

| Pack | Price | Target Customer |
|------|-------|-----------------|
| **1 label** | $25 | Trial / occasional |
| **5-pack** | $110 ($22/ea) | Regular shipper |
| **10-pack** | $200 ($20/ea) | Volume shipper |
| **Enterprise** | Custom | 100+ labels/month |

**Why This Pricing:**
- $25 single: Low barrier to trial
- $20-22 volume: Competitive with Reelables, 80%+ below Tive/Roambee
- Gross margin remains >60% at volume

### 5.4 Sales Process

```
Awareness → Interest → Trial → Adoption → Expansion
    │          │         │         │          │
 Content    Demo/    1-3 labels   5-10+    Enterprise
  + Ads    Landing    order      packs      deal
            Page
```

**Conversion Targets:**
- Website → Sign-up: 5%
- Sign-up → First order: 30%
- First order → Repeat: 40%

---

## 6. Operations Plan

### 6.1 Supply Chain

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  MANUFACTURING  │───▶│   FULFILLMENT   │───▶│    CUSTOMER     │
│   (Shenzhen)    │    │  (UK warehouse) │    │   (Global)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
       │                       │                      │
  Lead time: 60-90d     Ship time: 1-3d         Use time: 60d
  MOQ: 1,000 units      Inventory: 2,000        Support: Email
```

### 6.2 Manufacturing

| Phase | Volume | Lead Time | Cost/Unit |
|-------|--------|-----------|-----------|
| **Pilot** | 1,000 | 90 days | $8.00 |
| **Year 1** | 8,000 | 60 days | $7.00 |
| **Year 2** | 40,000 | 45 days | $5.50 |
| **Year 3** | 120,000 | 30 days | $4.50 |

**Quality Control:**
- 100% functional testing before shipment
- 5% sample inspection for defects
- Warranty reserve: 3% of revenue

### 6.3 Fulfillment

| Market | Fulfillment | Ship Time | Cost |
|--------|-------------|-----------|------|
| **UK/EU** | UK warehouse | 2-5 days | $2.00 |
| **US** | Direct from UK (initially) | 5-10 days | $4.00 |
| **China** | Direct ship | 7-14 days | $3.00 |

**Year 2:** Add US warehouse for faster US delivery

### 6.4 Customer Support

| Tier | Channel | Response Time | Cost |
|------|---------|---------------|------|
| **MVP** | Email | <24 hours | Founders |
| **Year 1** | Email + FAQ | <12 hours | Part-time hire |
| **Year 2** | Chat + Email | <4 hours | 1 FTE |

---

## 7. Financial Summary

### 7.1 Revenue Projections

| Year | Labels Sold | Revenue | Gross Margin |
|------|-------------|---------|--------------|
| **2026** | 5,500 | $125K | 47% |
| **2027** | 30,000 | $750K | 62% |
| **2028** | 100,000 | $2.5M | 69% |

### 7.2 Path to Profitability

| Milestone | Timeline | Revenue | Status |
|-----------|----------|---------|--------|
| First sale | Q1 2026 | - | ✅ Ready |
| Break-even (monthly) | Q4 2026 | $14K/mo | 🎯 Target |
| Cash flow positive | Q3 2027 | $60K/mo | 🎯 Target |
| Profitable (annual) | 2028 | $2.5M | 🎯 Target |

### 7.3 Funding Requirements

| Round | Amount | Use | Milestone |
|-------|--------|-----|-----------|
| **Seed** | $250K | Manufacturing, GTM | 5K labels, 150 customers |
| **Series A** | $1-2M | Scale, team, product | 30K labels, $50K MRR |

---

## 8. Team

### 8.1 Founders

**Andrii Tkachuk — CEO & Hardware**
- 10+ years in electronics manufacturing in China
- Founded UTEC (hardware development company)
- Designed HyperLabel device from concept to production
- Deep relationships with Chinese suppliers and manufacturers

**Denys Chumak — Product & Platform**
- Product management and full-stack development
- Built the HyperLabel tracking platform
- Responsible for business plan, investor materials, user research

### 8.2 Hiring Plan

| Role | Timeline | Focus |
|------|----------|-------|
| Customer Success | Q2 2026 | Support, onboarding |
| Sales Lead | Q3 2026 | Outbound, partnerships |
| Full-Stack Engineer | Q4 2026 | Platform features |
| Marketing | Q1 2027 | Growth, content |

### 8.3 Advisors (Target)

| Area | Need | Status |
|------|------|--------|
| Logistics industry | Market access, credibility | Seeking |
| B2B SaaS growth | GTM, metrics | Seeking |
| Hardware manufacturing | Supply chain, quality | Active (informal) |

---

## 9. Risk Analysis

### 9.1 Key Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Hardware defects** | Medium | High | QA processes, warranty reserve, batch testing |
| **Slow adoption** | Medium | High | Pilot programs, case studies, referral incentives |
| **Competitor entry** | Medium | Medium | Speed to market, customer relationships, IP |
| **Supply chain** | Low | High | Multiple suppliers, inventory buffer |
| **Connectivity issues** | Low | Medium | Multi-carrier eSIM, offline storage |

### 9.2 Regulatory Considerations

| Area | Status | Notes |
|------|--------|-------|
| CE marking (EU) | Required | Standard process |
| FCC (US) | Required | Onomondo handles |
| GDPR | Required | Privacy-by-design |
| Export controls | N/A | Consumer electronics |

---

## 10. Milestones & Metrics

### 10.1 12-Month Milestones

| Quarter | Milestone | Success Metric |
|---------|-----------|----------------|
| **Q1 2026** | MVP launch | Platform live, first 10 customers |
| **Q2 2026** | Traction | 50 customers, 2,000 labels sold |
| **Q3 2026** | Growth | 100 customers, break-even monthly |
| **Q4 2026** | Scale prep | 150 customers, Series A process |

### 10.2 Key Performance Indicators

| KPI | Q1 Target | Q4 Target |
|-----|-----------|-----------|
| Labels sold (cumulative) | 500 | 5,500 |
| Active customers | 25 | 150 |
| Monthly revenue | $5K | $15K |
| CAC | <$150 | <$100 |
| NPS | 30+ | 40+ |
| Platform uptime | 99.5% | 99.5% |

---

## 11. The Ask

### 11.1 Funding Request

**Raising:** $250,000 Seed Round

**Terms:** Convertible note or SAFE, standard seed terms

### 11.2 Use of Funds

| Category | Amount | % | Purpose |
|----------|--------|---|---------|
| **Manufacturing** | $100,000 | 40% | 8,000 labels (2 production batches) |
| **Engineering** | $75,000 | 30% | Platform scale, mobile app |
| **Sales & Marketing** | $50,000 | 20% | Customer acquisition |
| **Operations** | $25,000 | 10% | Legal, insurance, admin |

### 11.3 Investor Value-Add

Most valuable beyond capital:
1. **Logistics industry connections** — Introductions to freight forwarders, 3PLs
2. **B2B SaaS expertise** — GTM playbook, metrics guidance
3. **Manufacturing experience** — Supply chain optimization

---

## Appendix

### A. Product Screenshots

*[Link to demo or screenshots]*

### B. Customer Testimonials

*[To be added after pilot customers]*

### C. Technical Architecture

*[Reference: SPEC.md Section 6]*

### D. Full Financial Model

*[Reference: FINANCIAL-MODEL.md]*

---

**Contact:**

Andrii Tkachuk — andrii@hyperlabel.io  
Denys Chumak — denys@hyperlabel.io

**Website:** hyperlabel.io

---

*Last Updated: January 2026*
