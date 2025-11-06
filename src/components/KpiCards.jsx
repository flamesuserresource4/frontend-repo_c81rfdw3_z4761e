const KPICard = ({ label, value, delta, deltaType = 'positive' }) => {
  const isPositive = deltaType === 'positive';
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {isPositive ? '▲' : '▼'} {delta}
        </span>
      </div>
    </div>
  );
};

export default function KpiCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard label="Active Players" value="12,480" delta="5.2%" deltaType="positive" />
      <KPICard label="Deposits" value="$284,920" delta="2.1%" deltaType="positive" />
      <KPICard label="Withdrawals" value="$146,300" delta="1.4%" deltaType="negative" />
      <KPICard label="Net Gaming Revenue" value="$138,620" delta="4.7%" deltaType="positive" />
    </section>
  );
}
