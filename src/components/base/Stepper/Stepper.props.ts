export interface StepperProps {
  currentStep: number;
  steps: Step[];
}

interface Step {
  title: JSX.Element;
  content: JSX.Element;
}
