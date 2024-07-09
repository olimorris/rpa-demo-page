const templateConfigData = {
  headerLogoNavLink: "https://automationanywhere.com",
  headerLogoImg: "images/logo-navigation.svg",
  headerBackgroundColor: "#ffffff",
  headerColor: "#343a40",
  footerText: "Automation Anywhere, Inc. Connect and Learn with us: ",
  footerLinks: "<a href='https://community.automationanywhere.com/'>Pathfinder Community</a> | <a href='https://university.automationanywhere.com/'>Automation Anywhere University</a>",
  footerBackgroundColor: "#ffffff",
  footerColor: "#5a5a5a",
};
document.querySelector("#footer-text").innerHTML = `${templateConfigData.footerText}`;
document.querySelector("#footer-links").innerHTML = templateConfigData.footerLinks;
document.querySelector(".footer").style.backgroundColor = templateConfigData.footerBackgroundColor;
document.querySelector(".footer").style.color = templateConfigData.footerColor;
document.getElementById("copyright-year").innerText = new Date().getFullYear();
