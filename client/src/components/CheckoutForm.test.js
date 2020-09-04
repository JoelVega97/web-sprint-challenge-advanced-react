import React from "react";
import { render, getByLabelText, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    screen.findByRole('textbox', {
        name: /first name:/i
      })

    screen.findByRole('textbox', {
        name: /last name:/i
    })

    screen.findByRole('textbox', {
        name: /address:/i
    })

    screen.findByRole('textbox', {
        name: /city:/i
    })

    screen.findByRole('textbox', {
        name: /state:/i
    })

    screen.findByRole('textbox', {
        name: /zip:/i
    })


});
