import { Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">iGaming CRM Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">Monitor KPIs, player behavior, and revenue performance in real time</p>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
