export default function Experience({
  company,
  position,
  startDate,
  endDate,
  description,
}: {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
}) {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[-0.01em]">{company}</p>
          <p className="text-red-400">{position}</p>
        </div>
        <div>
          <p className="text-sm">
            {startDate} {endDate && `- ${endDate}`}
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
