// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Navigate } from 'react-router-dom';

// const PrivetRoute = ({children}) => {
//     const {user,loading} = useContext(AuthContext)
   
//     if(loading){
//         return <span className="loading loading-spinner text-info"></span>
//     }
   
//     if(!user?.email){
//         return <Navigate to='/login'/>
//     }

//     return children;
// };

// export default PrivetRoute;