"use client"
import React, { useState } from 'react'

import { IconCode, IconMenu2, IconX } from '@tabler/icons-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault()
    if (typeof document === 'undefined') return

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${targetId}`)
      }
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

        {/* Left: logo / name */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          <span className="rounded-full bg-slate-900 border border-slate-700 p-1.5">
            <IconCode size={18} className="text-accent" />
          </span>
          <span>
            <span className="text-accent">Farhan</span>
            <span className="text-slate-100">.dev</span>
          </span>
        </a>
        {/* Right: links (desktop) */}
        <div className="hidden gap-6 text-base font-medium text-slate-300 md:flex">

          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className="hover:text-accent transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e, 'experience')}
            className="hover:text-accent transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, 'skills')}
            className="hover:text-accent transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
        {/* Mobile menu toggle */}
        <button
          className="inline-flex items-center gap-1.5 rounded md:hidden border border-slate-700 px-2 py-1 text-slate-200 transition-colors"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IconX
              size={18}
              className={`text-slate-200 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            />
          ) : (
            <IconMenu2
              size={18}
              className={`text-slate-200 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            />
          )}
          {/* <span className="text-sm">Menu</span> */}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`absolute inset-x-0 top-full border-b border-slate-800 bg-slate-950/95 md:hidden z-20 transform transition-all duration-200 origin-top ${
          open
            ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-3 text-sm font-medium text-slate-300">
          <button
            type="button"
            onClick={(e) => {
              handleSmoothScroll(e, 'projects')
              setOpen(false)
            }}
            className="w-full text-left py-1.5 hover:text-accent transition-colors duration-150 delay-75"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={(e) => {
              handleSmoothScroll(e, 'experience')
              setOpen(false)
            }}
            className="w-full text-left py-1.5 hover:text-accent transition-colors duration-150 delay-100"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={(e) => {
              handleSmoothScroll(e, 'skills')
              setOpen(false)
            }}
            className="w-full text-left py-1.5 hover:text-accent transition-colors duration-150 delay-125"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={(e) => {
              handleSmoothScroll(e, 'contact')
              setOpen(false)
            }}
            className="w-full text-left py-1.5 hover:text-accent transition-colors duration-150 delay-150"
          >
            Contact
          </button>
        </nav>
      </div>

    </header>

  )
}

export default Navbar