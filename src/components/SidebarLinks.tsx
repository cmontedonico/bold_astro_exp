import React from 'react';
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';

const SidebarLinks: React.FC = () => {
  return (
    <nav>
      <a href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        <LayoutDashboard className="inline-block w-6 h-6 mr-2" />
        Dashboard
      </a>
      <a href="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        <FileText className="inline-block w-6 h-6 mr-2" />
        Reports
      </a>
      <a href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        <Settings className="inline-block w-6 h-6 mr-2" />
        Settings
      </a>
    </nav>
  );
};

export default SidebarLinks;