export function IconMenuMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.15" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3.45" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="8" cy="8" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="8.6" cy="8.6" r="5.1" stroke="currentColor" strokeWidth="1.15" />
      <path d="M12.4 12.4 17 17" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.6" r="2.7" stroke="currentColor" strokeWidth="1.15" />
      <path d="M4.4 16.2c.8-2.7 2.8-4 5.6-4s4.8 1.3 5.6 4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.2 6.8h9.6l-.55 9.1H5.75L5.2 6.8Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M8 6.8V5.5a2 2 0 0 1 4 0v1.3" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 6h13M3.5 10h13M3.5 14h8" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="m5.2 5.2 9.6 9.6M14.8 5.2 5.2 14.8" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg width="42" height="10" viewBox="0 0 42 10" fill="none" className={dir === "left" ? "is-left" : undefined}>
      <path d="M0 5h39" stroke="currentColor" strokeWidth="1.05" />
      <path d="M34.2 1 40.6 5l-6.4 4" stroke="currentColor" strokeWidth="1.05" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowShort() {
  return (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden>
      <path d="M0 4h16" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12.6 1 16.8 4l-4.2 3" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.8 3.6 2.9 10.9c-1.3.5-1.29 1.2.23 1.52l4.82.15 11.16-7.04c.53-.32.10.0.1.3.4l-9.02 8.14-.35 3.96c.5 0 .73-.23 1.01-.5l2.43-2.36 5.05 3.73c.93.51 1.6.25 1.84-1.09L22.9 4.8c.27-1.16-.44-1.67-1.1-1.2Z" />
    </svg>
  );
}

export function IconVk() {
  return (
    <svg width="22" height="14" viewBox="0 0 24 16" fill="currentColor" aria-hidden>
      <path d="M20.44 4.15c.14-.46 0-.8-.66-.8h-2.18c-.56 0-.81.3-.95.62 0 0-1.11 2.7-2.68 4.46-.51.5-.74.67-1.02.67-.14 0-.34-.16-.34-.63V4.15c0-.56-.16-.8-.63-.8H8.6c-.35 0-.56.26-.56.5 0 .53.79.65.87 2.14v3.23c0 .7-.13.84-.41.84-.74 0-2.55-2.73-3.62-5.86-.21-.61-.42-.85-.98-.85H2.14c-.63 0-.75.3-.75.62 0 .58.74 3.46 3.46 7.27 1.81 2.53 4.36 3.9 6.68 3.9 1.39 0 1.56-.31 1.56-.85v-1.96c0-.62.13-.75.57-.75.32 0 .88.16 2.17 1.39 1.48 1.48 1.72 2.14 2.56 2.14h2.18c.63 0 .94-.31.76-.93-.2-.61-.9-1.5-1.83-2.55-.51-.6-1.27-1.24-1.5-1.56-.32-.41-.23-.59 0-.95 0 0 2.65-3.73 2.93-5z" />
    </svg>
  );
}

export function IconPeak() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M3 16.4 8.2 7.6l3.1 4.8 2.1-3.3L19 16.4" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M2.6 16.4h16.8" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M14.4 6.2c.7-1.1 2.2-1.1 2.8 0 .4.7.1 1.5-.5 1.9-.4.3-.9.3-1.3 0-.6-.4-.9-1.2-.5-1.9Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function IconStamp() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="4.2" y="3.6" width="13.6" height="14.8" rx="3" stroke="currentColor" strokeWidth="1.15" />
      <path d="M7.4 8.2h7.2M7.4 11.4h4.6M7.4 14.6h5.6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconParcel() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M4.2 8.1 11 4.4l6.8 3.7v8.2L11 19.8 4.2 16.3V8.1Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M4.4 8.3 11 12l6.6-3.7M11 12v7.6" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export function IconPay() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="3.2" y="5.6" width="15.6" height="10.8" rx="2.4" stroke="currentColor" strokeWidth="1.15" />
      <path d="M3.2 9.2h15.6M7 13.4h3.4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

export function IconShop() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 18.4s5.4-3.7 5.4-7.4A5.4 5.4 0 0 0 11 5.6a5.4 5.4 0 0 0-5.4 5.4c0 3.7 5.4 7.4 5.4 7.4Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <circle cx="11" cy="11" r="1.6" stroke="currentColor" strokeWidth="1.15" />
    </svg>
  );
}

export function IconWrap() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M6.2 8.4h9.6v9.2H6.2V8.4Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M8.2 8.4V6.8a2.8 2.8 0 0 1 5.6 0v1.6M6.2 12.2h9.6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}
