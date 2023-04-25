import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5118";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status) {
      console.log('error',error)
    }
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`items/${name}`)    
    return result.data;
  },

  setCompleted: async(id,name, isComplete)=>{
    console.log('setComplete', {id, isComplete})
    const result = await axios.put(`items/${id}`,{"id":id,"name":name,"isComplete":isComplete})    
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('dalete', id)
    const result = await axios.delete(`items/${id}`)    
    return result.data;
  }
};
