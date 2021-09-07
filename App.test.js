import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header"
import EmojiResults from "./EmojiResults"
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { doc } from "prettier";
import userEvent from '@testing-library/user-event'

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});
test("renders header without crashing", () => {
  const div = document.createElement("div");
  render(<Header/>,div)
});
test("renders list without crashing", () => {
  const { getByText } = render(<App/>)
  expect(getByText(/100/i , /Cop/i , /Clock1/i)).toBeInTheDocument();
});
test("change on Input" , () => {
   const { getAllByText } = render(<App/>)
   const inputToSearch = "100";
   const input = screen.getAllByPlaceholderText("Search emoji by name")
   userEvent.type(input[0], inputToSearch);
   render(<App/>)
   expect(getAllByText(/100/i)[0]).toBeInTheDocument();
 })