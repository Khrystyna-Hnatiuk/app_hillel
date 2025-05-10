const AboutPage = () => {
  return (
    <section className="text-[#05113B]">
      <h2 className="text-3xl font-bold  mb-6">About the Project</h2>

      <p className=" text-lg mb-6 leading-relaxed">
        <strong>BookingApp</strong> BookingApp is a sleek, minimalistic hotel browsing experience
        designed for learning and practice. Imagine planning a spontaneous getaway — this app allows
        users to seamlessly explore available hotels, view details instantly, and prepare for
        booking — all within a smooth, responsive UI.
      </p>

      <p className=" text-lg mb-6 leading-relaxed">
        Originally built as part of a front-end development course, this project intentionally
        mirrors real-world application architecture. It follows modern best practices, emphasizes
        clean code, and is structured to be scalable, maintainable, and developer-friendly. Think
        reusable components, modular design, and a clear separation of concerns.
      </p>

      <h3 className="text-xl font-semibold mb-3">🔧 Tech Stack:</h3>
      <ul className="list-disc list-inside text-base mb-6 space-y-1">
        <li>
          ⚡ <strong>React + Vite</strong> — fast, modern tooling
        </li>
        <li>
          🌐 <strong>React Router</strong> with createBrowserHistory for seamless navigation
        </li>
        <li>
          🎨 <strong>TailwindCSS</strong> — fully styled UI
        </li>
        <li>
          📡 <strong>Axios + json-server</strong> — simulating a REST API
        </li>
        <li>
          📝 <strong>react-hook-form</strong> — clean and efficient form management
        </li>
        <li>
          🧼 <strong>ESLint + Prettier</strong> — consistent, readable code formatting
        </li>
      </ul>

      <h3 className="text-xl font-semibold  mb-3">🎯 Why this project matters:</h3>
      <p className=" text-lg mb-6 leading-relaxed">
        Many tutorials skip over the critical fundamentals: folder structure, code readability, and
        proper separation of logic. BookingApp goes beyond the basics — it teaches how to build
        something that’s not only functional but also professional. From environment configuration
        to thoughtful component design, this project is a hands-on guide to writing
        production-quality front-end code.
      </p>

      <h3 className="text-xl font-semibold  mb-3">👨‍💻 Author:</h3>
      <p className="text-lg leading-relaxed">
        Built with passion for clean architecture and developer growth. If you're exploring this
        project, you're already one step ahead — keep building, keep learning. 🚀
      </p>
    </section>
  );
};

export default AboutPage;
