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
       
          <form className={s.button1} onSubmit={(e) => handleSubmit(e)}>
            <div>
              
              <input 
              className={s.button2}
                type="text"
                placeholder = "Search game..."
                autoComplete="off"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            
            <button type="submit" className={s.button3}>🔍-🎮</button>
            <button className={s.button3}type="submit">Reset🔂</button>
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
  
