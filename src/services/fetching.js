import axios from "axios";
import { API_URL } from "../constants";

export function getItems() {
    return axios.get(API_URL).then((resp) => resp.data);
}

export function createItem(item) {
  return axios.post(API_URL, item)
}

export function updateItem(item) {
  return axios.put(API_URL + '/' + item.id, item)
}

export function deleteItem(id) {
  return axios.delete(API_URL + '/' + id)
}
