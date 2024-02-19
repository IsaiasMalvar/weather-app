interface WeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

const WeatherDetail = ({
  icon,
  information,
  value,
}: WeatherDetailProps): React.ReactElement => {
  return (
    <div className=" text-center font-mono   max-[600px]:border-solid max-[600px]:border-2 max-[600px]:rounded-lg p-5  flex flex-col justify-center items-center gap-y-7  lg:text-xl font-semibold text-orange-50/80 max-[600px]:bg-white max-[600px]:bg-opacity-10">
      <p className="text-xl min-[575px]:text-2xl lg:text-6xl">{information}</p>
      <div className="text-5xl">{icon}</div>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default WeatherDetail;
