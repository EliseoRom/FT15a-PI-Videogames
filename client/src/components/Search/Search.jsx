import React, {  useState } from "react";
import { connect } from "react-redux";
import { searchByName } from "../../actions/actions";
import s from "./Search.module.css"

function Search(props){
 const [input, setInput] = useState({name:""});

  function handleChange(e){
     
     setInput({name: e.target.value})
  }
   function handleSubmit(e) { 
      e.preventDefault();
      // lo que tengo en mi estado local le llega mi actions va a llamar al back 
      props.searchByName(input.name);
      setInput({name:""});
    }
      return (
        <div>
       
          <form className={s.buttonSearch} onSubmit={(e) => handleSubmit(e)}>
            <div>
              
              <input 
                type="text"
                placeholder = "Search game..."
                autoComplete="off"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            
            <button type="submit">🔍</button>
            <button className={s.button}type="submit">Reset🔂</button>
            </div>
          </form>
         
        </div>
      );
     }
  
  function mapStateToProps(state){
    return{
      videogames: state.videogames
    }
  }
  function mapDispatchToProps(dispatch){
  
    return {
      searchByName: name => dispatch(searchByName(name)),
      
    }
  }
   export default connect(mapStateToProps, mapDispatchToProps)(Search);
  
