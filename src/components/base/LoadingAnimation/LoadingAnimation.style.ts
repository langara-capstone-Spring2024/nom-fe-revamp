import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

const createStyles = (theme: Theme) => StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 'auto',
        // backgroundColor: 'pink',
        height: '100%'
      },
    
      animation: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
      },
    
    });

export default createStyles;
