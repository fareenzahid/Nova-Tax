import ScrollReveal from "./components/ScrollReveal";
import CountUp from "./components/CountUp";
import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "Tax Preparation",
    desc: "Professional preparation of individual and business tax returns with maximum accuracy and compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    number: "01",
  },
  {
    title: "Tax Planning",
    desc: "Strategic tax planning to minimize liabilities and maximize savings throughout the year.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    number: "02",
  },
  {
    title: "Audit Support",
    desc: "Expert representation and support during IRS audits to protect your interests.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "03",
  },
  {
    title: "Business Advisory",
    desc: "Comprehensive business consulting to optimize your financial structure and growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    number: "04",
  },
  {
    title: "International Tax",
    desc: "Specialized services for businesses operating across borders and international tax compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "05",
  },
  {
    title: "Payroll Services",
    desc: "Complete payroll management solutions to streamline your business operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    number: "06",
  },
];

const whyUs = [
  {
    title: "Certified Professionals",
    desc: "Our team consists of CPAs, Enrolled Agents, and tax attorneys with decades of combined experience.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Timely Delivery",
    desc: "We understand deadlines and ensure all filings are completed on time, every time.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Accuracy",
    desc: "Our multi-step review process ensures your returns are error-free and optimized.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Fast Processing",
    desc: "Quick turnaround times without compromising on quality or accuracy.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const stats = [
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 5000, suffix: "+", label: "Happy Clients" },
  { end: 50, suffix: "+", label: "Expert Advisors" },
  { end: 99, suffix: "%", label: "Success Rate" },
];

const benefits = [
  "Free initial consultation",
  "Transparent pricing",
  "Year-round support",
  "Guaranteed satisfaction",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center hero-gradient text-white pt-16 overflow-hidden"
      >
        <div className="hero-particle" style={{ top: "20%", left: "10%", animationDelay: "0s" }} />
        <div className="hero-particle" style={{ top: "40%", left: "80%", animationDelay: "1s" }} />
        <div className="hero-particle" style={{ top: "60%", left: "30%", animationDelay: "2s" }} />
        <div className="hero-particle" style={{ top: "80%", left: "70%", animationDelay: "0.5s" }} />
        <div className="hero-particle" style={{ top: "30%", left: "60%", animationDelay: "1.5s" }} />
        <div className="hero-particle" style={{ top: "70%", left: "20%", animationDelay: "2.5s" }} />
        <div className="hero-particle" style={{ top: "15%", left: "90%", animationDelay: "3s" }} />
        <div className="hero-particle" style={{ top: "85%", left: "50%", animationDelay: "0.8s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-down">
            Welcome to NOVATAX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            Your trusted partner in tax consulting and financial planning. We simplify complex tax matters so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <a
              href="#contact"
              className="btn-ripple px-8 py-3 bg-white text-[#002f60] font-semibold rounded-lg hover:bg-gray-100 transition-all hover-scale"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="btn-ripple px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover-scale"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="w-20 h-1 bg-[#002f60] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="reveal-left" delay={200}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Expert Tax Solutions for Your Business
                </h3>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience, NOVATAX has been helping businesses and individuals navigate the complex world of taxation. Our team of certified professionals is dedicated to providing personalized solutions that maximize your returns while ensuring full compliance.
                </p>
                <p className="text-gray-600">
                  We believe in building long-term relationships with our clients, understanding their unique needs, and delivering results that exceed expectations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right" delay={400}>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {stats.map((stat, i) => (
                    <div key={i} className="counter-box">
                      <div className="text-4xl font-bold text-[#002f60]">
                        <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#002f60] mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprehensive tax solutions tailored to meet your specific needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={i} animation="reveal-up" delay={i * 150}>
                <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-lift h-full">
                  {/* Top Accent Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#002f60] via-[#0050a0] to-[#002f60]" />

                  <div className="p-8">
                    {/* Service Number */}
                    <span className="text-6xl font-black text-gray-100 absolute top-4 right-6 group-hover:text-[#e6eff9] transition-colors duration-300">
                      {s.number}
                    </span>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#002f60] rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#002f60]/30">
                      {s.icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002f60] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{s.desc}</p>

                    {/* Bottom Line */}
                    <div className="mt-6 flex items-center gap-2 text-[#002f60] font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="min-h-screen flex items-center bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-[#002f60] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5">
              {whyUs.map((item, i) => (
                <ScrollReveal key={i} animation="reveal-left" delay={i * 150}>
                  <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#002f60]/20 transition-all duration-300 overflow-hidden">
                    {/* Left accent line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#002f60] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#002f60] to-[#001a35] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#002f60]/20">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#002f60] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#002f60] transition-colors duration-300">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="reveal-right" delay={300}>
              <div className="bg-gradient-to-br from-[#002f60] to-[#001a35] rounded-2xl p-8 text-white flex flex-col justify-center hover-glow h-full">
                <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Taxes?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of satisfied clients who have saved millions in taxes with our expert guidance.
                </p>
                <ul className="space-y-3 mb-8">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-white text-[#002f60] font-semibold rounded-lg hover:bg-gray-100 transition-all hover-scale btn-ripple text-center"
                >
                  Schedule a Call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal animation="reveal-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-[#002f60] mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Get in touch with our team of experts. We are here to help you with all your tax needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal animation="reveal-left" delay={200}>
              <div className="bg-white rounded-lg shadow-lg p-8 hover-glow">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                {
                  title: "Our Office",
                  detail: "G-10A Ground Floor, Pace Tower, Model Town, Lahore",
                  sub: "Visit us anytime",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Phone",
                  detail: "(0326) 0860-148",
                  sub: "Mon-Fri 9am-6pm",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  title: "Email",
                  detail: "novatax.online@gmail.com",
                  sub: "We reply within 24hrs",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Business Hours",
                  detail: "Mon - Fri: 9:00 AM - 6:00 PM",
                  sub: "Weekend appointments available",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((c, i) => (
                <ScrollReveal key={i} animation="reveal-right" delay={200 + i * 150}>
                  <div className="group relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-[#002f60]/20 transition-all duration-300 overflow-hidden">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#002f60] to-[#001a35] rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#002f60]/20">
                        {c.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#002f60] transition-colors">{c.title}</h4>
                        <p className="text-gray-600 text-sm truncate">{c.detail}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{c.sub}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#002f60] transition-colors duration-300">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
