import React, { useState } from 'react';
import styled from 'styled-components';

const Todoinfo = () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const handleSubmit = () => {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async (res) => {
            if (res.ok) {
                const json = await res.json();
                alert("Todo added");
            } else {
                throw new Error("Failed to add todo");
            }
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
    };

    return (
        <Maindiv>
            <div>
                <label>Title</label>
                <input type="text" placeholder='Enter the title of the todo' onChange={(e) => settitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" placeholder='Enter the Description of the todo' onChange={(e) => setdescription(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Add a todo</button>
        </Maindiv>
    );
}

export default Todoinfo;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;

  label {
    color: #007bff;
    font-size: 18px;
    margin-bottom: 6px;
  }

  input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 80px;
    height: 30px;
    border-radius: 9px;
    border: 1px solid black;
    margin: auto;
  }
`;
