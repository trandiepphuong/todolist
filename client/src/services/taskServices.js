import axios from "axios";
const apiUrl = 'http://localhost:8080/api/tasks';

export async function getTasks() {
    console.log('get')
    const tasks = await axios.get(apiUrl);
    console.log(tasks)
    return tasks
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
