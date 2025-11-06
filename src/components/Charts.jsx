import { useMemo } from 'react';

function LineChart({ title, labels, series }) {
  // Simple SVG line chart
  const points = useMemo(() => {
    if (!series || series.length === 0) return '';
    const w = 300;
    const h = 120;
    const max = Math.max(...series);
    const min = Math.min(...series);
    const gap = w / (series.length - 1);
    return series
      .map((v, i) => {
        const x = i * gap;
        const y = h - ((v - min) / (max - min || 1)) * h;
        return `${x},${y}`;
      })
      .join(' ');
  }, [series]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <span className="text-xs text-gray-500">Last 14 days</span>
      </div>
      <div className="overflow-x-auto">
        <svg width="100%" height="140" viewBox="0 0 300 120" preserveAspectRatio="none" className="text-blue-500">
          <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} />
        </svg>
      </div>
    </div>
  );
}

function BarChart({ title, labels, series }) {
  const w = 300;
  const h = 120;
  const max = Math.max(...series, 1);
  const barW = w / series.length - 6;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <span className="text-xs text-gray-500">By channel</span>
      </div>
      <div className="overflow-x-auto">
        <svg width="100%" height="140" viewBox="0 0 300 120" preserveAspectRatio="none">
          {series.map((v, i) => {
            const x = i * (barW + 6) + 3;
            const y = h - (v / max) * h;
            const bh = (v / max) * h;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barW} height={bh} rx="4" className="fill-indigo-500/80" />
                <text x={x + barW / 2} y={h + 12} textAnchor="middle" className="fill-gray-500 text-[10px]">
                  {labels[i]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default function Charts() {
  const days = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13','D14'];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <LineChart title="Daily Active Users" labels={days} series={[1100, 1240, 1180, 1320, 1280, 1410, 1500, 1450, 1520, 1600, 1580, 1690, 1750, 1820]} />
      </div>
      <div>
        <BarChart title="Acquisition" labels={["SEO","Aff","Paid","Email","Direct"]} series={[320, 450, 520, 280, 390]} />
      </div>
    </section>
  );
}
