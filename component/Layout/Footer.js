import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-base-primary px-4 pt-6 pb-2 rounded-t-lg flex flex-wrap">
        {/* <span className="text-muted ">Copyright &copy; 2022</span> */}
      </div>
      <div className="text-center p-4 bg-primary opacity-70">
        <span className="text-base text-white font-bold leading-5 tracking-wide">
          © 2022
          <Link href="#pahamify.com" passHref>
            <a target="__blank" href="#" class="underline">
              Pahamify
            </a>
          </Link>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
