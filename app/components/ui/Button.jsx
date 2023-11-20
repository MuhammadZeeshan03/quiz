import styled from "@emotion/styled"

export const Button = styled.button((props) => ({
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingInline: "12px",
    paddingBlock: "4px",
    backgroundColor: props.variant == "primary" ? "#0b0b09" : "#fff",
    color: props.variant == "primary" ? "#fff" : "#0b0b09",
    whiteSpace: "nowrap",
    border: "1px solid #e4e4e7",
    borderRadius: "8px",
    fontWeight: 500,
}))