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
    <div className="flex flex-col justify-evenly items-center gap-y-7 text-xs lg:text-xl font-semibold text-orange-50/80">
      <p>{information}</p>
      <div className="text-5xl">{icon}</div>
      <p>{value}</p>
    </div>
  );
};

export default WeatherDetail;
