import { Link } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  return (
    <header className=" bg-white sticky top-0 z-50">
      <div className="container mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900 flex items-center">
            <img src="../src/assets/oqfy_logo.png" alt="logo" className="h-8 mr-2" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <Link to="/services" className="flex justify-center place-items-center hover:text-gray-900">Services <span className="px-2"><ChevronDown className="h-4 w-4 text-gray-600" /></span></Link>
            <Link to="/users" className="hover:text-gray-900">User Management</Link>
            <Link to="/orders" className="hover:text-gray-900">My Orders</Link>
            <Link to="/reports" className="hover:text-gray-900">Reports</Link>
            <Link to="/inventory" className="hover:text-gray-900">Stamp Inventory</Link>
            <Link to="/barcodes" className="hover:text-gray-900">Bar Codes</Link>
            <Link to="/invoice" className="hover:text-gray-900 flex items-center">
              Invoice <span className="ml-2 px-2 py-1 text-xs text-purple-500 border-2 border-gray-400 rounded-2 bg-white rounded">Coming Soon</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                2
              </span>
            </button>

            <Menu as="div" className="relative">
                
              <Menu.Button className="flex items-center border-2 border-gray-400 space-x-2 p-2 rounded-md hover:bg-gray-100">
                <span className="hidden md:inline text-gray-700">Michael Smith</span>
                <div className="h-8 w-8 flex items-center justify-center bg-purple-700 text-white rounded-full">M</div>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </Menu.Button>
              <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">

                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/profile" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                          Profile
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/settings" className={`block px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                          Settings
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button className={`w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100" : ""}`}>
                          Logout
                        </button>
                      )}
                    </Menu.Item>

                  </Menu.Items>
                </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;