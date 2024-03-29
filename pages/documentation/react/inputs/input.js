import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import InputCode from "components/Documentation/JavaScript/React/Inputs/InputCode";
import InputIconCode from "components/Documentation/JavaScript/React/Inputs/InputIconCode";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import FieldArea from "components/Textarea/FieldArea";
import Switch from "components/Switch/Switch";

export default function Inputs() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Inputs" />
      <Navbar />
      <Container>
        <Heading
          title="React Inputs"
          description="Easily create inputs with different status and sizes using Material Tailwind inputs"
        />
        <SmallHeading title="Input" />
        <Input type="text" placeholder="Input" />
        <br />
        <Select
          options={[
            { label: 'Lavash', value: 1 },
            { label: 'Burger', value: 2 },
            { label: 'Pitsa', value: 3 },
          ]}
        />
        <br />
        <FieldArea />
        <br />
        <Switch />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Small Input" />
        <Input
          placeholder="Small Input"
          size="small"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Large Input" />
        <Input
          placeholder="Large Input"
          size="large"
        />
      </Container>
    </>
  );
}
