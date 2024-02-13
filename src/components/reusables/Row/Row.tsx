import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './Row.styles';

const Row: React.FC<{children: ReactNode}> = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

export default Row;
