import React, { useState } from "react";
import { Form, FormControl} from 'react-bootstrap';

const SearchTitle=({handleSearch})=>{
const [search,setSearch]=useState('')
return(
<div className='search'>
<Form inline>
  <FormControl
   type="text" 
   placeholder="  Search..."
   value={search}
   onChange={(e)=>setSearch(e.target.value)}
   onKeyUp={(e)=> {
    handleSearch(search) 
    } }
    className=" mr-sm-2" /> 
</Form>
</div>

    )
}
export default SearchTitle;
