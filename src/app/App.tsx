import { useState, useRef, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import Admin from "@/imports/Admin";
import AdminPartially from "@/imports/AdminPartially";
import AdminPartiallyConProgramado from "@/imports/AdminPartiallyConProgramado";
import AdminPartiallyConProgramadoNoAcreditado from "@/imports/AdminPartiallyConProgramadoNoAcreditado";
import AdminPartiallyConProgramadoCambioCondiciones from "@/imports/AdminPartiallyConProgramadoCambioCondiciones";
import AdminConProgramado from "@/imports/AdminConProgramado";
import AdminConProgramadoNoAcreditado from "@/imports/AdminConProgramadoNoAcreditado";
import AdminConProgramadoCambioCondiciones from "@/imports/AdminConProgramadoCambioCondiciones";
import AdminSinAdelantar from "@/imports/AdminSinAdelantar";
import AdminSinAdelantarConProgramado from "@/imports/AdminSinAdelantarConProgramado";
import AdminSinAdelantarConProgramadoNoAcreditado from "@/imports/AdminSinAdelantarConProgramadoNoAcreditado";
import AdminSinAdelantarConProgramadoCambioCondiciones from "@/imports/AdminSinAdelantarConProgramadoCambioCondiciones";
import AlInstante from "@/imports/AlInstante";
import FeedbackScreen from "@/imports/FeedbackScreen";
import FeedbackScreenRecurrente from "@/imports/FeedbackScreen-18-18805";
import BottomSheetNoModal from "@/imports/BottomSheetNoModal";
import { ProgramadosFlow } from "@/app/components/ProgramadosFlow";
import { Snackbar } from "@/app/components/Snackbar";
import { BottomSheetCambioCondiciones } from "@/app/components/BottomSheetCambioCondiciones";
import { BottomSheetPorQueNoAdelantar } from "@/app/components/BottomSheetPorQueNoAdelantar";
import { StatusBar } from "@/app/components/StatusBar";
import { HistorialScreen } from "@/app/components/HistorialScreen";
import { AdminNotAllowed } from "@/app/components/AdminNotAllowed";
import { AdminActionsContext } from "@/app/contexts/AdminContext";

export default function App() {
  const [selectedCase, setSelectedCase] = useState("totally-sin-programado");
  const [feedbackMounted, setFeedbackMounted] = useState(false);
  const [feedbackShown, setFeedbackShown] = useState(false);
  const [adelantoConfirmado, setAdelantoConfirmado] = useState(false);
  const [amountAdvanced, setAmountAdvanced] = useState(0);
  const [alInstanteMounted, setAlInstanteMounted] = useState(false);
  const [alInstanteShown, setAlInstanteShown] = useState(false);
  const [alInstanteExiting, setAlInstanteExiting] = useState(false);
  const [programadosMounted, setProgramadosMounted] = useState(false);
  const [programadosShown, setProgramadosShown] = useState(false);
  const [programadosExiting, setProgramadosExiting] = useState(false);
  const [programadoText, setProgramadoText] = useState<string | null>(null);
  const [hasInteraction, setHasInteraction] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<{ type: string; selectedDay?: string } | null>(null);
  const [isProgramadoActive, setIsProgramadoActive] = useState(true); // Estado para saber se o programado está ativo ou pausado
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarKey, setSnackbarKey] = useState(0);
  const [showCambioCondicionesSheet, setShowCambioCondicionesSheet] = useState(false);
  const [cambioCondicionesAceptado, setCambioCondicionesAceptado] = useState(false);
  const [showPorQueSheet, setShowPorQueSheet] = useState(false);
  const [historialMounted, setHistorialMounted] = useState(false);
  const [historialShown, setHistorialShown] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarSheetVisible, setCalendarSheetVisible] = useState(false);
  const calendarInitialSelectionRef = useRef<{ startDay: number; endDay: number } | null>(null);
  const calendarOnSelectRef = useRef<((adelantas: number, costo: number, recibes: number, startDay: number, endDay: number) => void) | null>(null);
  const [recurrenteFeedbackMounted, setRecurrenteFeedbackMounted] = useState(false);
  const [recurrenteFeedbackShown, setRecurrenteFeedbackShown] = useState(false);
  const [recurrenteFeedbackText, setRecurrenteFeedbackText] = useState("");
  const pendingProgramadoDataRef = useRef<{ adminText: string; frequencyType: string; selectedDay?: string } | null>(null);

  useEffect(() => {
    if (calendarOpen) {
      const t = setTimeout(() => setCalendarSheetVisible(true), 20);
      return () => clearTimeout(t);
    } else {
      setCalendarSheetVisible(false);
    }
  }, [calendarOpen]);

  const showGlobalSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarKey(k => k + 1);
    setShowSnackbar(true);
  };

  const handleAceptarCambioCondiciones = () => {
    setShowCambioCondicionesSheet(false);
    setCambioCondicionesAceptado(true);
    showGlobalSnackbar("Aceptaste el cambio de condiciones.");
  };

  const closeProgramados = (onDone?: () => void) => {
    setProgramadosExiting(true);
    setProgramadosShown(false);
    setTimeout(() => {
      setProgramadosMounted(false);
      setProgramadosExiting(false);
      onDone?.();
    }, 350);
  };

  // Função chamada quando o fluxo de Programados é completado
  const handleProgramadosComplete = (frequencyText: string, frequencyType: string, selectedDay?: string) => {
    setProgramadoText(frequencyText);
    setSelectedFrequency({ type: frequencyType, selectedDay });
    const wasInactive = !isProgramadoActive;
    closeProgramados(() => {
      if (wasInactive) {
        setIsProgramadoActive(true);
        showGlobalSnackbar("Encendiste tu adelanto recurrente.");
      }
    });
  };

  const openFeedback = (amount: number) => {
    setAdelantoConfirmado(true);
    setAmountAdvanced(amount);
    setFeedbackMounted(true);
    setTimeout(() => setFeedbackShown(true), 20);
  };

  const closeFeedback = () => {
    setFeedbackMounted(false);
    setFeedbackShown(false);
  };

  const handleRecurrenteFeedbackClose = () => {
    const data = pendingProgramadoDataRef.current;
    if (!data) return;
    setRecurrenteFeedbackMounted(false);
    setRecurrenteFeedbackShown(false);
    setProgramadoText(data.adminText);
    setSelectedFrequency({ type: data.frequencyType, selectedDay: data.selectedDay });
    const wasInactive = !isProgramadoActive;
    setIsProgramadoActive(true);
    if (wasInactive) {
      showGlobalSnackbar("Encendiste tu adelanto recurrente.");
    }
  };

  // Função para resetar o estado e mudar o caso de uso
  const handleCaseChange = (caseId: string) => {
    setSelectedCase(caseId);
    setFeedbackMounted(false);
    setFeedbackShown(false);
    setAdelantoConfirmado(false);
    setAmountAdvanced(0);
    setAlInstanteMounted(false);
    setAlInstanteShown(false);
    setProgramadosMounted(false);
    setProgramadosShown(false);
    setHistorialMounted(false);
    setHistorialShown(false);
    setRecurrenteFeedbackMounted(false);
    setRecurrenteFeedbackShown(false);
    setRecurrenteFeedbackText("");
    setProgramadoText(null); // Resetar o estado customizado
    setHasInteraction(false); // Resetar a interação
    setSelectedFrequency(null); // Resetar a frequência selecionada
    setIsProgramadoActive(true); // Resetar o estado de ativação
    setCambioCondicionesAceptado(false); // Resetar o estado de aceite
  };

  // Função chamada quando há interação na tela do CDU
  const handleScreenInteraction = () => {
    if (!hasInteraction) {
      setHasInteraction(true);
    }
  };

  // Função chamada quando o toggle muda de estado (passada pelos componentes Admin)
  const handleToggleChange = (isActive: boolean) => {
    setIsProgramadoActive(isActive);
    showGlobalSnackbar(isActive ? "Encendiste tu adelanto recurrente." : "Pausaste tu adelanto recurrente.");
  };

  // Função chamada quando clica em Modificar nos CDUs con programado
  const openProgramados = () => {
    setProgramadosExiting(false);
    setProgramadosMounted(true);
    setTimeout(() => setProgramadosShown(true), 20);
  };

  const handleModificarClick = () => {
    if (!selectedFrequency) {
      setSelectedFrequency({ type: "semanal", selectedDay: "mar" });
    }
    openProgramados();
  };

  // Componente para botão de caso de uso
  const CaseButton = ({ caseId, label, className = "" }: { caseId: string; label: string; className?: string }) => (
    <button
      onClick={() => handleCaseChange(caseId)}
      className={`${className} px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
        selectedCase === caseId
          ? "bg-[#00d4aa] text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span>{label}</span>
      {selectedCase === caseId && hasInteraction && (
        <RotateCcw className="w-4 h-4" />
      )}
    </button>
  );

  // Determinar o valor total disponvel baseado no caso de uso
  const getTotalDisponible = () => {
    const sinAdelantarCases = [
      "sin-adelantar-sin-programado",
      "sin-adelantar-con-programado",
      "sin-adelantar-no-acreditado",
      "sin-adelantar-cambio-condiciones"
    ];
    
    const partiallyCases = [
      "partially-sin-programado",
      "partially-con-programado",
      "partially-no-acreditado",
      "partially-cambio-condiciones"
    ];
    
    // Se é "Sin dinero a adelantar", retorna 0
    if (sinAdelantarCases.includes(selectedCase)) {
      return 0;
    }

    const base = partiallyCases.includes(selectedCase) ? 30000000 : 50000000;
    return Math.max(0, base - amountAdvanced);
  };

  const useCases = [
    { 
      group: "Con dinero a adelantar",
      subgroups: [
        {
          subgroup: "Totally allowed",
          cases: [
            { id: "totally-sin-programado", label: "Sin recurrente" },
            { id: "totally-con-programado", label: "Con recurrente" },
            { id: "totally-no-acreditado", label: "No se acreditó el recurrente" },
            { id: "totally-cambio-condiciones", label: "Cambio de condiciones en el recurrente" },
          ]
        },
        {
          subgroup: "Partially allowed",
          cases: [
            { id: "partially-sin-programado", label: "Sin recurrente" },
            { id: "partially-con-programado", label: "Con recurrente" },
            { id: "partially-no-acreditado", label: "No se acreditó el recurrente" },
            { id: "partially-cambio-condiciones", label: "Cambio de condiciones en el recurrente" },
          ]
        }
      ]
    },
    {
      group: "Sin dinero a adelantar",
      cases: [
        { id: "sin-adelantar-sin-programado", label: "Sin recurrente" },
        { id: "sin-adelantar-con-programado", label: "Con recurrente" },
        { id: "sin-adelantar-no-acreditado", label: "No se acreditó el recurrente" },
        { id: "sin-adelantar-cambio-condiciones", label: "Cambio de condiciones en el recurrente" },
      ]
    },
    {
      group: "Not allowed a adelantar",
      cases: [
        { id: "not-allowed-con-historial", label: "Con historial" },
        { id: "not-allowed-sin-historial", label: "Sin historial" },
      ]
    },
  ];

  // Renderizar o componente correto baseado no caso selecionado
  const renderAdmin = () => {
    // Sin dinero a adelantar + Sin programado cases
    const sinAdelantarSinProgramadoCases = [
      "sin-adelantar-sin-programado"
    ];

    // Totally allowed + Con programado cases
    const totallyConProgramadoCases = [
      "totally-con-programado"
    ];

    // Totally allowed + No acreditado cases
    const totallyNoAcreditadoCases = [
      "totally-no-acreditado"
    ];

    // Totally allowed + Cambio de condiciones cases
    const totallyCambioCondicionesCases = [
      "totally-cambio-condiciones"
    ];

    // Partially allowed + No acreditado cases
    const partiallyNoAcreditadoCases = [
      "partially-no-acreditado"
    ];

    // Partially allowed + Cambio de condiciones cases
    const partiallyCambioCondicionesCases = [
      "partially-cambio-condiciones"
    ];

    // Sin dinero a adelantar + No acreditado cases
    const sinAdelantarNoAcreditadoCases = [
      "sin-adelantar-no-acreditado"
    ];

    // Sin dinero a adelantar + Cambio de condiciones cases
    const sinAdelantarCambioCondicionesCases = [
      "sin-adelantar-cambio-condiciones"
    ];

    // Partially allowed + Con programado cases
    const partiallyConProgramadoCases = [
      "partially-con-programado"
    ];

    // Sin dinero a adelantar + Con programado cases
    const sinAdelantarConProgramadoCases = [
      "sin-adelantar-con-programado"
    ];

    // Partially allowed + Sin programado cases
    const partiallySinProgramadoCases = [
      "partially-sin-programado"
    ];

    // Totally allowed + Sin programado cases
    const totallySinProgramadoCases = [
      "totally-sin-programado"
    ];

    // Not allowed cases → render AdminNotAllowed (historial opens as overlay)
    if (selectedCase === "not-allowed-con-historial" || selectedCase === "not-allowed-sin-historial") {
      return <AdminNotAllowed />;
    }

    const navigateToAlInstante = () => {
      setAlInstanteExiting(false);
      setAlInstanteMounted(true);
      setTimeout(() => setAlInstanteShown(true), 20);
    };
    const navigateToProgramados = () => openProgramados();

    // Após adelanto confirmado → recalcular remaining e mostrar tela correta
    if (adelantoConfirmado) {
      const remaining = getTotalDisponible();
      const hasProgramado = programadoText !== null || !selectedCase.includes("sin-programado");
      const isPartially = selectedCase.startsWith("partially");

      if (remaining <= 0) {
        if (hasProgramado) {
          return <AdminSinAdelantarConProgramado customText={programadoText || undefined} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} onPorQueClick={() => setShowPorQueSheet(true)} />;
        }
        return <AdminSinAdelantar onProgramarClick={navigateToProgramados} onPorQueClick={() => setShowPorQueSheet(true)} />;
      }

      // remaining > 0 — adelanto parcial, mostrar admin com valor atualizado
      if (hasProgramado) {
        if (isPartially) {
          return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText || undefined} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} totalDisponible={remaining} />;
        }
        return <AdminConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText || undefined} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} totalDisponible={remaining} />;
      }
      if (isPartially) {
        return <AdminPartially onAdelantarClick={navigateToAlInstante} onProgramarClick={navigateToProgramados} totalDisponible={remaining} />;
      }
      return <Admin onAdelantarClick={navigateToAlInstante} onProgramarClick={navigateToProgramados} onToggleChange={handleToggleChange} isProgramadoActive={isProgramadoActive} totalDisponible={remaining} />;
    }

    // Casos específicos "No se acreditó" para Totally allowed
    if (totallyNoAcreditadoCases.includes(selectedCase)) {
      return <AdminConProgramadoNoAcreditado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    // Casos específicos "Cambio de condiciones" para Totally allowed
    if (totallyCambioCondicionesCases.includes(selectedCase)) {
      if (cambioCondicionesAceptado) return <AdminConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      return <AdminConProgramadoCambioCondiciones onAdelantarClick={navigateToAlInstante} onRevisarCostoClick={() => setShowCambioCondicionesSheet(true)} />;
    }

    // Casos específicos "No se acreditó" para Partially allowed
    if (partiallyNoAcreditadoCases.includes(selectedCase)) {
      return <AdminPartiallyConProgramadoNoAcreditado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    // Casos específicos "Cambio de condiciones" para Partially allowed
    if (partiallyCambioCondicionesCases.includes(selectedCase)) {
      if (cambioCondicionesAceptado) return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      return <AdminPartiallyConProgramadoCambioCondiciones onAdelantarClick={navigateToAlInstante} onRevisarCostoClick={() => setShowCambioCondicionesSheet(true)} />;
    }

    // Casos específicos "No se acreditó" para Sin dinero a adelantar
    if (sinAdelantarNoAcreditadoCases.includes(selectedCase)) {
      return <AdminSinAdelantarConProgramadoNoAcreditado onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} onPorQueClick={() => setShowPorQueSheet(true)} />;
    }

    // Casos específicos "Cambio de condiciones" para Sin dinero a adelantar
    if (sinAdelantarCambioCondicionesCases.includes(selectedCase)) {
      if (cambioCondicionesAceptado) return <AdminSinAdelantarConProgramado onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} onPorQueClick={() => setShowPorQueSheet(true)} />;
      return <AdminSinAdelantarConProgramadoCambioCondiciones onRevisarCostoClick={() => setShowCambioCondicionesSheet(true)} onPorQueClick={() => setShowPorQueSheet(true)} />;
    }

    // Se há um programadoText, mostrar a versão "con programado"
    if (programadoText) {
      if (sinAdelantarSinProgramadoCases.includes(selectedCase) || sinAdelantarConProgramadoCases.includes(selectedCase)) {
        return <AdminSinAdelantarConProgramado customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} onPorQueClick={() => setShowPorQueSheet(true)} />;
      } else if (partiallySinProgramadoCases.includes(selectedCase) || partiallyConProgramadoCases.includes(selectedCase)) {
        return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      } else {
        return <AdminConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      }
    }

    if (sinAdelantarSinProgramadoCases.includes(selectedCase)) {
      return <AdminSinAdelantar onProgramarClick={navigateToProgramados} onPorQueClick={() => setShowPorQueSheet(true)} />;
    }
    
    if (totallyConProgramadoCases.includes(selectedCase)) {
      return <AdminConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    if (partiallyConProgramadoCases.includes(selectedCase)) {
      return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    if (sinAdelantarConProgramadoCases.includes(selectedCase)) {
      return <AdminSinAdelantarConProgramado onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} onPorQueClick={() => setShowPorQueSheet(true)} />;
    }

    if (partiallySinProgramadoCases.includes(selectedCase)) {
      return <AdminPartially onAdelantarClick={navigateToAlInstante} onProgramarClick={navigateToProgramados} />;
    }
    
    // Default: Totally allowed + Sin programado
    return <Admin onAdelantarClick={navigateToAlInstante} onProgramarClick={navigateToProgramados} onToggleChange={handleToggleChange} isProgramadoActive={isProgramadoActive} />;
  };

  return (
    <div className="size-full flex items-center justify-center bg-[#f5f5f5] p-6">
      <div className="flex items-start gap-[100px]">
      {/* Menu de casos de uso - Organizado em Dropdowns */}
      <div className="w-[650px] flex-shrink-0 bg-white rounded-[20px] shadow-md p-6 max-h-[calc(100vh-48px)] overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-8">Selecciona el caso de uso para probar</h3>
        
        <div className="space-y-10">
          {/* Con dinero a adelantar */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-700 border-b pb-2">Con dinero a adelantar</h4>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Totally allowed */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2">Totally allowed</p>
                <div className="flex flex-col gap-1">
                  <CaseButton caseId="totally-sin-programado" label="Sin recurrente" />
                  <CaseButton caseId="totally-con-programado" label="Con recurrente" />
                  <CaseButton caseId="totally-no-acreditado" label="No se acreditó" />
                  <CaseButton caseId="totally-cambio-condiciones" label="Cambio de condiciones" />
                </div>
              </div>
              
              {/* Partially allowed */}
              <div>
                <p className="text-sm font-bold text-gray-700 mb-2">Partially allowed</p>
                <div className="flex flex-col gap-1">
                  <CaseButton caseId="partially-sin-programado" label="Sin recurrente" />
                  <CaseButton caseId="partially-con-programado" label="Con recurrente" />
                  <CaseButton caseId="partially-no-acreditado" label="No se acreditó" />
                  <CaseButton caseId="partially-cambio-condiciones" label="Cambio de condiciones" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Sin dinero a adelantar */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-700 border-b pb-2">Sin dinero a adelantar</h4>

            <div className="flex flex-col gap-1 max-w-[300px]">
              <CaseButton caseId="sin-adelantar-sin-programado" label="Sin recurrente" />
              <CaseButton caseId="sin-adelantar-con-programado" label="Con recurrente" />
              <CaseButton caseId="sin-adelantar-no-acreditado" label="No se acreditó" />
              <CaseButton caseId="sin-adelantar-cambio-condiciones" label="Cambio de condiciones" />
            </div>
          </div>

          {/* Not allowed a adelantar */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-700 border-b pb-2">Not allowed a adelantar</h4>
            <div className="flex flex-col gap-1 max-w-[300px]">
              <CaseButton caseId="not-allowed-con-historial" label="Con historial" />
              <CaseButton caseId="not-allowed-sin-historial" label="Sin historial" />
            </div>
          </div>
        </div>
      </div>

      {/* Tela do Admin */}
      <div
        className="w-[360px] h-[800px] shadow-xl rounded-[20px] overflow-hidden relative flex-shrink-0"
        onClick={handleScreenInteraction}
      >
        {/* Status bar fixo — fica por cima de todas as camadas */}
        <StatusBar />

        {/* Dimmer + sheet do calendário — renderizados aqui para ficarem acima da StatusBar */}
        {calendarOpen && (
          <>
            <div
              className="absolute inset-0"
              style={{ zIndex: 60, background: "rgba(40,40,51,0.60)", opacity: calendarSheetVisible ? 1 : 0, transition: "opacity 300ms ease" }}
              onClick={() => setCalendarOpen(false)}
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ zIndex: 70, transform: calendarSheetVisible ? "translateY(0)" : "translateY(100%)", transition: "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)" }}
            >
              <BottomSheetNoModal
                onDismiss={() => setCalendarOpen(false)}
                onSelect={(adelantas, costo, recibes, startDay, endDay) => {
                  calendarOnSelectRef.current?.(adelantas, costo, recibes, startDay, endDay);
                  setCalendarOpen(false);
                }}
                initialSelection={calendarInitialSelectionRef.current}
                totalDisponible={getTotalDisponible()}
              />
            </div>
          </>
        )}

        {/* Camada base: admin */}
        <div className="absolute inset-0">
          <AdminActionsContext.Provider value={{ onHistorialClick: () => { setHistorialMounted(true); setTimeout(() => setHistorialShown(true), 20); } }}>
            {renderAdmin()}
          </AdminActionsContext.Provider>
        </div>

        {/* Camada overlay: HistorialScreen desliza por cima da direita */}
        {historialMounted && (
          <div
            className="absolute inset-0 z-30"
            style={{
              transform: historialShown ? "translateX(0)" : "translateX(100%)",
              transition: `transform 350ms ${historialShown ? "cubic-bezier(0.32, 0.72, 0, 1)" : "cubic-bezier(0.4, 0, 1, 1)"}`,
            }}
          >
            <HistorialScreen
              isEmpty={selectedCase === "not-allowed-sin-historial"}
              onBackClick={() => {
                setHistorialShown(false);
                setTimeout(() => setHistorialMounted(false), 350);
              }}
            />
          </div>
        )}

        {/* Camada overlay: ProgramadosFlow desliza por cima da direita */}
        {programadosMounted && (
          <div
            className="absolute inset-0"
            style={{
              transform: programadosShown ? "translateX(0)" : "translateX(100%)",
              transition: `transform 350ms ${programadosExiting ? "cubic-bezier(0.4, 0, 1, 1)" : "cubic-bezier(0.32, 0.72, 0, 1)"}`,
            }}
          >
            <ProgramadosFlow
              onIrAlInicioClick={() => closeProgramados()}
              onComplete={handleProgramadosComplete}
              onFeedbackOpen={(frequencyText, adminText, frequencyType, selectedDay) => {
                pendingProgramadoDataRef.current = { adminText, frequencyType, selectedDay };
                setRecurrenteFeedbackText(frequencyText);
                setProgramadosMounted(false);
                setProgramadosShown(false);
                setProgramadosExiting(false);
                setRecurrenteFeedbackMounted(true);
                setTimeout(() => setRecurrenteFeedbackShown(true), 20);
              }}
              initialFrequency={selectedFrequency || undefined}
              isProgramadoActive={isProgramadoActive}
              onFrequencyChangeFromPaused={() => {
                setIsProgramadoActive(true);
              }}
              onRevertToPaused={() => {
                setIsProgramadoActive(false);
              }}
            />
          </div>
        )}

        {/* Camada overlay: AlInstante desliza por cima da direita */}
        {alInstanteMounted && (
          <div
            className="absolute inset-0"
            style={{
              transform: alInstanteShown ? "translateX(0)" : "translateX(100%)",
              transition: `transform 350ms ${alInstanteExiting ? "cubic-bezier(0.4, 0, 1, 1)" : "cubic-bezier(0.32, 0.72, 0, 1)"}`,
            }}
          >
            <AlInstante
              totalDisponible={getTotalDisponible()}
              onCalendarOpen={(initialSelection, onSelect) => {
                calendarInitialSelectionRef.current = initialSelection;
                calendarOnSelectRef.current = onSelect;
                setCalendarOpen(true);
              }}
              onBackClick={() => {
                setCalendarOpen(false);
                setAlInstanteExiting(true);
                setAlInstanteShown(false);
                setTimeout(() => {
                  setAlInstanteMounted(false);
                  setAlInstanteExiting(false);
                }, 350);
              }}
              onConfirmarClick={(amount) => {
                setCalendarOpen(false);
                setAlInstanteMounted(false);
                setAlInstanteShown(false);
                setAlInstanteExiting(false);
                openFeedback(amount);
              }}
            />
          </div>
        )}
        
        {/* Camada overlay: FeedbackScreen desliza pela direita, sai instantaneamente */}
        {feedbackMounted && (
          <div
            className="absolute inset-0"
            style={{
              transform: feedbackShown ? "translateX(0)" : "translateX(100%)",
              transition: feedbackShown ? "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)" : "none",
            }}
          >
            <FeedbackScreen
              onCloseClick={closeFeedback}
              onIrAlInicioClick={closeFeedback}
            />
          </div>
        )}

        {/* Camada overlay: FeedbackScreen recurrente desliza pela direita, sai instantaneamente */}
        {recurrenteFeedbackMounted && (
          <div
            className="absolute inset-0"
            style={{
              transform: recurrenteFeedbackShown ? "translateX(0)" : "translateX(100%)",
              transition: recurrenteFeedbackShown ? "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)" : "none",
            }}
          >
            <FeedbackScreenRecurrente
              onCloseClick={handleRecurrenteFeedbackClose}
              onIrAlInicioClick={handleRecurrenteFeedbackClose}
              frequencyText={recurrenteFeedbackText}
            />
          </div>
        )}

        {/* Snackbar para mostrar mensagens - dentro do container da tela */}
        <Snackbar
          key={snackbarKey}
          message={snackbarMessage}
          show={showSnackbar}
          onHide={() => setShowSnackbar(false)}
        />

        {/* Bottom sheet cambio de condiciones */}
        <BottomSheetCambioCondiciones
          show={showCambioCondicionesSheet}
          onClose={() => setShowCambioCondicionesSheet(false)}
          onAceptar={handleAceptarCambioCondiciones}
        />

        {/* Bottom sheet ¿Por qué no puedo adelantar? */}
        <BottomSheetPorQueNoAdelantar
          show={showPorQueSheet}
          onClose={() => setShowPorQueSheet(false)}
        />
      </div>
      </div>
    </div>
  );
}