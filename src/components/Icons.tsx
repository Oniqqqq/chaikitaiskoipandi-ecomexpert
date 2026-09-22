export function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 12.4 15.4 15.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="6.2" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.2 14.2c.7-2.4 2.4-3.6 4.8-3.6s4.1 1.2 4.8 3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBag() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4.2 6.2h9.6l-.7 8.1H4.9L4.2 6.2Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 6.1V4.8a2 2 0 0 1 4 0v1.3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 5.2h12M3 9h12M3 12.8h8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="m5 5 8 8M13 5 5 13" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function IconArrow({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}>
      <path d="M4 9h10M10.2 5.2 14 9l-3.8 3.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
