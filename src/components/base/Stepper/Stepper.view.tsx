import { Body, Row, Spacer, Touchable } from "../../reusables";
import ProgressSteps, {
  Content,
  Title,
} from "@joaosousa/react-native-progress-steps";
import React, { useState } from "react";

import { Text } from "react-native";

const Stepper = () => {
  const orientations = ["vertical", "horizontal"];
  const [currrentStep, setCurrentStep] = useState(0);
  const [orientation, setOrientation] = useState(orientations[0]!);

  const handleNextStep = () => () => {
    setCurrentStep(currrentStep + 1);
  };

  const handlePrevStep = () => () => {
    setCurrentStep(currrentStep - 1);
  };

  const touchableColors = {
    color: "#f4f3ee",
    backgroundColor: "#005f73",
  };

  const steps = [
    {
      title: <Title>Upload Ad Image</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            odio vitae turpis fermentum porttitor sit amet at nisi. Donec
            ultricies ligula quis turpis tempor, sed porta odio feugiat. Duis
            vel auctor ante. Donec in velit in urna imperdiet sollicitudin eget
            nec libero. Nulla faucibus maximus justo, at laoreet nulla elementum
            ut. Cras ac massa in est facilisis commodo vitae ac sem. Quisque id
            tellus at libero dignissim suscipit. Donec sollicitudin turpis nibh,
            nec fringilla tellus egestas nec. Duis interdum felis a enim
            consequat porttitor. Integer luctus quam ipsum, at hendrerit enim
            imperdiet vitae. Pellentesque eleifend felis nec eros maximus, et
            efficitur nisi dignissim. Fusce finibus vulputate posuere. Nulla sit
            amet sem nec diam feugiat hendrerit. Etiam egestas risus sed maximus
            ornare. Ut accumsan nulla ac lacinia volutpat. Aliquam a ultrices
            nisl.
          </Text>
          <Spacer space="10" />
          <Row>
            <Touchable
              label="Next step"
              onPress={handleNextStep()}
              colors={touchableColors}
            />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Select a Template</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            purus eget turpis lobortis venenatis. In dapibus, eros a bibendum
            malesuada, arcu sem lacinia metus, vitae tristique velit purus eget
            elit. Integer tristique ligula sit amet malesuada aliquam.
          </Text>
          <Spacer space="10" />
          <Row>
            <Touchable
              label="Next step"
              onPress={handleNextStep()}
              colors={touchableColors}
            />
            <Spacer orientation="h" space="10" />
            <Touchable
              label="Prev step"
              onPress={handlePrevStep()}
              colors={touchableColors}
            />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Edit Ad Text</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            odio vitae turpis fermentum porttitor sit amet at nisi. Donec
            ultricies ligula quis turpis tempor, sed porta odio feugiat. Duis
            vel auctor ante. Donec in velit in urna imperdiet sollicitudin eget
            nec libero. Nulla faucibus maximus justo, at laoreet nulla elementum
            ut. Cras ac massa in est facilisis commodo vitae ac sem. Quisque id
            tellus at libero dignissim suscipit. Donec sollicitudin turpis nibh,
            nec fringilla tellus egestas nec. Duis interdum felis a enim
            consequat porttitor. Integer luctus quam ipsum, at hendrerit enim
            imperdiet vitae. Pellentesque eleifend felis nec eros maximus, et
            efficitur nisi dignissim. Fusce finibus vulputate posuere. Nulla sit
            amet sem nec diam feugiat hendrerit.
          </Text>
          <Spacer space="10" />
          <Row>
            <Touchable
              label="Next step"
              onPress={handleNextStep()}
              colors={touchableColors}
            />
            <Spacer orientation="h" space="10" />
            <Touchable
              label="Prev step"
              onPress={handlePrevStep()}
              colors={touchableColors}
            />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Confirm & Pay</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            purus eget turpis lobortis venenatis. In dapibus, eros a bibendum
            malesuada, arcu sem lacinia metus, vitae tristique velit purus eget
            elit. Integer tristique ligula sit amet malesuada aliquam. Mauris
            pulvinar sapien semper metus vehicula congue.
          </Text>
          <Spacer space="10" />
          <Row>
            <Touchable
              label="Prev step"
              onPress={handlePrevStep()}
              colors={touchableColors}
            />
            <Spacer orientation="h" space="10" />
          </Row>
        </Content>
      ),
    },
  ];

  return (
    <Body>
      <ProgressSteps
        orientation={"vertical"}
        currentStep={currrentStep}
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
