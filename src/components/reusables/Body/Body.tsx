import { ScrollView, View } from 'react-native';

import React, { ReactNode} from 'react';
import styles from './Body.styles';

const Body: React.FC<{children: ReactNode}>  = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default Body;
