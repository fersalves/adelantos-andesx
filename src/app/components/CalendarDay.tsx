// Componente de dia do calendário com lógica de seleção de range
interface CalendarDayProps {
  day: number;
  amount: number;
  isAvailable: boolean;
  isStart: boolean;
  isEnd: boolean;
  isInRange: boolean;
  onClick: () => void;
}

function formatAmount(amount: number): string {
  if (amount >= 1000) {
    return `$ ${Math.round(amount / 1000)} k`;
  }
  return `$ ${amount}`;
}

export function CalendarDay({
  day,
  amount,
  isAvailable,
  isStart,
  isEnd,
  isInRange,
  onClick,
}: CalendarDayProps) {
  // Dia não disponível (passado ou futuro sem din heiro)
  if (!isAvailable) {
    return (
      <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
        <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
          {day}
        </p>
      </div>
    );
  }

  // Dia disponível - determina as classes baseado no estado
  let bgClasses = "";
  let textColorClasses = "text-[#282834]";
  let roundingClasses = "";

  if (isStart && isEnd) {
    // Dia único selecionado
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-[8px]";
  } else if (isStart) {
    // Primeiro dia do range
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-bl-[8px] rounded-tl-[8px]";
  } else if (isEnd) {
    // Último dia do range
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-br-[8px] rounded-tr-[8px]";
  } else if (isInRange) {
    // Dia no meio do range
    bgClasses = "bg-[#dee9ff]";
  }

  return (
    <div
      onClick={onClick}
      className={`content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center cursor-pointer hover:opacity-80 transition-opacity ${bgClasses} ${roundingClasses}`}
      data-name="day"
    >
      <p className={`css-4hzbpn leading-[16px] relative shrink-0 text-[12px] w-full ${textColorClasses}`} style={{ fontFeatureSettings: "'case'" }}>
        {day}
      </p>
      <p className={`css-4hzbpn leading-[12px] relative shrink-0 text-[10px] w-full ${textColorClasses}`} style={{ fontFeatureSettings: "'case'" }}>
        {formatAmount(amount)}
      </p>
    </div>
  );
}
