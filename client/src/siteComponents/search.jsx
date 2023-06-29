import {getPosts} from "../api/axios";
import {useState, useEffect} from "react";

const Search = () => {
    const [posts, setPosts]=useState([]);
    const [searchResults, setSearchResults]=useState([])

    useEffect(()=>{
        getPosts().then(json=>{
            setPosts(json)
            return json
        }).then(json=>{
            setSearchResults(json)
        })
    })
    console.log(posts);
    const handleChange=()=>{

    }
  return (
    <div>search</div>
  )
}

export default Search