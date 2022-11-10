import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - My Panorama`;
    }, [title])
};

export default useTitle;