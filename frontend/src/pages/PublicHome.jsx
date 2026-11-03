import { useState } from 'react';
import { COLLEGE } from '../config';

const roles = [
  { id: 'student', label: 'Student Login', icon: '🎓' },
  { id: 'faculty', label: 'Faculty Login', icon: '👨‍🏫' },
  { id: 'admin', label: 'Admin Login', icon: '🛡️' }
];

export default function PublicHome({ onLoginSelect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Background image */}
      <div className="fixed inset-0 -z-0">
        <img
          src={COLLEGE.heroImage}
          alt="College building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 flex items-center
        justify-between px-6 py-4 bg-white/80 backdrop-blur-md">

        <div className="flex items-center gap-3">
          <img
            src={COLLEGE.logo}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="font-bold text-lg">
              {COLLEGE.name}
            </h1>
            <p className="text-xs text-slate-500">
              {COLLEGE.tagline}
            </p>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl border rounded-lg px-4 py-2
          hover:bg-slate-100"
        >
          ☰
        </button>
      </header>

      {/* Side menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side login drawer */}
      <aside className={`fixed top-0 right-0 z-50 h-full
        w-80 max-w-[85vw] bg-white shadow-2xl p-6
        transition-transform duration-300
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold">Portal Login</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-slate-500 mb-5">
          Select your account type to continue.
        </p>

        <div className="space-y-3">
          {roles.map(role => (
            <button
              key={role.id}
              onClick={() => {
                setMenuOpen(false);
                onLoginSelect(role.id);
              }}
              className="w-full flex items-center gap-4
              p-4 border rounded-xl hover:bg-indigo-50
              hover:border-indigo-500 transition text-left"
            >
              <span className="text-2xl">
                {role.icon}
              </span>

              <span className="font-semibold">
                {role.label}
              </span>

              <span className="ml-auto">→</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Hero section */}
      <main className="relative z-10">

        <section className="min-h-[520px] flex flex-col
          justify-center items-center text-center px-6">

          <p className="text-indigo-700 font-semibold mb-4">
            WELCOME TO {COLLEGE.name}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold
            max-w-4xl leading-tight">
            Education, Innovation
            <span className="text-indigo-700">
              {' '}and Excellence
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-slate-600">
            {COLLEGE.about}
          </p>

          <button
            onClick={() => setMenuOpen(true)}
            className="mt-8 bg-indigo-700 text-white
            px-7 py-3 rounded-lg hover:bg-indigo-800"
          >
            Access College Portal →
          </button>
        </section>

        {/* About */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-5">
            About Our College
          </h2>
          <p className="text-slate-600 leading-8">
            {COLLEGE.about}
          </p>
        </section>

        {/* Leadership */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">
            Our Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6">

            {COLLEGE.leadership.map((person, i) => (
              <div key={i}
                className="bg-white rounded-xl shadow p-5 text-center">

                <img
                  src={person.image}
                  className="w-36 h-36 mx-auto object-cover
                  rounded-full mb-4"
                />

                <h3 className="font-bold">{person.name}</h3>
                <p className="text-indigo-700 text-sm">
                  {person.designation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">
            Major Events
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {COLLEGE.events.map((event, i) => (
              <div key={i}
                className="bg-white rounded-xl shadow overflow-hidden">

                <img
                  src={event.image}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-xl">
                    {event.title}
                  </h3>
                  <p className="text-slate-500 mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">
            Campus Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COLLEGE.gallery.map((photo, i) => (
              <img
                key={i}
                src={photo}
                className="w-full h-48 object-cover
                rounded-xl hover:scale-105 transition"
              />
            ))}
          </div>
        </section>

      </main>

      <footer className="relative z-10 bg-slate-950
        text-white text-center p-8">
        <h3 className="font-bold">{COLLEGE.name}</h3>
        <p className="text-sm text-slate-400 mt-2">
          {COLLEGE.address}
        </p>
        <p className="text-sm text-slate-400 mt-2">
          {COLLEGE.email} · {COLLEGE.phone}
        </p>
      </footer>

    </div>
  );
}