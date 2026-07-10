console.log('UCAISM.org Phase C-6 research media downloads loaded');

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav a").forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    const isHome = currentPath === "/" && linkPath === "/";
    const isSection = linkPath !== "/" && currentPath.startsWith(linkPath);
    if (isHome || isSection) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
