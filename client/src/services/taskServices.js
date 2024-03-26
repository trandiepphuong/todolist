import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl)

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
