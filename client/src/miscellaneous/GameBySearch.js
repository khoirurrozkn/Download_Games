import React from 'react'

const GameBySearch = ({data}) => {
  return (
    <>
      {data.map((value) => {
        <div>{value.game_name}</div>
      })}
    </>
  )
}

export default GameBySearch