// ไอคอนเส้นมน กริด 24 px ความหนา 1.8 ใช้ currentColor จึงเปลี่ยนสีตามบริบทได้
const P = {
  sprout: <><path d="M12 21v-9" /><path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6z" /><path d="M12 14c0-3 2-5 6-5 0 3-2 5-6 5z" /></>,
  book: <><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z" /><path d="M20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><circle cx="17" cy="9" r="2.5" /><path d="M16 15c3 0 5 1.5 5 4" /></>,
  fish: <><path d="M2.5 12c2.2-4 6.8-5 10.5-2.5 2.2 1.4 2.2 3.6 0 5-3.7 2.5-8.3 1.5-10.5-2.5z" /><path d="M13.5 12l6-4.5v9z" /><circle cx="6.8" cy="11.2" r=".7" fill="currentColor" /></>,
  boat: <><path d="M3 16h18l-2.5 4h-13z" /><path d="M12 4v12" /><path d="M12 5l6 9h-6" /><path d="M12 7l-5 7h5" /></>,
  bus: <><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16" /><path d="M7 17v2M17 17v2" /><circle cx="8" cy="14" r=".7" fill="currentColor" /><circle cx="16" cy="14" r=".7" fill="currentColor" /></>,
  utensils: <><path d="M6 3v6a2 2 0 0 0 4 0V3" /><path d="M8 11v10" /><path d="M17 3c-2 2-3 5-3 8h3v10" /></>,
  shell: <><path d="M12 20c-5 0-8-4-8-8 0-3 2-6 8-8 6 2 8 5 8 8 0 4-3 8-8 8z" /><path d="M12 4v16M8 6l1 13M16 6l-1 13" /></>,
  bed: <><path d="M3 18V7" /><path d="M3 14h18v4" /><path d="M21 14v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="11" r="1.8" /></>,
  store: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" /><path d="M5 12v8h14v-8" /></>,
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /><path d="M10 20v-5h4v5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  leaf: <><path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14z" /><path d="M5 19l8-8" /></>,
  waves: <><path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  thermo: <><path d="M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0z" /><path d="M12 9v7" /></>,
  drop: <><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></>,
  flask: <><path d="M9 3h6" /><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M8 15h8" /></>,
  funnel: <><path d="M4 5h16l-6 8v6l-4-2v-4z" /></>,
  shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  crab: <><ellipse cx="12" cy="13" rx="6" ry="4" /><path d="M6 11L3 7M18 11l3-4M7 16l-3 3M17 16l3 3M9 9V6M15 9V6" /></>,
}

export default function Icon({ name, size = 24, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {P[name] || P.leaf}
    </svg>
  )
}
