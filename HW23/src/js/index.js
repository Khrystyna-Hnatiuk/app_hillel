
const createTask = async (newTask) => {
  try {
    const response = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Task created:', data);
    } else {
      console.log(data.message);  
    }
  } catch (er) {
    console.log(er);
  }
};

const readTask = async () => {
  try {
    const response = await fetch('http://localhost:3001/todos', {
      method: 'GET',

    });
    const data = await response.json();

  }
  catch (er) {
    console.log(er)
  }
}

const updateTask = async (id, updatedTask) => {
  try {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)

    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
  }
  catch (er) {
    console.log(er)

  }
}

const deleteTask = async (task) => {
  try {

    const response = await fetch(`http://localhost:3001/todos/${task}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`Failed to delete task  ${task}`);
    }

    const data = await response.json()
  }
  catch (er) {
    console.log(er)
  }

 
}

// createTask({title:'update', decription:'',dueDate:'19.07.25',completed:true})
createTask({title:'delete', decription:'',dueDate:'19.07.25',completed:true})





