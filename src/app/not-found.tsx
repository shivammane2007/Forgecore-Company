import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 border-4 border-graphite-900 dark:border-ivory-100 relative">
            <div className="absolute inset-4 border-2 border-graphite-900 dark:border-ivory-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-oxide-600" />
          </div>
        </div>
        
        <div className="font-mono text-xs font-bold tracking-widest text-oxide-600 dark:text-oxide-500 mb-6">
          ERROR 404 — RESOURCE NOT FOUND
        </div>
        
        <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-8 text-graphite-950 dark:text-ivory-50">
          Page Does Not Exist
        </h1>
        
        <p className="text-lg text-graphite-800 dark:text-ivory-300 leading-relaxed mb-12">
          The requested resource could not be located within the FORGECORE infrastructure.
          This may indicate an incorrect URL, expired link, or deprecated documentation path.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="industrial-btn">
            RETURN TO HOMEPAGE
          </Link>
          <Link href="/contact" className="industrial-btn-outline">
            REPORT BROKEN LINK
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-industrial-300 dark:border-industrial-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <Link href="/overview" className="text-graphite-700 dark:text-ivory-400 hover:text-oxide-600 dark:hover:text-oxide-500">
              Overview
            </Link>
            <Link href="/offerings" className="text-graphite-700 dark:text-ivory-400 hover:text-oxide-600 dark:hover:text-oxide-500">
              Offerings
            </Link>
            <Link href="/systems" className="text-graphite-700 dark:text-ivory-400 hover:text-oxide-600 dark:hover:text-oxide-500">
              Systems
            </Link>
            <Link href="/applications" className="text-graphite-700 dark:text-ivory-400 hover:text-oxide-600 dark:hover:text-oxide-500">
              Applications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
