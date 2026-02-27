import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface BottomSheetPorQueNoAdelantarProps {
  show: boolean;
  onClose: () => void;
}

export function BottomSheetPorQueNoAdelantar({ show, onClose }: BottomSheetPorQueNoAdelantarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex flex-col justify-end" style={{ zIndex: 100 }}>
      {/* Dimmer: rgba(40,40,51,0.60) */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(40,40,51,0.60)",
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        className="relative bg-white flex flex-col"
        style={{
          borderRadius: "20px 20px 0 0",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drag indicator: 20px, centered */}
        <div className="flex justify-center items-center" style={{ height: 20 }}>
          <div style={{ width: 40, height: 20, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4, boxSizing: "border-box" }}>
            <div style={{ width: 32, height: 4, background: "#646587", borderRadius: 9999 }} />
          </div>
        </div>

        {/* Header: título à esquerda, X no topo direito — paddingLeft=16, paddingRight=8 */}
        <div
          className="flex items-start"
          style={{ paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 8 }}
        >
          <p
            style={{
              flex: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: "24px",
              color: "#282833",
              margin: 0,
            }}
          >
            ¿Por qué no puedo adelantar?
          </p>
          <button
            onClick={onClose}
            className="flex items-center justify-center cursor-pointer"
            style={{ flexShrink: 0, width: 32, height: 32, marginTop: 4, background: "white", borderRadius: 8, border: "none" }}
          >
            <X size={24} color="#646587" />
          </button>
        </div>

        {/* Body: paddingTop=16, px=16, paddingBottom=8, gap=24 */}
        <div
          className="flex flex-col"
          style={{ paddingTop: 16, paddingRight: 16, paddingBottom: 8, paddingLeft: 16, gap: 24 }}
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "18px", color: "#282833", margin: 0 }}>
            Por motivos de seguridad, algunas veces no podrás adelantar todo el dinero que está por liberarse.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "18px", color: "#282833", margin: 0 }}>
            Para continuar adelantando, te recomendamos seguir cumpliendo con los requisitos y buenas prácticas dentro de Mercado Libre.
          </p>
        </div>

        {/* Footer: paddingTop=16, px=16, paddingBottom=16 */}
        <div style={{ paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16 }}>
          <button
            onClick={onClose}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: "100%",
              height: 48,
              borderRadius: 12,
              background: "#434ce4",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 2,
              paddingBottom: 2,
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "18px",
              color: "#ffffff",
              border: "none",
            }}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
