export default function appReducer(state, action) {
    switch(action.type){
      case "ADD_USER":{
        return {
          ...state,
          users: [...state.users, action.payload]
        }}
      case "DELETE_USER":{
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        }}
      case "UPDATE_USER":{
        const updatedTasks = state.users.map((task) => {
          if (task.id === action.payload) {
            if(task.status === true){
              return {...task, status : false}
            }else {
              return {...task, status : true}
            }
          }
          return task;
        });
        return {
          ...state,
          users: updatedTasks,
        };
      }
      // case "UPDATE":{
      //   const updateuser = action.payload;

      //   const updateusers = Array.isArray(state.tasks)&& state.tasks.map((user) => {
      //       if (user.id === updateuser.id){
      //           updateuser.done = user.done;
      //           return updateuser;
      //       }
      //       return user;
      //   });
      //   return{
      //       ...state,
      //       users: updateusers
      //   };
      // }
      case "UPDATE":
        const updatedUsers = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              name: action.payload.name,
              carrera: action.payload.carrera
            };
          }
          return user;
        });
        return {
          ...state,
          users: updatedUsers}
    default:
      return state;
    }
  }