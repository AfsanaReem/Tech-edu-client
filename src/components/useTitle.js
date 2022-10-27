import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tech-edu`;
    }, [title])
};

export default useTitle;