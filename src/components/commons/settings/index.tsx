import { theme } from "@/src/commons/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../../../commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
interface ISettings {
  children: JSX.Element | JSX.Element[];
}
const Settings = (props: ISettings) => {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default Settings;
