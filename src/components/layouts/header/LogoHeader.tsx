export const LogoHeader = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-white p-2 rounded">
        <img
          src="images/logo1.png"
          alt=""
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
      <span className="text-lg sm:text-xl font-bold text-white">Ryper Lab</span>
    </div>
  );
};
