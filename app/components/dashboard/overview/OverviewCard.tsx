interface OverviewCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: string;
  color: "primary" | "secondary";
}

export function OverviewCard({ title, value, change, changeType, icon, color }: OverviewCardProps) {
  const colorClasses = {
    primary: {
      bg: "bg-brand-primary-50",
      text: "text-brand-primary-600",
      iconBg: "bg-brand-primary-500"
    },
    secondary: {
      bg: "bg-brand-secondary-50",
      text: "text-brand-secondary-600",
      iconBg: "bg-brand-secondary-500"
    }
  };
  
  const changeClasses = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600"
  };
  
  const classes = colorClasses[color];
  
  return (
    <div className={`${classes.bg} rounded-xl p-6`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
          <p className={`text-sm mt-1 flex items-center ${changeClasses[changeType]}`}>
            {changeType === "positive" && (
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
            {changeType === "negative" && (
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {change}
          </p>
        </div>
        <div className={`${classes.iconBg} p-3 rounded-lg text-white`}>
          <i className={`fas fa-${icon} text-lg`}></i>
        </div>
      </div>
    </div>
  );
}
