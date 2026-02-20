import { useState } from "react";
import Programados from "@/imports/Programados-15-10729";
import ProgramadosPausado from "@/imports/Programados-18-20470";
import FeedbackScreen from "@/imports/FeedbackScreen-18-18805";
import { ProgramadosPausadoScreen } from "@/app/components/ProgramadosPausadoScreen";

interface ProgramadosFlowProps {
  onIrAlInicioClick?: () => void;
  onComplete?: (adminText: string, frequencyType: string, selectedDay?: string) => void;
  initialFrequency?: { type: string; selectedDay?: string };
  isProgramadoActive?: boolean;
}

export function ProgramadosFlow({ onIrAlInicioClick, onComplete, initialFrequency, isProgramadoActive = true }: ProgramadosFlowProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [adminText, setAdminText] = useState("");
  const [frequencyType, setFrequencyType] = useState("");
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined);

  // Se há initialFrequency mas não há adminText, derivar o adminText da initialFrequency
  const getCurrentAdminText = () => {
    if (adminText) return adminText;
    
    if (initialFrequency) {
      if (initialFrequency.type === "todos-dias") {
        return "Lo recibes todos los días";
      } else if (initialFrequency.type === "semanal" && initialFrequency.selectedDay) {
        const dayNamesAdmin: { [key: string]: string } = {
          'lun': 'lunes',
          'mar': 'martes',
          'mie': 'miércoles',
          'jue': 'jueves',
          'vie': 'viernes',
          'sab': 'sábados',
          'dom': 'domingos'
        };
        return `Lo recibes todos los ${dayNamesAdmin[initialFrequency.selectedDay] || 'días'}`;
      } else if (initialFrequency.type === "15-dias") {
        return "Lo recibes los días 1 y 15";
      }
    }
    
    return "Lo recibes todos los lunes"; // Fallback padrão
  };

  const handleConfirm = (frequencyType: string, selectedDay?: string) => {
    // Mapear o tipo de frequência para o texto do feedback e do card Admin
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
    
    setFeedbackText(feedbackFrequencyText);
    setAdminText(adminCardText);
    setFrequencyType(frequencyType);
    setSelectedDay(selectedDay);
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    // Chamar onComplete passando o texto do card Admin, tipo de frequência e dia selecionado
    onComplete?.(adminText, frequencyType, selectedDay);
  };

  const handleReactivar = (frequencyType: string, selectedDay?: string) => {
    // Quando reativar, criar o adminText baseado nos dados recebidos
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

  if (showFeedback) {
    return (
      <FeedbackScreen
        onCloseClick={handleCloseFeedback}
        onIrAlInicioClick={handleCloseFeedback}
        frequencyText={feedbackText}
      />
    );
  }

  return (
    isProgramadoActive ? 
    <Programados
      onIrAlInicioClick={onIrAlInicioClick}
      onConfirmClick={handleConfirm}
      initialFrequency={initialFrequency}
    /> :
    <ProgramadosPausadoScreen
      onBackClick={onIrAlInicioClick}
      onReactivarClick={handleReactivar}
      initialFrequency={initialFrequency}
    />
  );
}