export default function Experience({
  company,
  position,
  startDate,
  endDate,
  description,
  isCurrent,
}: {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  isCurrent?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between">
        <div className="w-full sm:w-auto mb-2 sm:mb-0 text-center sm:text-left">
          <p className="text-xl font-semibold tracking-[-0.01em]">{company}</p>
          <p className="text-red-400">{position}</p>
        </div>
        <div className="w-full sm:w-auto text-center sm:text-right">
          <p className="text-sm">
            {startDate} {endDate && !isCurrent && `- ${endDate}`}
          </p>
        </div>
      </div>
      <ul className="career">
        {description.map((item, index) => (
          <li className="career" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
