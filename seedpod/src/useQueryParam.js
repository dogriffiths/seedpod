import {useLocation} from "react-router-dom";

const useQueryParam = (param) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(param);
};

export default useQueryParam;

