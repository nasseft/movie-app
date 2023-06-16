import React,{useState} from "react";

const Filter=({onFilter})=>{
    const[title,setTitle]=useState('');
    const [rating,setRating]=useState('');

    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
        onFilter({title:e.target.value,rating});
    };
    const handleRatingChange=(e)=>{
        setRating(e.target.value);
        onFilter({title,rating:e.target.value});
    };
    return(
        <div className="filter">
            <input
            type="text"
            placeholder="Filter by title"
            value={title}
            onChange={handleTitleChange}
            />
            <input
            type="number"
            min="1"
            max="10"
            placeholder="Filter by rating"
            value={rating}
            onClick={handleRatingChange}
            />
        </div>
    );
};
export default Filter;