export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SB</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dr. Serena Blake, PsyD</h3>
              <p className="text-sm text-neutral-400">Licensed Clinical Psychologist</p>
            </div>
          </div>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Providing compassionate, evidence-based therapy to help you find clarity, connection, and peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-neutral-400 text-sm">
            <span>© 2025 Dr. Serena Blake Psychology</span>
            <span>•</span>
            <span>Licensed in USA</span>
            <span>•</span>
            <span>PSY License #12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
