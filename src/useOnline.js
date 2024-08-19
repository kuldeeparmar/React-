import React,{useState,useEffect} from 'react'

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(false);

    useEffect(() => {
        setTimeout(()  =>  setIsOnline(true),3000);
    })

    return isOnline;
}

export default useOnline;