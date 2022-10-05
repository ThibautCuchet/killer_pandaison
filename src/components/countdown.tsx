import { FC } from "react";

const DisplayNumber: FC<{ value: number }> = ({ value }) => {
  if (value < 10) return <span>{`0${value}`}</span>;
  return <span>{value}</span>;
};

const Countdown: FC<{ duration: Duration }> = ({ duration }) => {
  return (
    <>
      <h1>Début du killer dans :</h1>
      <div className="p-5 text-center border border-black rounded-lg w-52">
        <DisplayNumber value={duration.days || 0} />
        {":"}
        <DisplayNumber value={duration.hours || 0} />
        {":"}
        <DisplayNumber value={duration.minutes || 0} />
        {":"}
        <DisplayNumber value={duration.seconds || 0} />
      </div>
    </>
  );
};

export default Countdown;
