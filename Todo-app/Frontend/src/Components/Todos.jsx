import React, { useState } from 'react'
import styled from 'styled-components'

const Todos = ({ todos }) => {
  const [todolist, settodollist] = useState(todos)

  const toggeler = (index) => {
    const updatedtodo = [...todolist]
    updatedtodo[index].completed = !updatedtodo[index].completed
    settodollist(updatedtodo)
  }

  return (
    <Container>
      {todolist.map((todo, index) => (
        <TodoCard key={index} completed={todo.completed}>
          <SectionHeading>Title</SectionHeading>
          <Text>{todo.title}</Text>

          <SectionHeading>Description</SectionHeading>
          <Text>{todo.description}</Text>

          <ActionButton onClick={() => toggeler(index)} completed={todo.completed}>
            {todo.completed ? 'Completed' : 'Mark as completed'}
          </ActionButton>
        </TodoCard>
      ))}
    </Container>
  )
}

export default Todos

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TodoCard = styled.div`
  padding: 16px;
  border: 2px solid ${({ completed }) => (completed ? '#28a745' : '#ccc')};
  border-radius: 12px;
  background-color: ${({ completed }) => (completed ? '#eaffea' : '#f9f9f9')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`

const SectionHeading = styled.h4`
  margin: 10px 0 4px;
  color: #007bff;
  font-size: 16px;
`

const Text = styled.p`
  margin: 0 0 10px;
  font-size: 15px;
  color: #333;
`

const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: ${({ completed }) => (completed ? 'gray' : '#007bff')};
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ completed }) =>
      completed ? 'gray' : '#0056b3'};
  }
`
