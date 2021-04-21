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
        
        // 1. get the value of the checked allergy 
        const allergyValue = e.target.value;
        console.log(allergyValue);
       
    
        // 2. find the corrensponding object in the array. find => returns the right object 
        const checkedAllergy = allergies.find(allergy => {
          if(allergy.value === allergyValue) return true;
          else return false;
        });
        // 3. toggle selected value (false to true and vice versa)
        checkedAllergy.selected = !checkedAllergy.selected;
        console.log(checkedAllergy);
        // 4. set the new state (for the UI)
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
                  onClick={handleClickAllergy}/> {/* check out what the allergy console.log returns */}

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