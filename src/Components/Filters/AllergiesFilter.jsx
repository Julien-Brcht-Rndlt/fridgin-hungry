import React from 'react';
import { useState } from 'react';
import "./AllergiesFilter.css";

const AllergiesFilter = () => {

    const initialAllergies = [
        {label:"Vegetarian", value:"vegetarian", selected:false},
        {label:"Vegan", value:"vegan", selected:false},
        {label: "Pork-free", value: "pork-free", selected: false},
        {label: "Gluten-free", value: "gluten-free", selected: false},
        {label: "Sugar-free", value: "low-sugar", selected: false},
        {label: "Peanut-free", value: "peanut-free", selected: false},
    ] 
    
      const [allergies, setAllergies] = useState(initialAllergies);
    
    
      const handleClickAllergy = (e) => {
        

        const allergyValue = e.target.value;
        console.log(allergyValue);
       
    
        const checkedAllergy = allergies.find(allergy => {
          if(allergy.value === allergyValue) return true;
          else return false;
        });
       
        checkedAllergy.selected = !checkedAllergy.selected;
        // console.log(checkedAllergy);
       
        setAllergies([...allergies])  
      }
    
    
        return (
          <section>
          { allergies.map(allergy => {
            //   console.log(allergy);
              return (
                <div>
                  <input type="checkbox" 
                  name="health" 
                  value={allergy.value} 
                  checked={allergy.selected} 
                  onClick={handleClickAllergy}/> 

                  <label for={allergy.value}>
                      {allergy.label}
                  </label> 

                </div>
              );
            })
          }
          </section>
        );
    };
    
    export default AllergiesFilter;