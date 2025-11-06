import { ArrowRight } from 'lucide-react';

const PlayerRow = ({ name, country, status, value }) => {
  const statusColor = {
    VIP: 'bg-yellow-100 text-yellow-800',
    Active: 'bg-green-100 text-green-800',
    ChurnRisk: 'bg-red-100 text-red-800',
  }[status] || 'bg-gray-100 text-gray-800';

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-100 grid place-items-center font-medium text-gray-600">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{country}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>{status}</span>
        <span className="text-sm font-semibold text-gray-900">${value.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default function RecentPlayers() {
  const players = [
    { name: 'Alex Morgan', country: 'US', status: 'VIP', value: 12500 },
    { name: 'Maria Rossi', country: 'IT', status: 'Active', value: 2450 },
    { name: 'Chen Wei', country: 'CN', status: 'ChurnRisk', value: 300 },
    { name: 'John Smith', country: 'UK', status: 'Active', value: 1180 },
  ];

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-800">Recent Players</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {players.map((p) => (
          <PlayerRow key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
