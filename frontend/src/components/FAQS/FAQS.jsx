import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const physicsFaqs = [
  {
    id: 1,
    question: "What is Newton's Second Law of Motion?",
    answer: "Newton's Second Law states that force equals mass times acceleration (F = ma), explaining how motion changes due to applied force."
  },
  {
    id: 2,
    question: "What is the Law of Conservation of Energy?",
    answer: "Energy cannot be created or destroyed; it only transforms from one form to another while the total energy remains constant."
  },
  {
    id: 3,
    question: "What is Work-Energy Theorem?",
    answer: "The work done on an object is equal to the change in its kinetic energy, providing a relationship between force and motion."
  },
  {
    id: 4,
    question: "What is the Universal Law of Gravitation?",
    answer: "Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them."
  },
  {
    id: 5,
    question: "What is Simple Harmonic Motion?",
    answer: "It describes oscillatory motion where the restoring force is directly proportional to displacement and acts in the opposite direction."
  },
  {
    id: 6,
    question: "What is the First Law of Thermodynamics?",
    answer: "It states that the total energy of an isolated system remains constant, meaning energy can change forms but is neither created nor destroyed."
  },
  {
    id: 7,
    question: "What is Bernoulli's Principle?",
    answer: "It states that an increase in a fluid’s speed results in a decrease in its pressure or potential energy."
  },
  {
    id: 8,
    question: "What is Ohm’s Law?",
    answer: "It states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance (V = IR)."
  },
  {
    id: 9,
    question: "What is Kirchhoff’s Voltage Law?",
    answer: "The sum of all voltages around a closed loop in a circuit equals zero, ensuring energy conservation."
  },
  {
    id: 10,
    question: "What is Lenz’s Law?",
    answer: "It states that the direction of an induced current opposes the change in magnetic flux that caused it, following the principle of conservation of energy."
  },
  {
    id: 11,
    question: "What is the Doppler Effect?",
    answer: "It explains the change in frequency or wavelength of a wave in relation to an observer moving relative to the wave source."
  },
  {
    id: 12,
    question: "What is Snell’s Law?",
    answer: "It describes the relationship between angles of incidence and refraction for a wave passing through different mediums."
  },
  {
    id: 13,
    question: "What is the Photoelectric Effect?",
    answer: "It is the emission of electrons from a metal surface when light of a suitable frequency shines on it, demonstrating the particle nature of light."
  },
  {
    id: 14,
    question: "What is Bohr’s Model of the Atom?",
    answer: "It describes electrons revolving in fixed orbits around the nucleus with quantized energy levels, explaining atomic spectra."
  }
];

// console.log(physicsFaqs);


const FAQS = () => {
  const [isShow, setisShow] = useState(null);

  const onClickChange = (id) => {
    setisShow(isShow === id ? null : id);
  };
  return (
    <main className="p-5 w-[90%] mx-auto  h-screen">
      <h1 className="font-extrabold text-4xl mb-10">FAQs</h1>
      {/* container */}
      <div className="flex flex-wrap gap-10  justify-items-start ">
        {/* faqs */}

        {physicsFaqs.map((items) => (
          <div
            key={items.id}
            className="  p-1 w-[48%] cursor-pointer "
            onClick={() => onClickChange(items.id)}
          >
            <p
              className={`inline font-bold text-lg mr-3 align-middle ${
                isShow === items.id ? "text-orange-400" : ""
              }`}
            >
              {items.question}
            </p>
            {isShow === items.id ? (
              <FaAngleDown className="inline cursor-pointer" />
            ) : (
              <FaAngleUp className="inline cursor-pointer" />
            )}

            <div
              className={` overflow-hidden transition-all duration-1000 ease-in ${
                isShow === items.id
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-light tracking-tight mt-2">{items.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQS;
