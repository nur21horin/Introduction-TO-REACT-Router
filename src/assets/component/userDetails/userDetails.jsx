// import { useLoaderData } from "react-router-dom";

// const UserDetails=()=>{
//     const user=useLoaderData();
//     const {name}=user;
//     return(
//         <div>
//         <h2>Details About User:{name}</h2>
//         </div>
//     );
// };
// export default UserDetails;
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    // Fallback in case user is undefined
    if (!user) {
        return <h2>No user data available.</h2>;
    }

    const { name } = user;

    return (
        <div>
            <h2>Details About User: {name}</h2>
        </div>
    );
};

export default UserDetails;