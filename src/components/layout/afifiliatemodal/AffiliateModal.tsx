import { X, ChevronLeft } from "lucide-react";
import StepOneContent from "./StepOneContent";
import StepTwoContent from "./StepTwoContent";
import StepThreeContent from "./StepThreeContent";

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  onNext: () => void;
  onBack?: () => void;
}

const AffiliateModal = ({
  isOpen,
  onClose,
  currentStep,
  onNext,
  onBack,
}: AffiliateModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-end justify-center z-[9999] animate-fade-in">
      <div className="bg-gray-900 w-full rounded-t-[32px] max-h-[90vh] animate-slide-up overflow-y-auto border-t border-x border-green-800 shadow-lg shadow-green-900/30">
        <div className="sticky top-0 bg-gray-900 rounded-t-[32px] z-10 shadow-sm">
          <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto my-4" />
          <div className="px-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-gray-800 rounded-full text-gray-400"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-green-500">
                    STEP {currentStep}/4
                  </span>
                  <div className="w-16 h-1 rounded-full bg-gray-700">
                    <div
                      className={`w-${currentStep}/4 h-full rounded-full bg-green-600`}
                    />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-100 mt-1">
                  {currentStep === 1
                    ? "Bisnis Nyata"
                    : currentStep === 2
                      ? "Keuntungan Eksklusif"
                      : "Pendaftaran Mitra"}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full text-gray-400"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {currentStep === 1 && (
          <StepOneContent onNext={onNext} onClose={onClose} />
        )}
        {currentStep === 2 && (
          <StepTwoContent onNext={onNext} onClose={onClose} />
        )}
        {currentStep === 3 && (
          <StepThreeContent onNext={onNext} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default AffiliateModal;
