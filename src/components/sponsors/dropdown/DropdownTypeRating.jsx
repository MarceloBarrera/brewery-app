import React from "react";
// import "./DropdownYears.css";

// TODO: This need to be converted to a "Controlled Component" (SplitButton or something) and reset when "Reload data" is clicked.
const DropdownTypeRating = ({ onChangeDropdown }) => {
  const options = [
    "All",
    "Temporary Worker (A (Premium))",
    "Temporary Worker (A (SME+))",
    "Temporary Worker (A rating)",
    "Worker (A (Premium))",
    "Worker (A (SME+))",
    "Worker (A rating)",
    "Worker (Probationary Sponsor)",
  ];

  return (
    <>
      <label for="select-type-rating">Choose a type:</label>
      <select
        id="select-type-rating"
        onChange={(e) => onChangeDropdown(e.target.value)}
      >
        {options.map((v) => (
          <option value={v} key={v}>
            {v}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownTypeRating;
