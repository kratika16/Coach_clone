import React, { useMemo, useState } from "react";
import Select from "react-select";

const DestinationInputBox = () => {
  const [locData, setLocData] = useState("");
  const options = [
    {
      label: "Popular Stops",
      isDisabled: true,
      value: "Popular Stops",
    },
    {
      label: "Port Authority Bus Terminal- New York, NY",
      value: "Port Authority Bus Terminal- New York, NY",
    },
    {
      label: "O'Hare International Airport - Chicago O'Hare Airport, IL",
      value: "O'Hare International Airport - Chicago O'Hare Airport, IL",
    },
    {
      label: "Newark Liberty Airport - Newark Liberty Airport, NJ",
      value: "Newark Liberty Airport - Newark Liberty Airport, NJ",
    },
  ];

  const handleChange = (abc) => {
    setLocData(abc);
  };
  const styles = useMemo(() => ({
    control: (style, { isDisabled }) => ({
      ...style,
      minHeight: "2rem",
      backgroundColor: isDisabled ? "rgb(224 242 254)" : "hsl(0 0% 100%)",
      borderColor: " rgb(224 242 254)",
      boxShadow: "none",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "rgb(224 242 254)",
        borderColor: "rgb(224 242 254)",
      },
      
    }),
    indicatorsContainer: (style) => ({ ...style, display: "none" }),
    placeholder: (style) => ({
      ...style,
      top: "50%",
      marginLeft: 1,
      color: "#666666",
      paddingTop: 5,
      fontWeight: 500,
      width: 300,
      
      
    }),

    input: (style) => ({
      ...style,
      paddingBottom: 0,
      paddingTop: 5,
      paddingLeft: 5,
      ":active": {
        ...style[":active"],
        backgroundColor: "rgb(224 242 254)",
        borderColor: "rgb(224 242 254)",
      },
    }),
    
    option: (style, { isSelected }) => ({
      ...style,
      backgroundColor: isSelected ? "#E9F5FE" : null,

      borderColor: "hsl(0 0% 100%)",
      color: "#001F30",
      fontWeight: 500,
      cursor: "pointer",
      padding: "8px 4px",
      ":active": {
        ...style[":active"],
        backgroundColor: isSelected ? "#E9F5FE" : null,
        borderColor: "hsl(0 0% 100%)",
      },
      ":hover": {
        ...style[":hover"],
        backgroundColor: "#F5F5F5",
        borderColor: "hsl(0 0% 100%)",
      },
    }),
  }));
  return (
    <div className=" md:w-[97%]  rounded bg-sky100 z-1">
      <div className="text-lg text-boxblue font-bold pl-2 pt-2 ">Destination</div>
      <Select
        placeholder="Type stop name/city or airport name"
        isDisabled= 'true'
        styles={styles}
        options={options}
        value={locData}
        onChange={handleChange}
      />
    </div>
  );
};

export default DestinationInputBox;
