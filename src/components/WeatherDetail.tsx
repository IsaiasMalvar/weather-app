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
    <div className=" text-center font-mono    p-5  flex flex-col justify-center items-center gap-y-7  lg:text-5xl font-semibold text-orange-50/80 ">
      <p className=" max-[500px]:text-lg text-3xl min-[895px]:text-5xl">
        {information}
      </p>
      <div className="text-5xl">{icon}</div>
      <p className=" max-[500px]:text-lg text-3xl min-[895px]:text-5xl">
        {value}
      </p>
    </div>
  );
};

export default WeatherDetail;
