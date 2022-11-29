import React, { forwardRef, memo, useCallback } from "react";
import Select, { components as ReactSelectComponent } from "react-select";
import { isEmpty, isFunction } from "lodash";

const SelectWithFloatLabel = memo(
  forwardRef(
    (
      {
        labelText,
        inputId,
        styles = {},
        isInvalid = false,
        labelFontSize = "text-base",
        optionsMinWidth= "250",
        components = {},
        autoComplete = "off",
        ...props
      },
      ref
    ) => {
      const defaultStyles = useCallback(
        ({
          control: ctrl,
          menu: mnu,
          indicatorSeparator: ics,
          container: ctr,
          singleValue: sv,
          ...remainingProps
        }) => ({
          control: (style, state) => {
            const ds = {
              ...style,
              minHeight: "56px",
              paddingLeft: ".3rem",
              borderColor: isInvalid ? "#BF1111" : "#CED4DA",
              backgroundColor: state.isDisabled && "#E9ECEF",
              paddingTop:
                (state.hasValue || !isEmpty(state.selectProps.inputValue)) &&
                16,
              
              ":focus-within": {
                ...style[":focus-within"],
                paddingTop: 16,
              },
            };
            return isFunction(ctrl) ? ctrl(ds, state) : ds;
          },
          singleValue: (style, state) => {
            const ds = {
              ...style,
              color: '#495057',
              
            };
            return isFunction(sv) ? sv(ds, state) : ds;
          },
          menu: (style, state) => {
            const ds = {
                backgroundColor:'#CED4DA',
              ...style,
              zIndex: 90,
            };
            return isFunction(mnu) ? mnu(ds, state) : ds;
          },
          indicatorSeparator: (style, state) => {
            const ds = {
              ...style,
              display: "none",
            };
            return isFunction(ics) ? ics(ds, state) : ds;
          },
          container: (style, state) => {
            const ds = {
              ...style,
              "~ label": {
                color:
                  (state.hasValue || !isEmpty(state.selectProps.inputValue)) &&
                  "rgb(107 114 128)",
                transform:
                  (state.hasValue || !isEmpty(state.selectProps.inputValue)) &&
                  "translateX(0) translateY(-1rem) rotate(0) skewX(0) skewY(0) scaleX(.75) scaleY(.75)",
              },
              ":focus-within ~ label": {
                color: "rgb(107 114 128)",
                transform:
                  "translateX(0) translateY(-1rem) rotate(0) skewX(0) skewY(0) scaleX(.75) scaleY(.75)",
              },
            };
            return isFunction(ctr) ? ctr(ds, state) : ds;
          },

          ...remainingProps,
        })
      );

      return (
        <div
          component-name="select-with-float-label"
          className="relative react-select input-with-float-label"
        >
          <Select
            inputId={inputId}
            placeholder=" "
            components={{ ...components }}
            styles={defaultStyles(styles)}
            ref={ref}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={`absolute text-gray-500 ${labelFontSize} top-0 mt-4 ml-2 duration-300 origin-0 z-9`}
          >
            {labelText}
          </label>
        </div>
      );
    }
  )
);
export default SelectWithFloatLabel;
