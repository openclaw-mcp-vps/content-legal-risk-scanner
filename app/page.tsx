export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Legal Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Scan Content for Legal Risks<br />
          <span className="text-[#58a6ff]">Before You Publish</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly check your blog posts, marketing copy, and social media for trademark, copyright, and defamation issues — before they become expensive problems.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for free trial &middot; Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '™', title: 'Trademark Detection', desc: 'Flags brand names and slogans that may infringe registered trademarks.' },
            { icon: '©', title: 'Copyright Checks', desc: 'Identifies copied or closely paraphrased content that could trigger DMCA claims.' },
            { icon: '⚖️', title: 'Defamation Alerts', desc: 'Highlights statements that could expose you to defamation or libel liability.' }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to publish safely</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              '200 scans per month',
              'Trademark, copyright & defamation checks',
              'Detailed risk reports with fix suggestions',
              'Supports blog posts, ads & social copy',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is this a substitute for a lawyer?',
              a: 'No. LegalScan is an AI-powered risk-awareness tool, not legal advice. It helps you catch obvious issues early, but always consult a qualified attorney for serious legal matters.'
            },
            {
              q: 'What types of content can I scan?',
              a: 'You can scan blog posts, landing pages, email newsletters, social media captions, ad copy, and any other written content you plan to publish publicly.'
            },
            {
              q: 'How do credits work?',
              a: 'Each scan of up to 2,000 words uses one credit. Your 200 monthly credits reset on your billing date and unused credits do not roll over.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} LegalScan. Not legal advice.
      </footer>
    </main>
  )
}
