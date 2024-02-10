import { Ref, useEffect, useState } from "react";
import { NavItem, NavWrapper, Wrapper } from "./Navigation.styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
interface INaviMenu {
  name: string;
  id: string;
}
interface INavigationProps {
  activeIndex: number;
  menus: INaviMenu[];
}
const Navigation = (props: INavigationProps) => {
  const [links, setLinks] = useState<HTMLAnchorElement[]>();
  useEffect(() => {
    let links = gsap.utils.toArray<HTMLAnchorElement>("nav a");
    setLinks(links);
  }, []);
  useEffect(() => {
    if (!links) return;
    links.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href") ?? ""),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        }),
        highlightST = ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          end: "bottom bottom",
          onToggle: (self) => self.isActive && setActive(a),
        });
      a.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 0.5, scrollTo: linkST.start, overwrite: "auto" });
      });
    });
  }, [links]);
  const setActive = (link: HTMLAnchorElement) => {
    if (!links) return;
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  };
  return (
    <Wrapper>
      {props.menus.map((el) => (
        <NavItem key={el.id} href={`#${el.id}`}>
          {el.name}
        </NavItem>
      ))}
    </Wrapper>
  );
};
export default Navigation;
