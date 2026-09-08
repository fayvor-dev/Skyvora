import { Aircraft } from "@/lib/aircraft";

export default function AircraftSpecs({ aircraft }: { aircraft: Aircraft }) {
  const groups = [
    {
      title: "Performance",
      items: [
        { label: "Maximum range", value: `${aircraft.range.toLocaleString()} nm` },
        { label: "Cruise speed", value: `${aircraft.cruiseSpeed} ktas` },
      ],
    },
    {
      title: "Cabin",
      items: [
        { label: "Passenger capacity", value: `${aircraft.passengers}` },
        { label: "Cabin length", value: `${aircraft.cabinLength} ft` },
        { label: "Cabin width", value: `${aircraft.cabinWidth} ft` },
        { label: "Cabin height", value: `${aircraft.cabinHeight} ft` },
      ],
    },
    {
      title: "Baggage",
      items: [{ label: "Baggage capacity", value: `${aircraft.baggageCapacity} cu ft` }],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {groups.map((group) => (
        <div key={group.title} className="glass-1 glass-edge rounded-2xl p-6">
          <p className="eyebrow text-gold mb-4">{group.title}</p>
          <dl className="space-y-3">
            {group.items.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-3">
                <dt className="text-xs text-silver/60">{item.label}</dt>
                <dd className="text-sm text-pearl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
