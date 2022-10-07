import React, { useMemo, useState } from "react";
import Select from "react-select";
const OriginInputbox = () => {
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
      minHeight: "4rem",
      backgroundColor: isDisabled ? "#F5F5F5" : "hsl(0 0% 100%)",
      borderColor: " hsl(0 0% 100%)",
      boxShadow: "none",
      ":hover": {
        ...style[":hover"],
        backgroundColor: "hsl(0 0% 100%)",
        borderColor: "hsl(0 0% 100%)",
      },
      
    }),
    indicatorsContainer: (style) => ({ ...style, display: "none" }),
    placeholder: (style) => ({
      ...style,
      top: "50%",
      marginLeft: 1,
      color: "#666666",
      paddingTop: 30,
      fontWeight: 500,
      width: 300,
      
      
    }),

    input: (style) => ({
      ...style,
      paddingBottom: 0,
      paddingTop: 30,
      paddingLeft: 5,
      ":active": {
        ...style[":active"],
        backgroundColor: "hsl(0 0% 100%)",
        borderColor: "hsl(0 0% 100%)",
      },
    }),
    menu: (style) => ({
      ...style,
      padding: 4,
      paddingBottom: 2,
      zIndex: 1000,
      marginTop: 4,
      boxShadow: "0 0 8px 3px rgba(0,0,0,0.09)",
     
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
    <div className="relative md:mr-4 mb-4 md:mb-0 md:w-[100%] react-select">
      <Select
        placeholder="Type stop name/city or airport name"
        styles={styles}
        options={options}
        value={locData}
        onChange={handleChange}
      />
    </div>
  );
};

export default OriginInputbox;
