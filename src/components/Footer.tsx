export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 p-6 text-sm text-gray-400">
        <img src="/images/tactec-lock-1-2-1.png" alt="TacTec" className="h-8" />
        <p>© {new Date().getFullYear()} From Ventio With 😍.</p>
        <div className="flex gap-4">
          <a href="/images/client-offering-catalog1.png" target="_blank" className="underline"></a>
          <a href="/images/client-offering-catalog-final.png" target="_blank" className="underline"></a>
        </div>
      </div>
    </footer>
  );
}
