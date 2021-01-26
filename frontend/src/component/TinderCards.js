import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../axios'

const TinderCards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/card')
      setPeople(req.data)
    }
    fetchData()
  }, [])

  //tinder functions used

  const swiped = (direction, nameToDelete) => {
    console.log('removing ' + nameToDelete)
  }

  const OutOfFrame = (name) => {
    console.log(name + ' Left the screen ')
  }

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((people) => (
          <TinderCard
            className='swipe'
            key={people.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => {
              swiped(dir, people.name)
            }}
            onCardLeftScreen={() => OutOfFrame(people.name)}
          >
            <div
              style={{ backgroundImage: `url(${people.url})` }}
              className='card'
            >
              <h3>{people.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
