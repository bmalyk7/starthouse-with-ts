import axios from "axios";

export default class PostService {
  static async getAll() {
    const response = await axios('https://jsonplaceholder.typicode.com/posts')
    return response
  }
  static async getById(id: string) {
    const response = await axios('https://jsonplaceholder.typicode.com/posts/' + id)
    return response
  }
  static async getCommentsById(id: string) {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response
  }
}