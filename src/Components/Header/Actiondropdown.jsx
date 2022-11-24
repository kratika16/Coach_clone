import { Fragment,useEffect} from "react";
import { Menu, Transition } from "@headlessui/react";
import AccountIcon from "../../assets/images/svg/wcc-login.svg";
import { handleLogout } from "../../Store/loginSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Example() {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);
  console.log("user", isAuthenticated);

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className=" w-full justify-center  px-4 py-2 ">
          <img alt="accounticon" src={AccountIcon} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile/myaccount?partner_code=CUSA"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-semibold"
                  )}
                >
                  GO TO MY ACCOUNT
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  // 
                  onClick={()=>dispatch(handleLogout(navigate('/')))}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm font-semibold mb-2"
                  )}
                >
                  LOGOUT
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
