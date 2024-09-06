import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {
    return (
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Image
            source={require('../../../assets/logo.png')}/>
          </View>
    
          <View style={styles.mainSection}>
            <View style={styles.form}>
              <TextInput  style={styles.inputText}
              placeholder='Adicione uma nova tarefa'
              placeholderTextColor='#808080'
              />

              <TouchableOpacity style={styles.button}>
                <Image style={styles.overlayImage}
                  source={require('../../../assets/vector2.png')}
                />

                <Image
                  source={require('../../../assets/vector1.png')}
                 />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
}