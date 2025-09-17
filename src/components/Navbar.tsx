export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <img src="/images/tactec-2nd-lockup.png" alt="TacTec" className="h-10" />
        <nav className="flex gap-6 text-gray-300">
          <a href="#challenge" className="hover:text-white">Challenge</a>
          <a href="#solution" className="hover:text-white">Solution</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#tech" className="hover:text-white">Tech</a>
          <a href="#start" className="hover:text-white">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
