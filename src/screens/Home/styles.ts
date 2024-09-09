import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topSection: {
    backgroundColor: '#0D0D0D',
    height: 173,
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
    color: '#FFF',
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
  },
  countersSection: {
    flexDirection: 'row',
    width: 327,
    height: 19,
    marginTop: 30
  },
  counterCreated: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
    marginRight: 10
  },
  counterCompleted: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
    marginRight: 10

  },
  counterBox: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 135
  },
  counterNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF'
  },
  listSection:{
    marginTop: 20
  },
  emptyMessageSection: {
    alignItems: 'center',
    marginTop: 48
  },
  emptyMessage: {
    color: '#808080',
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 20
  }
})