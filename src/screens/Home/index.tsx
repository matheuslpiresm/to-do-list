import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Task } from '../../components/Task';
import { styles } from './styles';

export default function Home() {
  const [tasks, setTasks] = useState<{ name: string, completed: boolean }[]>([]);
  const [taskName, setTaskName] = useState('');
  const [createdCount, setCreatedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    setCompletedCount(completedTasks);
  }, [tasks]);

  function handleTaskAdd() {
    if (!taskName.trim()) {
      return Alert.alert('Tarefa inválida', 'Por favor digite uma tarefa');
    }

    if (tasks.some(task => task.name.trim().toLowerCase() === taskName.trim().toLowerCase())) {
      Alert.alert('Tarefa já existe', 'Já existe uma tarefa idêntica criada');
      setTaskName('');
      return
    }

    const newTask = { name: taskName, completed: false };

    setTasks(prevState => [...prevState, newTask]);
    setCreatedCount(prevCount => prevCount + 1);
    setTaskName('');
  }

  function handleTaskComplete(taskName: string) {
    setTasks(prevState =>
      prevState.map(task =>
        task.name === taskName ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleTaskRemove(taskName: string) {
    Alert.alert('Remover', `Deseja remover a tarefa '${taskName}' ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.name !== taskName));
          setCreatedCount(prevCount => prevCount - 1);
          Alert.alert('Tarefa deletada com sucesso!');
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../../assets/logo.png')} />
      </View>

      <View style={styles.mainSection}>
        <View style={styles.form}>
          <TextInput
            style={styles.inputText}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            onChangeText={setTaskName}
            value={taskName}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image style={styles.overlayImage}
              source={require('../../../assets/vector2.png')}
            />
            <Image
              source={require('../../../assets/vector1.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.countersSection}>
          <Text style={styles.counterCreated}>Criadas</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counterNumber}>
              {createdCount}
            </Text>
          </View>

          <Text style={styles.counterCompleted}>Concluídas</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counterNumber}>
              {completedCount}
            </Text>
          </View>
        </View>

        <FlatList
          style={styles.listSection}
          data={tasks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              task={item}
              onComplete={() => handleTaskComplete(item.name)}
              onRemove={() => handleTaskRemove(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyMessageSection}>
              <Image
                source={require('../../../assets/clipboard.png')}
              />
              <Text style={styles.emptyMessage}>
                Você ainda não tem tarefas cadastradas{'\n'}
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
