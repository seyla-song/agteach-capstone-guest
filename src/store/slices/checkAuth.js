import { useIsLoginQuery } from "../../services/api/authSlice";


export default function IsError() {
    const { isError } = useIsLoginQuery();
    return isError ;
}