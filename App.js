import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { NavBar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id))
  }

  return (
    <View style={{flex:1}}>
      <NavBar title="T O D O"></NavBar>

      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
          keyExtractor={item => item.id}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  list: {
    // flex: 1
  }
});
