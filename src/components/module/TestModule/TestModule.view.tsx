import { View, Text } from "react-native";
import { TestModuleProps } from './TestModule.props';
import styles from './TestModule.style';

const TestModule = (props: TestModuleProps) => {
  return (
    <View>
      <Text> TestModule</Text>
    </View>
  );
};

export default TestModule;
