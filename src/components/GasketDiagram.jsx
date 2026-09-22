// Clean technical SVG diagrams for gasket measurement guidance.

const stroke = "#0a1a2e";
const accent = "#c9a227";
const labelCls = { fontSize: 13, fontWeight: 700, fill: "#0a1a2e" };
const subCls = { fontSize: 11, fill: "#64748b" };

export function CircularGasketDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Circular gasket measurement: OD and ID">
      <circle cx="120" cy="120" r="78" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="120" cy="120" r="40" fill="none" stroke={stroke} strokeWidth="2" />
      {/* OD */}
      <line x1="120" y1="120" x2="198" y2="120" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="150" y="112" {...labelCls} fill={accent}>OD</text>
      {/* ID */}
      <line x1="120" y1="120" x2="160" y2="120" stroke={accent} strokeWidth="1.5" />
      <text x="128" y="138" {...labelCls} fill={accent}>ID</text>
      {/* thickness */}
      <line x1="198" y1="120" x2="240" y2="120" stroke={stroke} strokeWidth="1" />
      <text x="210" y="112" {...labelCls}>Thickness</text>
      <text x="40" y="30" {...subCls}>Circular / Flat Ring Gasket</text>
    </svg>
  );
}

export function FullFaceGasketDiagram() {
  const holes = [];
  const count = 8;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    holes.push({ x: 120 + Math.cos(a) * 62, y: 120 + Math.sin(a) * 62 });
  }
  return (
    <svg viewBox="0 0 340 240" className="w-full h-auto" role="img" aria-label="Full-face flange gasket measurement: OD, ID, PCD and bolt holes">
      <circle cx="120" cy="120" r="86" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="120" cy="120" r="40" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="120" cy="120" r="62" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="3 3" />
      {holes.map((h, i) => (
        <circle key={i} cx={h.x} cy={h.y} r="6" fill="none" stroke={stroke} strokeWidth="1.5" />
      ))}
      {/* OD */}
      <line x1="120" y1="120" x2="206" y2="120" stroke={accent} strokeWidth="1.5" />
      <text x="150" y="112" {...labelCls} fill={accent}>OD</text>
      {/* PCD */}
      <line x1="120" y1="120" x2="182" y2="120" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="132" y="138" {...labelCls} fill={accent}>PCD</text>
      {/* bolt hole */}
      <text x="220" y="70" {...labelCls}>Bolt holes</text>
      <line x1="218" y1="74" x2="186" y2="92" stroke={stroke} strokeWidth="1" />
      <text x="30" y="30" {...subCls}>Full-Face Flange Gasket</text>
    </svg>
  );
}

export function RectangularGasketDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full h-auto" role="img" aria-label="Rectangular gasket measurement: length, width, internal opening and holes">
      <rect x="60" y="50" width="200" height="120" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="110" y="80" width="100" height="60" rx="3" fill="none" stroke={stroke} strokeWidth="2" />
      {/* length */}
      <line x1="60" y1="40" x2="260" y2="40" stroke={accent} strokeWidth="1.5" />
      <line x1="60" y1="36" x2="60" y2="44" stroke={accent} strokeWidth="1.5" />
      <line x1="260" y1="36" x2="260" y2="44" stroke={accent} strokeWidth="1.5" />
      <text x="140" y="32" {...labelCls} fill={accent}>Length</text>
      {/* width */}
      <line x1="50" y1="50" x2="50" y2="170" stroke={accent} strokeWidth="1.5" />
      <text x="20" y="115" {...labelCls} fill={accent}>Width</text>
      {/* internal opening */}
      <text x="135" y="115" {...labelCls} fill={accent}>Opening</text>
      {/* holes */}
      <circle cx="80" cy="65" r="4" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="240" cy="65" r="4" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="80" cy="155" r="4" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="240" cy="155" r="4" fill="none" stroke={stroke} strokeWidth="1.5" />
      <text x="270" y="70" {...labelCls}>Holes</text>
      <text x="60" y="200" {...subCls}>Rectangular Gasket</text>
    </svg>
  );
}