import 'tailwindcss/tailwind.css';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cBg font-oldStandardTT">
      <h1 className="markdown-h1 mb-8">Contact</h1>
      <div className="text-cBody max-w-md px-4 text-left space-y-2">
        <p>
          <span className="block font-bold">Lam Leung Yiu, Jason</span>
          <span className="block">Bachelor of Computer Science (Year 4), CUHK</span>
        </p>
        <p>
          <a
            href="tel:+85268594257"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            Phone: +852 6859 4257
          </a>
          <a
            href="mailto:1155192972@link.cuhk.edu.hk"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            Email: 1155192972@link.cuhk.edu.hk
          </a>
          <a
            href="https://www.linkedin.com/in/jason-lam-237bb9298"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            LinkedIn: jason-lam-237bb9298
          </a>
          <a
            href="https://github.com/JasonLammm"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cLink hover:text-cLinkHover hover:underline hover:font-bold"
          >
            GitHub: JasonLammm
          </a>
        </p>
        <p className="mt-2">
          <span className="block">
            Languages: Proficient in Cantonese, Mandarin, and English.
          </span>
        </p>
      </div>
    </div>
  );
}