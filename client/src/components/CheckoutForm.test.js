import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
  //Render the Form
    render(<CheckoutForm />)
  //Get the inputs
   const firstNameI = screen.findByLabelText(/firstname/i)

   const lastNameI = screen.findByLabelText(/lastname:/i) 

   const addressI = screen.findByLabelText(/address:/i) 

   const cityI = screen.findByLabelText(/city:/i) 

   const stateI = screen.findByLabelText(/state:/i) 

   const zipI = screen.findByLabelText(/zip:/i) 

  //put things in the input

    fireEvent.change(firstNameI, {target: {value: 'John'}})

});
