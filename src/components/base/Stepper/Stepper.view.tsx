import { Body } from "../../reusables";
import ProgressSteps from "@joaosousa/react-native-progress-steps";
import React from "react";

import { StepperProps } from "./Stepper.props";

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <Body>
      <ProgressSteps
        orientation={"vertical"}
        currentStep={currentStep}
        steps={steps}
        colors={{
          title: {
            text: {
              normal: "#bcbcbc",
              active: "#9563FF",
              completed: "#9563FF",
            },
          },
          marker: {
            text: {
              normal: "#bcbcbc",
              active: "#9563FF",
              completed: "#f4f3ee",
            },
            line: {
              normal: "#bcbcbc",
              active: "#9563FF",
              completed: "#9563FF",
            },
          },
        }}
      />
    </Body>
  );
};

export default Stepper;
