// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { LogoutApi } from '../Api'
// import { AppContext } from '../context/AppNotify'
// // import { useNavigate } from 'react-router-dom';
// import { Button } from './ui/button';
// import { redirect } from 'next/navigation';

// const Logout = () => {
//     const { showToast } = AppContext();
//     const queryclient = useQueryClient();
// // const naviagte=useNavigate();
//     const muatteion = useMutation(LogoutApi, {
//         onSuccess: async () => {
//             await queryclient.invalidateQueries("validateToken")
//             showToast({ type: "SUCCESS", message: "Logged Out succesfully" })
//             // await queryclient.invalidateQueries("validateToken")
//             redirect("/login")
//         },
//         onError: (error: Error) => {
//             showToast({ message: error.message, type: "ERROR" });
//           },
//     });
//     const submition = () => {
//         muatteion.mutate()
//     }
//     return (
//         <Button className="bg-red-500 hover:bg-red-300 flex-1 text-white font-bold p-1 rounded" onClick={submition}>Logout</Button>
//     )
// }

// export default Logout