import glamorous from "glamorous";

export const UlItems = glamorous.ul({
  listStyle: "none"
});

export const ImgItem = glamorous.img({
  width: 42,
  height: 42,
  borderRadius: "50%",
  marginLeft: 20
});

export const DivItem = glamorous.div(({ isFirstLevel }) => ({
  display: "inline-flex",
  width: "100%",
  height: 60,
  borderBottom: isFirstLevel && "1px #dcdbdb solid"
}));

export const SpanItem = glamorous.span(({ isFirstLevel }) => {
  const styles = {
    color: "#323232",
    fontSize: 12,
    fontFamily: "Arial"
  };
  if (isFirstLevel) {
    return {
      ...styles,
      fontWeight: "700"
    };
  }
  return styles;
});

export const Wrapper = glamorous.div(({ isSpanWraper, props }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: isSpanWraper && 15,
  ...props
}));

export const SpanIcon = glamorous.span({
  fontWeight: 700
});
