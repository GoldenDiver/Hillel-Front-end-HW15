import axios from "axios";
import { API_URL } from "../constants";

export function getItem(id) {
  if (id === undefined) {
    return axios.get(API_URL).then((resp) => resp.data);
  } else {
    return axios.get(API_URL + "/" + id).then((resp) => resp.data);
  }
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
