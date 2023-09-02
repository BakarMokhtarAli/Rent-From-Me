import React from 'react'
import { Accordian } from './Accordian'

export const Faqs = () => {

  const faqs = [
    {
      "id": 1,
      "question": "Why should I use Rent From Me?",
      "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
    },
    {
      "id": 2,
      "question": "Can I access my Rents on mobile?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
    },
    {
      "id": 3,
      "question": "Do you offer refunds?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    },
    {
      "id": 4,
      "question": "Do you support Internation payments?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    }
];

  return (
    <div className="w-3/4 m-auto">
      {faqs.map(faq =>(
        <Accordian key={faq.id} faq={faq} />
      ))}
    </div>
  )
}
