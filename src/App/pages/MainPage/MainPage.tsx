import React, { ChangeEvent } from "react";

import { Input } from "@components/Input";
import SearchIcon from "@components/SearchIcon/SearchIcon";

const MainPage = () => {
  const [value, setValue] = React.useState<any>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input value={value} placeholder={"test"} onChange={handleChange} />
      <SearchIcon />
    </>
  );
};

export default MainPage;
