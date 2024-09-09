import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';


type Props = {
    task: { name: string, completed: boolean };
    onComplete: () => void;
    onRemove: () => void;
}

export function Task({ task, onComplete, onRemove }: Props) {
    const icon = task.completed
        ? require('../../../assets/checked.png')
        : require('../../../assets/vector1.png');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onComplete}>
                <Image
                    source={icon}
                />
            </TouchableOpacity>
            <Text style={[styles.textTask, task.completed && styles.taskCompleted]}>
                {task.name}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <Image
                    source={require('../../../assets/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}