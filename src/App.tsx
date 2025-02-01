import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Globe2, Laptop, DivideIcon as LucideIcon, MessageSquare, Shield, Zap, Github, Twitter, Linkedin } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security to keep your data safe and protected"
    },
    {
      icon: Globe2,
      title: "Global Scale",
      description: "Deploy worldwide with our distributed network architecture"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Round-the-clock support from our dedicated team of experts"
    }
  ];

  const pricing: PricingTier[] = [
    {
      name: "Basic",
      price: "$29",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom deployment"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      content: "This platform has transformed how we handle our workflow. The efficiency gains are remarkable.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "The best decision we made was switching to this solution. Our team productivity has increased by 200%.",
      author: "Michael Chen",
      role: "Product Manager at InnovateCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How does the free trial work?",
      answer: "Our 14-day free trial gives you full access to all features. No credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for Basic plans, priority support for Pro plans, and 24/7 phone support for Enterprise customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Workflow
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Streamline your business operations with our powerful SaaS platform.
            Built for modern teams who demand excellence.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Watch Demo
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Dashboard Preview"
            className="mt-16 rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features to help you manage, analyze, and improve.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </h2>
          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-lg">
                <p className="text-lg text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-center text-gray-600">
            Choose the plan that's right for your business
          </p>
          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50'
                    : 'bg-gray-50'
                }`}
              >
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="mt-4 text-sm">{tier.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-lg ${
                    tier.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  className="flex justify-between w-full px-6 py-4 text-left"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold">SaaS Platform</h3>
              <p className="mt-4 text-gray-400">
                Making workflow management simple and efficient for modern teams.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full text-gray-900 rounded-l-lg focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SaaS Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;