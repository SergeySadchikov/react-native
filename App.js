import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { NavBar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', title: 1},
    {id: '2', title: 2},
    {id: '3', title: 2},
    {id: '4', title: 2},
    {id: '5', title: 2},
    {id: '6', title: 2},
    {id: '7', title: 2},
    {id: '8', title: 2},
    {id: '9', title: 2},
    {id: '10', title: 'last'},
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title
    }
    setTodos((prev) => [...prev, newTodo])
  }

  return (
    <View style={{flex:1}}>
      <NavBar title="T O D O"></NavBar>

      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <ScrollView style={styles.list}>
          { todos.map(todo => <Todo todo={todo} key={todo.id}/>) }
        </ScrollView>
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
