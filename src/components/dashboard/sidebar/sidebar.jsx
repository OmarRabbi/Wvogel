import { Home, MessageSquare, Bell, LogOut, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { cn } from "@/lib/utils"; // If you have a classNames utility

const sidebarItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: <User size={20} />,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: <MessageSquare size={20} />,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: <Bell size={20} />,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: <LogOut size={20} />,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    // Perform logout logic here (e.g., clear auth token)
    navigate("/auth/signin"); // Redirect to login page
  };

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-6 fixed">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.url}
                onClick={item.title === "Logout" ? handleLogout : undefined}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition duration-300",
                  pathname === item.url
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-700"
                )}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
