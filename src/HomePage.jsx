import React,{useState} from 'react'

export default function HomePage(props) {
   



    return (
        <div>
              {
                  props.data.map((item) =>{
                      return <div key={item.id}>{item.name}</div>
                  })
              }
        </div>
    )
}
