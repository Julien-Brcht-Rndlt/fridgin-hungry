import React, { useEffect } from 'react'
import { useState } from 'react'
import './AllergiesFilter.css'

const AllergiesFilter = ({ searchUrl, setSearchUrl }) => {

  const initialAllergies = [
    { label: 'Vegetarian', value: 'vegetarian', selected: false },
    { label: 'Vegan', value: 'vegan', selected: false },
    { label: 'Pork-free', value: 'pork-free', selected: false },
    { label: 'Gluten-free', value: 'gluten-free', selected: false },
    { label: 'Sugar-free', value: 'low-sugar', selected: false },
    { label: 'Peanut-free', value: 'peanut-free', selected: false },
  ]

  const [allergies, setAllergies] = useState(initialAllergies)

  const handleClickAllergy = (e) => {

    const allergyValue = e.target.value

    const checkedAllergy = allergies.find(allergy => {
      if (allergy.value === allergyValue) return true
      else return false
    })
    checkedAllergy.selected = !checkedAllergy.selected

    // dynamic refresh of the search url used for the filters.
    let url = searchUrl
    url = url.includes(`&health=${allergyValue}`) ? url.replace(`&health=${allergyValue}`, '') : `${url}&health=${allergyValue}`

    setSearchUrl(url)

    setAllergies([...allergies])
  }

  return (
    <div className='allergyFilter'>
      { allergies.map(allergy => {
        return (
          <div className='allergies'>
            <input type='checkbox'
              name='health'
              value={allergy.value}
              checked={allergy.selected}
              onClick={(e) => handleClickAllergy(e)} />

            <label htmlFor={allergy.value}>
              {allergy.label}
            </label>
          </div>
        )
      })
      }
    </div>
  )
}

export default AllergiesFilter