import { useState } from "react";
import Programados from "@/imports/Programados-15-10729";
import { ProgramadosPausadoScreen } from "@/app/components/ProgramadosPausadoScreen";

interface ProgramadosFlowProps {
  onIrAlInicioClick?: () => void;
  onComplete?: (adminText: string, frequencyType: string, selectedDay?: string) => void;
  onFeedbackOpen?: (frequencyText: string, adminText: string, frequencyType: string, selectedDay?: string) => void;
  onFrequencyChangeFromPaused?: (frequencyType: string, selectedDay?: string) => void;
  onRevertToPaused?: () => void;
  initialFrequency?: { type: string; selectedDay?: string };
  isProgramadoActive?: boolean;
}

export function ProgramadosFlow({ onIrAlInicioClick, onComplete, onFeedbackOpen, onFrequencyChangeFromPaused, onRevertToPaused, initialFrequency, isProgramadoActive = true }: ProgramadosFlowProps) {
  const [confirmEnabled, setConfirmEnabled] = useState(false);
  // Tracks the frequency the user selected on the paused screen (new selection)
  const [fromPausedFrequency, setFromPausedFrequency] = useState<{ type: string; selectedDay?: string } | null>(null);

  const reset = () => {
    setConfirmEnabled(false);
    setFromPausedFrequency(null);
  };

  const handleIrAlInicio = () => {
    reset();
    onIrAlInicioClick?.();
  };

  const handleConfirm = (frequencyType: string, selectedDay?: string) => {
    reset();
    let feedbackFrequencyText = "";
    let adminCardText = "";

    if (frequencyType === "todos-dias") {
      feedbackFrequencyText = "todos los días";
      adminCardText = "Lo recibes todos los días";
    } else if (frequencyType === "semanal" && selectedDay) {
      const dayNamesFeedback: { [key: string]: string } = {
        'lun': 'los lunes',
        'mar': 'los martes',
        'mie': 'los miércoles',
        'jue': 'los jueves',
        'vie': 'los viernes',
        'sab': 'los sábados',
        'dom': 'los domingos'
      };
      const dayNamesAdmin: { [key: string]: string } = {
        'lun': 'lunes',
        'mar': 'martes',
        'mie': 'miércoles',
        'jue': 'jueves',
        'vie': 'viernes',
        'sab': 'sábados',
        'dom': 'domingos'
      };
      feedbackFrequencyText = dayNamesFeedback[selectedDay] || "una vez a la semana";
      adminCardText = `Lo recibes todos los ${dayNamesAdmin[selectedDay] || 'días'}`;
    } else if (frequencyType === "15-dias") {
      feedbackFrequencyText = "los días 1 y 15";
      adminCardText = "Lo recibes los días 1 y 15";
    }

    onFeedbackOpen?.(feedbackFrequencyText, adminCardText, frequencyType, selectedDay);
  };

  const handleReactivar = (frequencyType: string, selectedDay?: string) => {
    let adminCardText = "";

    if (frequencyType === "todos-dias") {
      adminCardText = "Lo recibes todos los días";
    } else if (frequencyType === "semanal" && selectedDay) {
      const dayNamesAdmin: { [key: string]: string } = {
        'lun': 'lunes',
        'mar': 'martes',
        'mie': 'miércoles',
        'jue': 'jueves',
        'vie': 'viernes',
        'sab': 'sábados',
        'dom': 'domingos'
      };
      adminCardText = `Lo recibes todos los ${dayNamesAdmin[selectedDay] || 'días'}`;
    } else if (frequencyType === "15-dias") {
      adminCardText = "Lo recibes los días 1 y 15";
    }

    onComplete?.(adminCardText, frequencyType, selectedDay);
  };

  const handleFrequencyChangeFromPaused = (frequencyType: string, selectedDay?: string) => {
    setFromPausedFrequency({ type: frequencyType, selectedDay });
    setConfirmEnabled(true);
    onFrequencyChangeFromPaused?.(frequencyType, selectedDay);
  };

  const handleRevertToPaused = () => {
    reset();
    onRevertToPaused?.();
  };

  // When arrived from paused flow:
  // - fromPausedFrequency is the new selection (shown pre-selected in Programados)
  // - initialFrequency (from App.tsx, never updated during this flow) is the original paused freq (used for revert check)
  const programadosInitialFrequency = fromPausedFrequency || initialFrequency;
  const originalPausedFrequency = fromPausedFrequency ? initialFrequency : undefined;

  return (
    isProgramadoActive ?
    <Programados
      onIrAlInicioClick={handleIrAlInicio}
      onConfirmClick={handleConfirm}
      initialFrequency={programadosInitialFrequency}
      confirmEnabled={confirmEnabled}
      onRevertToPaused={handleRevertToPaused}
      originalPausedFrequency={originalPausedFrequency}
    /> :
    <ProgramadosPausadoScreen
      onBackClick={handleIrAlInicio}
      onReactivarClick={handleReactivar}
      onFrequencyChangeFromPaused={handleFrequencyChangeFromPaused}
      initialFrequency={initialFrequency}
    />
  );
}
