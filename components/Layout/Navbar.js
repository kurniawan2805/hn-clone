import Link from "next/link";

const Navbar = () => {
  return (
    // <div className="container mx-auto w-3/6 min-h-screen">
    <nav className="container w-full h-14 z-30 fixed flex-wrap">
      <div className="flex bg-primary items-center justify-between py-2 px-4">
        <div className="flex-none text-white uppercase text-2xl font-semibold">
          <Link href="/">MIPI-2022</Link>
          {/* <div className="text-center">Hello</div> */}
        </div>
        {/* <div className="w-6/12"></div> */}
        <div className="grow flex justify-end rounded-full">
          <Link href="/" passHref>
            <div className="">
              <a
                aria-label="button-login"
                className="bg-white rounded-full text-xs text-base-primary py-1 px-3  font-bold leading-5 tracking-wide cursor-pointer"
              >
                Login
              </a>
            </div>
          </Link>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
