// import { useQuery } from "@tanstack/react-query"
// import Axios  from "axios"
// export const Mum=()=>{
//     const {data , isLoading , isError} = useQuery(["cat"], () => {
//         return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
//     })
//     // const {username} = useContext(AppContext)
//     if ( isError ) {
//         return <h1 >Error Occured!!</h1>
//     }
//     if ( isLoading ){
//         return <h1>Loading Please....</h1>
//     }
//     return <h1>hello  <p   >{data?.fact}</p></h1>
// }

