import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dad's Construction</h1>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Building With Integrity</h2>
          <p className="text-lg">Reliable, professional construction services you can trust.</p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
        <p className="text-gray-700 mb-4">We specialize in residential and commercial projects, renovations, and custom builds.</p>
        <Link href="/services" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">View Services</Link>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Dad's Construction. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
