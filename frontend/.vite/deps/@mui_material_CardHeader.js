import {
  Typography_default,
  typographyClasses_default
} from "./chunk-IA3WX2GX.js";
import "./chunk-TAPUFPH2.js";
import "./chunk-7KY6LPK2.js";
import "./chunk-CKPDPGRA.js";
import {
  useDefaultProps
} from "./chunk-ZNKCDLHV.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default
} from "./chunk-VBQBTOED.js";
import {
  require_react
} from "./chunk-KOS6HUMP.js";
import "./chunk-ZSEW566P.js";
import {
  __toESM
} from "./chunk-KEXKKQVW.js";

// node_modules/@mui/material/CardHeader/CardHeader.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/CardHeader/cardHeaderClasses.js
function getCardHeaderUtilityClass(slot) {
  return generateUtilityClass("MuiCardHeader", slot);
}
var cardHeaderClasses = generateUtilityClasses("MuiCardHeader", ["root", "avatar", "action", "content", "title", "subheader"]);
var cardHeaderClasses_default = cardHeaderClasses;

// node_modules/@mui/material/CardHeader/CardHeader.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"]
  };
  return composeClasses(slots, getCardHeaderUtilityClass, classes);
};
var CardHeaderRoot = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${cardHeaderClasses_default.title}`]: styles.title
    }, {
      [`& .${cardHeaderClasses_default.subheader}`]: styles.subheader
    }, styles.root];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 16
});
var CardHeaderAvatar = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Avatar",
  overridesResolver: (props, styles) => styles.avatar
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16
});
var CardHeaderAction = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
});
var CardHeaderContent = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})({
  flex: "1 1 auto",
  [`.${typographyClasses_default.root}:where(& .${cardHeaderClasses_default.title})`]: {
    display: "block"
  },
  [`.${typographyClasses_default.root}:where(& .${cardHeaderClasses_default.subheader})`]: {
    display: "block"
  }
});
var CardHeader = React.forwardRef(function CardHeader2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardHeader"
  });
  const {
    action,
    avatar,
    className,
    component = "div",
    disableTypography = false,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableTypography
  };
  const classes = useUtilityClasses(ownerState);
  let title = titleProp;
  if (title != null && title.type !== Typography_default && !disableTypography) {
    title = (0, import_jsx_runtime.jsx)(Typography_default, {
      variant: avatar ? "body2" : "h5",
      className: classes.title,
      component: "span",
      ...titleTypographyProps,
      children: title
    });
  }
  let subheader = subheaderProp;
  if (subheader != null && subheader.type !== Typography_default && !disableTypography) {
    subheader = (0, import_jsx_runtime.jsx)(Typography_default, {
      variant: avatar ? "body2" : "body1",
      className: classes.subheader,
      color: "textSecondary",
      component: "span",
      ...subheaderTypographyProps,
      children: subheader
    });
  }
  return (0, import_jsx_runtime.jsxs)(CardHeaderRoot, {
    className: clsx_default(classes.root, className),
    as: component,
    ref,
    ownerState,
    ...other,
    children: [avatar && (0, import_jsx_runtime.jsx)(CardHeaderAvatar, {
      className: classes.avatar,
      ownerState,
      children: avatar
    }), (0, import_jsx_runtime.jsxs)(CardHeaderContent, {
      className: classes.content,
      ownerState,
      children: [title, subheader]
    }), action && (0, import_jsx_runtime.jsx)(CardHeaderAction, {
      className: classes.action,
      ownerState,
      children: action
    })]
  });
});
true ? CardHeader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display in the card header.
   */
  action: import_prop_types.default.node,
  /**
   * The Avatar element to display.
   */
  avatar: import_prop_types.default.node,
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   * @default false
   */
  disableTypography: import_prop_types.default.bool,
  /**
   * The content of the component.
   */
  subheader: import_prop_types.default.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The content of the component.
   */
  title: import_prop_types.default.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: import_prop_types.default.object
} : void 0;
var CardHeader_default = CardHeader;
export {
  cardHeaderClasses_default as cardHeaderClasses,
  CardHeader_default as default,
  getCardHeaderUtilityClass
};
//# sourceMappingURL=@mui_material_CardHeader.js.map
