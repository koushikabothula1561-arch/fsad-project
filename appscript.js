import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">Joy Sim Studio</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#work" className="hover:text-indigo-500">Work</a>
          <a href="#services" className="hover:text-indigo-500">Services</a>
          <a href="#contact" className="hover:text-indigo-500 font-semibold text-indigo-600 border border-indigo-600 px-4 py-1 rounded-full">Hire Us</a>
        </div>
      </nav>
      <header className="py-20 px-6 text-center bg-gradient-to-br from-indigo-50 to-white">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Bringing Your Digital Dreams to Life</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">We specialize in high-fidelity simulations and creative digital experiences that push boundaries.</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition">View Portfolio</button>
      </header>
      <section id="work" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 border-b-2 border-indigo-100 pb-2">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition">
              <div className="h-48 bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>
              <div className="p-4">
                <h4 className="font-bold">Project {i}</h4>
                <p className="text-sm text-slate-500 italic">UI/UX & Simulation</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-12 bg-slate-900 text-slate-400 text-center">
        <p>&copy; 2024 Joy Sim Studio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
