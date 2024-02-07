interface ISkillTypeInfo {
  name: string;
  icon?: string;
  color: string;
  fontColor?: string;
}
interface ISkillTypeInfos {
  [index: string]: ISkillTypeInfo;
  cpp: ISkillTypeInfo;
  csharp: ISkillTypeInfo;
  css: ISkillTypeInfo;
  html: ISkillTypeInfo;
  html5: ISkillTypeInfo;
  js: ISkillTypeInfo;
  php: ISkillTypeInfo;
  react: ISkillTypeInfo;
  reactQuery: ISkillTypeInfo;
  ts: ISkillTypeInfo;
  unity: ISkillTypeInfo;
  ugui: ISkillTypeInfo;
  ngui: ISkillTypeInfo;
  trid: ISkillTypeInfo;
  lua: ISkillTypeInfo;
  jquery: ISkillTypeInfo;
}

export const SKILL_TYPE_INFOS: ISkillTypeInfos = {
  cpp: { name: "C++", icon: "icon_cpp.svg", color: "#669AD3" },
  csharp: { name: "C#", icon: "icon_csharp.svg", color: "#9B4F97" },
  css: { name: "CSS", icon: "icon_css.svg", color: "#29A9DF" },
  html: { name: "HTML5", icon: "icon_html.svg", color: "#F16529" },
  html5: { name: "HTML5", icon: "icon_html5.svg", color: "#F16529" },
  js: { name: "JavaScript", icon: "icon_javascript.svg", color: "#F2BF22" },
  php: { name: "PHP", icon: "icon_php.svg", color: "#F2BF22" },
  react: { name: "React", icon: "icon_react.svg", color: "#00D8FF" },
  reactQuery: { name: "React Query", icon: "icon_react_query.svg", color: "#00D8FF" },
  ts: { name: "TypeScript", icon: "icon_typescript.svg", color: "#007ACC" },
  unity: { name: "Unity3D", icon: "icon_unity.svg", color: "#494848" },
  ugui: { name: "UGUI", color: "#494848", fontColor: "#fff" },
  ngui: { name: "NGUI", color: "#494848", fontColor: "#fff" },
  trid: { name: "Tri-d", color: "#494848", fontColor: "#fff" },
  lua: { name: "Lua Script", color: "#E2D935", fontColor: "#fff" },
  jquery: { name: "JQuery", icon: "icon_jquery.svg", color: "#fff" },
};
