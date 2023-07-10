import {set} from '../store/store';
const BASE_URL = 'http://0.0.0.0:3000/expenses'; // Replace with your API url

export function getItems() {
  return fetch(`${BASE_URL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .catch(error => set("error", error))
}

export function createItem(data) {
  return fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

export function updateItem(endpoint, data) {
  return fetch(`${BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

export function deleteItem(endpoint) {
  return fetch(`${BASE_URL}/${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json());
}
