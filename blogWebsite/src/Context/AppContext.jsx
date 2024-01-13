import {createContext, useState} from "react"
import {baseUrl} from "../Baseurl"

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setloading]=useState(true);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalpages,settotalpages]=useState(null);

    async function fetchBlogData(page,tag=0,category=0){
        setloading(true);
        let url=`${baseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            setpage(data.page);
            setposts(data.posts);
            settotalpages(data.totalPages);
        }
        catch(error){
            alert("404 Error");
            setpage(1);
            setposts([]);
            settotalpages(null);
        }
        setloading(false);
    }
    const value={
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchBlogData,
        handlePageChange,
    };
    function handlePageChange(page){
        setpage(page);
        fetchBlogData(page);
    }

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}