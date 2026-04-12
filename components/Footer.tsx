const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-1 text-sm text-muted sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-line/80 px-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-0">
        <p>qfpqhyl · articles and tools</p>
        <a
          href="https://github.com/qfpqhyl"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-text"
        >
          github.com/qfpqhyl
        </a>
      </div>
    </footer>
  );
};

export default Footer;
