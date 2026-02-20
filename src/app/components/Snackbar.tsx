import { useEffect, useState } from "react";

interface SnackbarProps {
  message: string;
  show: boolean;
  onHide: () => void;
}

export function Snackbar({ message, show, onHide }: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (show) {
      // Renderizar o componente
      setShouldRender(true);
      
      // Pequeno delay para trigger da animação de entrada
      setTimeout(() => {
        setIsVisible(true);
      }, 50);

      // Esconder após 2 segundos
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      // Remover do DOM após a animação de saída
      const removeTimer = setTimeout(() => {
        setShouldRender(false);
        onHide();
      }, 2500);

      return () => {
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [show, onHide]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`absolute bg-[#282834] content-stretch flex items-start left-[16px] overflow-clip p-[16px] rounded-[12px] shadow-[0px_8px_12px_0px_rgba(40,40,52,0.1)] w-[328px] transition-all duration-300 ease-in-out ${
        isVisible ? "bottom-[16px] opacity-100" : "bottom-[-100px] opacity-0"
      }`}
      data-name="Snackbar/Mobile"
    >
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-end leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
          <p className="css-4hzbpn leading-[18px]">{message}</p>
        </div>
      </div>
    </div>
  );
}
