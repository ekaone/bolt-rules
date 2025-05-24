type ScheduleProps = {
  period?: string;
  start?: string;
  end?: string;
  date?: string;
  description: string;
  periods?: Array<{
    period: string;
    start?: string;
    end?: string;
    date?: string;
    description: string;
  }>;
};

export const Schedule = ({
  period,
  start,
  end,
  date,
  description,
  periods,
}: ScheduleProps) => {
  if (periods) {
    return (
      <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow space-y-4">
        <h2 className="text-lg font-semibold mb-2">Hackathon Schedule</h2>
        {periods.map((p, index) => (
          <div key={index} className="border-b pb-3 last:border-b-0">
            <h3 className="font-medium capitalize">{p.period}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {p.description}
            </p>
            {p.start && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Start: {p.start}
              </p>
            )}
            {p.end && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                End: {p.end}
              </p>
            )}
            {p.date && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Date: {p.date}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2 capitalize">{period}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      {start && (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Start: {start}
        </p>
      )}
      {end && (
        <p className="text-sm text-gray-600 dark:text-gray-300">End: {end}</p>
      )}
      {date && (
        <p className="text-sm text-gray-600 dark:text-gray-300">Date: {date}</p>
      )}
    </div>
  );
};
