"use client";

import Select from "react-select";

export default function TestSelect() {
  const options = [{ value: 123, label: `test` }];

  return (
    <Select options={options} />
  )
}