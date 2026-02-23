import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface BottomSheetCambioCondicionesProps {
  show: boolean;
  onClose: () => void;
  onAceptar: () => void;
}

export function BottomSheetCambioCondiciones({ show, onClose, onAceptar }: BottomSheetCambioCondicionesProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      // pequeno delay para o browser registrar o estado inicial antes de animar
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex flex-col justify-end" style={{ zIndex: 50 }}>
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
        {/* Drag indicator area: 20px tall, centered */}
        <div className="flex justify-center items-center" style={{ height: 20 }}>
          <div style={{ width: 40, height: 20, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4, boxSizing: "border-box" }}>
            <div
              style={{ width: 32, height: 4, background: "#646587", borderRadius: 9999 }}
            />
          </div>
        </div>

        {/* Header: título à esquerda, X no topo direito */}
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
            Actualizamos las condiciones de tu adelanto recurrente
          </p>
          <button
            onClick={onClose}
            className="flex items-center justify-center cursor-pointer"
            style={{ flexShrink: 0, width: 32, height: 32, marginTop: 4, background: "white", borderRadius: 8, border: "none" }}
          >
            <X size={24} color="#646587" />
          </button>
        </div>

        {/* Body content: paddingTop=24, px=16, paddingBottom=16, gap=24 */}
        <div
          className="flex flex-col"
          style={{ paddingTop: 24, paddingRight: 16, paddingBottom: 16, paddingLeft: 16, gap: 24 }}
        >
          <div className="flex flex-col" style={{ gap: 24 }}>
            {/* Text 1 */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "18px",
                color: "#282833",
                margin: 0,
              }}
            >
              El nuevo costo quedará entre el 2 y 13% del total a adelantar. Incluye IVA.
            </p>

            {/* Text 2 + link (single text node in Figma with mixed styles) */}
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "18px",
                color: "#282833",
              }}
            >
              <p style={{ margin: 0 }}>
                Acepta el cambio para mantener encendido tu adelanto.
              </p>
              <p style={{ margin: 0, marginTop: 18 }}>
                <a
                  href="#"
                  style={{ color: "#434ce4", textDecoration: "underline" }}
                  onClick={(e) => e.preventDefault()}
                >
                  Ver Términos y condiciones
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer: paddingTop=16, px=16, paddingBottom=16, gap=8 */}
        <div
          className="flex flex-col"
          style={{ paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16, gap: 8 }}
        >
          {/* Primary button: h=48, radius=12, fill=#434ce4, px=24 */}
          <button
            onClick={onAceptar}
            className="flex items-center justify-center cursor-pointer"
            style={{
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
              width: "100%",
              border: "none",
            }}
          >
            Aceptar
          </button>

          {/* Secondary button: h=48, radius=12, transparent, px=24 */}
          <button
            onClick={onClose}
            className="flex items-center justify-center cursor-pointer"
            style={{
              height: 48,
              borderRadius: 12,
              background: "transparent",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 2,
              paddingBottom: 2,
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "18px",
              color: "#434ce4",
              width: "100%",
              border: "none",
            }}
          >
            En otro momento
          </button>
        </div>
      </div>
    </div>
  );
}
