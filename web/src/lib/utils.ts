export const money = (n: number) => '$' + n;

export const esc = (s: unknown) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

export const fmtLeft = (ms: number) => {
  if (ms < 0) ms = 0;
  const t = Math.floor(ms / 1000);
  const d = Math.floor(t / 86400);
  const h = String(Math.floor((t % 86400) / 3600)).padStart(2, '0');
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
  const s = String(t % 60).padStart(2, '0');
  return (d > 0 ? d + 'd ' : '') + h + ':' + m + ':' + s;
};

export const nextMonday9 = () => {
  const n = new Date();
  const d = new Date(n);
  d.setDate(n.getDate() + ((8 - n.getDay()) % 7 || 7));
  d.setHours(9, 0, 0, 0);
  return d;
};

export const pad2 = (n: number) => String(n).padStart(2, '0');

export const datePlusDays = (days: number) => {
  const d = new Date(Date.now() + days * 864e5);
  return d.toISOString().slice(0, 10);
};

export const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
