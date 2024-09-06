import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topSection: {
      backgroundColor: '#0D0D0D',
      height: 175,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainSection: {
      backgroundColor: '#1A1A1A',
      flex: 1,
      alignItems: 'center',
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: -25,
      justifyContent: 'center'
    },
    inputText: {
      backgroundColor: '#262626',
      fontSize: 16,
      width: 271,
      height: 54,
      borderRadius: 6,
      padding: 15,
    },
    button: {
      width: 52,
      height: 52,
      backgroundColor: '#1E6F9F',
      borderRadius: 6,
      marginLeft: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlayImage: {
      position: 'absolute',
    }
  })