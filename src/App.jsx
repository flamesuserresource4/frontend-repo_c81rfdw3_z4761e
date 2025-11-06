import Header from './components/Header';
import KpiCards from './components/KpiCards';
import Charts from './components/Charts';
import RecentPlayers from './components/RecentPlayers';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <Header />

        <div className="mt-6">
          <KpiCards />
        </div>

        <div className="mt-6">
          <Charts />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-dashed border-gray-300 p-6 bg-white/60 backdrop-blur-sm">
              <h3 className="font-medium text-gray-800 mb-2">Cohort Retention (placeholder)</h3>
              <p className="text-sm text-gray-600">Add deeper charts or tables here as you expand the dashboard.</p>
            </div>
          </div>
          <div>
            <RecentPlayers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
