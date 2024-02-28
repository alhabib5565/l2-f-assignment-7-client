import Container from "@/layout/Container";
import { cn } from "@/lib/utils";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerItems = [
    {
      title: "Product",
      items: ["Pricing", "Overview", "Browse", "Accessibility"],
    },
    {
      title: "Solutions",
      items: ["Brainstorming", "Ideation", "Wireframing", "Research"],
    },
    {
      title: "Resources",
      items: ["Help Center", "Blog", "Tutorials", "FAQs"],
    },
    {
      title: "Support",
      items: ["Contact Us", "Developers", "Documentation", "Integrations"],
    },
    {
      title: "Company",
      items: ["About", "Press", "Events", "Request Demo"],
    },
  ];
  return (
    <footer className="bg-primary ">
      <Container className="divide-y-[1px] divide-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 py-12">
          <div>
            <a href="" className={cn("text-[32px] font-bold text-white")}>
              AidBox
            </a>{" "}
          </div>
          {footerItems.map((item, index) => (
            <div key={index}>
              <h6>{item.title}</h6>
              {item.items.map((i, index) => (
                <a key={index} className="footer-link" href="">
                  {i}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="py-6 text-[#E2E8F0] text-[16px] flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <p> @ {year}. All rights reserved.</p>
          <ul className="flex gap-8">
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">EN</a>
            </li>
            <li>
              <a href="">EUR</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
