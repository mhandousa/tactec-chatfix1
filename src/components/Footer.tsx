// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-6 text-sm text-white/70">
        <img src="/images/tactec-lock-1-2-1.png" alt="TacTec" className="h-8" />

        <p className="text-center">
          © {new Date().getFullYear()} From{" "}
          <a
            href="https://ventiosolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition"
            aria-label="Visit Ventio Solutions website"
          >
            Ventio
          </a>{" "}
          With <span role="img" aria-label="love">😍</span>.
        </p>

        {/* (Optional) Add your social links here later */}
        <div className="h-6" />
      </div>
    </footer>
  );
}
