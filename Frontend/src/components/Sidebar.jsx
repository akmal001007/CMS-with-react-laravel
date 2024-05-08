import { Link } from "react-router-dom";
import { icons } from "./SideBarIcons";

const Sidebar = () => {
 // const [teachers, setTeachers] = useState("false");

  const sideMenus = [
    { name: "Dashboard", href: "/dashboard"},
    { name: "Users", href: "/users" },
    { name: "Teachers", href: "/teachers" },
    { name: "Students", href: "/students" },
    { name: "Courses", href: "/courses" },
    { name: "Attendance" , href: "/attendence"},
    { name: "Settings" , href: "/attendence"},
  ];
  return (
      <div className="flex flex-col h-screen bg-sidebarColor w-72  text-black">
          <div className="flex flex-col items-center justify-center h-28">
              <Link to="/home">
                  <img
                      src="../../public/images/logo.png"
                      className="w-10 rounded-md"
                  />
              </Link>
              <p className="font-bold text-xl">
                  <i className="text-yellow-50 text-2xl font-mono">G</i>ANJ
              </p>
          </div>
          <div className="flex-1">
              {/* <Link to="/dashboard/teachers">Teachers</Link> */}
              <div className="flex flex-col text-lg ">
                  {sideMenus.map((item, index) => (
                      <Link
                              to={item.href}
                              key={item.name}
                              className="hover:bg-orange-300 pl-3 text-md font-semibold p-1"
                          >
                      <div className="flex items-center">
                            <div className="mr-2">
                              {icons[index].icon}
                            </div>
                            {item.name}
                            {item.icon}
                      </div>
                          </Link>
                  ))}
              </div>
          </div>
          {/* <div className="font-bold text-sm p-3">Settings</div> */}
      </div>
  );
};

export default Sidebar;
