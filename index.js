const section = document.querySelector("section");
const em = document.querySelectorAll("em");
const aside = document.querySelector("aside");
const height = section.offsetHeight;
const role = document.querySelectorAll(
	".employment-history div span:nth-child(1)"
);
aside.style.height = `${height}px`;

em.forEach((element) => (element.style.color = "#3b3b3b"));
role.forEach((element) => (element.style.fontWeight = "bold"));
