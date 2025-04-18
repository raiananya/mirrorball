import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-300 text-light-100">
      {/* Navbar */}
      <header className="flex justify-between items-center px-3 py-4 shadow-md bg-dark-400">
        <div className="flex items-center space-x-2">
          <Image src="/assets/icons/logo-full.png" alt="Logo" width={150} height={30} />
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/contact" className="hover:text-green-500">Contact Us</Link>
          <Link href="/profile">
            <Image src="/assets/icons/user.svg" alt="User Profile" width={30} height={30} />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-8 md:py-12 mt-0">
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                 Dance through<span className="text-green-500"> life's challenges.</span>
            </h1>
            <p className="text-lg text-dark-700 max-w-2xl leading-relaxed py-5">
                Mental health isn't a battle to be won. It is a journey to continue walking and this is a safe space to start.
            </p>
            <Link href="/register">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition">
                Get Started
              </button>
          </Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-center  md:justify-end">
            <Image src="/assets/icons/healing.png" alt="hero-img" width={350} height={350} className="max-w-xs md:max-w-sm lg:max-w-md"/>
        </div>
      </section>
       {/* Features Section */}
       <section className="grid md:grid-cols-3 gap-8 mt-12 px-4">
        <div className="p-6 rounded-lg bg-dark-400 text-center shadow-md flex flex-col items-center">
          <Image src="/assets/icons/support.png" alt="Support" width={150} height={150} className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4"/>
          <h3 className="text-xl font-semibold mt-4">24/7 Support</h3>
          <p className="text-dark-700">Connect with professionals anytime you need help.</p>
        </div>
        <Link href="/assessments" className="block">
      <div className="p-6 rounded-lg bg-dark-400 text-center shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
        <Image
          src="/assets/icons/test.png"
          alt="Assessments"
          width={150}
          height={150}
          className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4"
        />
        <h3 className="text-xl font-semibold mt-4">Assessments</h3>
        <p className="text-dark-700">Access expert mental health guides and self-help tools.</p>
      </div>
    </Link>
        <div className="p-6 rounded-lg bg-dark-400 text-center shadow-md flex flex-col items-center">
          <Image src="/assets/icons/community.png" alt="Community"  width={150} height={150} className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4 mt-4" />
          <h3 className="text-xl font-semibold mt-4">Safe Community</h3>
          <p className="text-dark-700">Join a judgment-free space to share and heal.</p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-8 mt-12 px-4">
        <div className="p-6 rounded-lg bg-dark-400 text-center shadow-md flex flex-col items-center">
          <Image src="/assets/icons/blog.png" alt="Blog" width={150} height={150} className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4"/>
          <h3 className="text-xl font-semibold mt-4">Blogs</h3>
          <p className="text-dark-700">Connect with professionals anytime you need help.</p>
        </div>
        <div className="p-6 rounded-lg bg-dark-400 text-center shadow-md flex flex-col items-center">
          <Image src="/assets/icons/journal.png" alt="Journal" width={150} height={150} className="w-full max-w-[120px] md:max-w-[180px] h-auto mb-4" />
          <h3 className="text-xl font-semibold mt-4">Your daily journal</h3>
          <p className="text-dark-700">Access expert mental health guides and self-help tools.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold">Have Questions?</h2>
        <p className="text-dark-700 mt-2">Reach out to us anytime.</p>
        <Link href="/contact">
          <button className="mt-4 px-6 py-3 text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-full transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
