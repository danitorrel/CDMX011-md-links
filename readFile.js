const fs = require("fs");
const mkdown_lnk_ext = require("markdown-link-extractor");

const rdLinks = (arrayFiles) => {
  const arrData = [];
  arrayFiles.map((md) => {
    const mkdown = fs.readFileSync(md, { encoding: "utf8" });
    const links = mkdown_lnk_ext(mkdown, true);
    links.forEach((link) => {
      if (link.href.includes("https")) {
        arrData.push({
          href: link.href,
          text: link.text,
					file: md,
        });
      }
    });
  });
  return arrData;
};

exports.rdLinks = rdLinks;
