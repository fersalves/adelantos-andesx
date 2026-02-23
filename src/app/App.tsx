import { useState } from "react";
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
import { ProgramadosFlow } from "@/app/components/ProgramadosFlow";
import { Snackbar } from "@/app/components/Snackbar";

export default function App() {
  const [selectedCase, setSelectedCase] = useState("totally-sin-programado");
  const [currentScreen, setCurrentScreen] = useState<"admin" | "alinstante" | "feedback" | "programados">("admin");
  const [programadoText, setProgramadoText] = useState<string | null>(null);
  const [hasInteraction, setHasInteraction] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<{ type: string; selectedDay?: string } | null>(null);
  const [isProgramadoActive, setIsProgramadoActive] = useState(true); // Estado para saber se o programado está ativo ou pausado
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Função chamada quando o fluxo de Programados é completado
  const handleProgramadosComplete = (frequencyText: string, frequencyType: string, selectedDay?: string) => {
    setProgramadoText(frequencyText);
    setSelectedFrequency({ type: frequencyType, selectedDay });
    const wasInactive = !isProgramadoActive;
    setIsProgramadoActive(true); // Sempre ativa quando confirma
    setCurrentScreen("admin");
    
    // Se estava desativado e agora ativou, mostrar snackbar
    if (wasInactive) {
      setSnackbarMessage("Encendiste tu adelanto recurrente.");
      setShowSnackbar(true);
    }
  };

  // Função para resetar o estado e mudar o caso de uso
  const handleCaseChange = (caseId: string) => {
    setSelectedCase(caseId);
    setCurrentScreen("admin");
    setProgramadoText(null); // Resetar o estado customizado
    setHasInteraction(false); // Resetar a interação
    setSelectedFrequency(null); // Resetar a frequência selecionada
    setIsProgramadoActive(true); // Resetar o estado de ativação
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
  };

  // Função chamada quando clica em Modificar nos CDUs con programado
  const handleModificarClick = () => {
    // Se não há selectedFrequency (ou seja, é a primeira vez clicando em modificar em um "con programado"),
    // definir a frequência padrão baseada no texto padrão "Lo recibes todos los lunes"
    if (!selectedFrequency) {
      setSelectedFrequency({ type: "semanal", selectedDay: "lun" });
    }
    setCurrentScreen("programados");
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
    
    // Se é "Partially allowed", retorna 30.000.000
    if (partiallyCases.includes(selectedCase)) {
      return 30000000;
    }
    
    // Se é "Totally allowed", retorna 50.000.000
    return 50000000;
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

    const navigateToAlInstante = () => setCurrentScreen("alinstante");
    const navigateToProgramados = () => setCurrentScreen("programados");

    // Casos específicos "No se acreditó" para Totally allowed
    if (totallyNoAcreditadoCases.includes(selectedCase)) {
      return <AdminConProgramadoNoAcreditado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    // Casos específicos "Cambio de condiciones" para Totally allowed
    if (totallyCambioCondicionesCases.includes(selectedCase)) {
      return <AdminConProgramadoCambioCondiciones onAdelantarClick={navigateToAlInstante} />;
    }

    // Casos específicos "No se acreditó" para Partially allowed
    if (partiallyNoAcreditadoCases.includes(selectedCase)) {
      return <AdminPartiallyConProgramadoNoAcreditado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    // Casos específicos "Cambio de condiciones" para Partially allowed
    if (partiallyCambioCondicionesCases.includes(selectedCase)) {
      return <AdminPartiallyConProgramadoCambioCondiciones onAdelantarClick={navigateToAlInstante} />;
    }

    // Casos específicos "No se acreditó" para Sin dinero a adelantar
    if (sinAdelantarNoAcreditadoCases.includes(selectedCase)) {
      return <AdminSinAdelantarConProgramadoNoAcreditado onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    // Casos específicos "Cambio de condiciones" para Sin dinero a adelantar
    if (sinAdelantarCambioCondicionesCases.includes(selectedCase)) {
      return <AdminSinAdelantarConProgramadoCambioCondiciones />;
    }

    // Se há um programadoText, mostrar a versão "con programado"
    if (programadoText) {
      if (sinAdelantarSinProgramadoCases.includes(selectedCase) || sinAdelantarConProgramadoCases.includes(selectedCase)) {
        return <AdminSinAdelantarConProgramado customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      } else if (partiallySinProgramadoCases.includes(selectedCase) || partiallyConProgramadoCases.includes(selectedCase)) {
        return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      } else {
        return <AdminConProgramado onAdelantarClick={navigateToAlInstante} customText={programadoText} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
      }
    }

    if (sinAdelantarSinProgramadoCases.includes(selectedCase)) {
      return <AdminSinAdelantar onProgramarClick={navigateToProgramados} />;
    }
    
    if (totallyConProgramadoCases.includes(selectedCase)) {
      return <AdminConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    if (partiallyConProgramadoCases.includes(selectedCase)) {
      return <AdminPartiallyConProgramado onAdelantarClick={navigateToAlInstante} onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
    }

    if (sinAdelantarConProgramadoCases.includes(selectedCase)) {
      return <AdminSinAdelantarConProgramado onModificarClick={handleModificarClick} isToggleOn={isProgramadoActive} onToggleChange={handleToggleChange} />;
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
        </div>
      </div>

      {/* Tela do Admin */}
      <div 
        className="w-[360px] h-[800px] shadow-xl rounded-[20px] overflow-hidden relative flex-shrink-0"
        onClick={handleScreenInteraction}
      >
        {currentScreen === "admin" ? (
          renderAdmin()
        ) : currentScreen === "alinstante" ? (
          <AlInstante 
            totalDisponible={getTotalDisponible()} 
            onBackClick={() => setCurrentScreen("admin")} 
            onConfirmarClick={() => setCurrentScreen("feedback")}
          />
        ) : currentScreen === "feedback" ? (
          <FeedbackScreen onIrAlInicioClick={() => setCurrentScreen("admin")} />
        ) : (
          <ProgramadosFlow 
            onIrAlInicioClick={() => setCurrentScreen("admin")} 
            onComplete={handleProgramadosComplete}
            initialFrequency={selectedFrequency || undefined}
            isProgramadoActive={isProgramadoActive}
          />
        )}
        
        {/* Snackbar para mostrar mensagens - dentro do container da tela */}
        <Snackbar 
          message={snackbarMessage}
          show={showSnackbar}
          onHide={() => setShowSnackbar(false)}
        />
      </div>
      </div>
    </div>
  );
}