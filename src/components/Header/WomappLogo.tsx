import Logo from "../../assets/Logo.png";
export default function WomappLogo() {
  return (
    <div className="flex items-center justify-center ">
      <div className=" rounded-lg ">
        <div className="flex items-center gap-4">
          {/* Logo Icon */}
          <img src={Logo} alt="Womapp Logo" className="w-12 h-12" />
          
          {/* Text Logo */}
          {/* <div className="text-[#4DD9E8]  font-bold text-4xl tracking-wide">
            Womapp
          </div> */}
        </div>
      </div>
    </div>
  );
}