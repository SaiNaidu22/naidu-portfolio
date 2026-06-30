function Footer() {

  return (

    <footer
      className="
      bg-slate-900
      text-gray-400
      py-8
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        "
      >

        <p>

          © 2026 Naidu Sai Manikanta.

          All Rights Reserved.

        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://github.com/SaiNaidu22"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sai-manikanta-naidu"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>

  );

}

export default Footer;