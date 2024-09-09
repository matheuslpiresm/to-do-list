import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    textTask: {
        width: 235,
        textAlign: 'center',
        color: '#FFF',
    },
    taskCompleted: {
        textDecorationLine: 'line-through',
        color: '#888'
    }
});