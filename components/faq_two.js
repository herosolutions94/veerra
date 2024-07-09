import React from "react";
import Faq from "./faq";
const FaqTwo = () => {
  const data = [
    {
      id: "1",
      title: "How does Learn and Pass help me prepare for online tests?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "2",
      title: "What are the common types of online tests?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "3",
      title: "What is the best way to prepare for an online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "4",
      title: "When should I sit the actual online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "5",
      title: "My online test is in only a few days. What should I do?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
    {
      id: "6",
      title: "What is an online test?",
      content:
        "<p>AECOM is a leading multinational engineering firm that offers a broad range of professional services across various industries. The company offers an extensive portfolio of services that includes architecture, engineering, design, construction management, planning, environmental services, and infrastructure operations and maintenance.</p>",
    },
  ];
  return (
    <>
      <section className="uj_faqs">
        <div className="contain">
          <div className="sec_heading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="inner">
            <Faq data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqTwo;
