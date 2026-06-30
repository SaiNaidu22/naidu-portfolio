// function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

//         {/* Logo */}

//         <div className="text-2xl font-bold text-cyan-400">
//           NSM
//         </div>

//         {/* Navigation */}

//         <ul className="hidden md:flex gap-8 text-lg">

//           <li>
//             <a
//               href="#about"
//               className="hover:text-cyan-400 transition"
//             >
//               About
//             </a>
//           </li>

//           <li>
//             <a
//               href="#skills"
//               className="hover:text-cyan-400 transition"
//             >
//               Skills
//             </a>
//           </li>

//           <li>
//             <a
//               href="#projects"
//               className="hover:text-cyan-400 transition"
//             >
//               Projects
//             </a>
//           </li>

//           <li>
//             <a
//               href="#certifications"
//               className="hover:text-cyan-400 transition"
//             >
//               Certifications
//             </a>
//           </li>

//           <li>
//             <a
//               href="#contact"
//               className="hover:text-cyan-400 transition"
//             >
//               Contact
//             </a>
//           </li>

//         </ul>

//         {/* Resume Button */}

//         <a
//           href="/resume.pdf"
//           target="_blank"
//           className="
//             bg-cyan-500
//             hover:bg-cyan-600
//             px-5
//             py-2
//             rounded-lg
//             font-semibold
//             transition
//           "
//         >
//           Resume
//         </a>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;


function Navbar() {

    return (

        <nav
            className="
            fixed
            top-0
            w-full
            bg-slate-900/80
            backdrop-blur-md
            z-50
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                flex
                justify-between
                items-center
                px-8
                py-5
                "
            >

                <h1
                    className="
                    text-white
                    font-bold
                    text-2xl
                    "
                >
                    Naidu.
                </h1>

                <ul
                    className="
                    flex
                    gap-8
                    text-white
                    "
                >

                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>

            </div>

        </nav>

    );

}

export default Navbar;
