import React from "react";
import Faq from "./faq";
const FaqTwo = () => {
  const data = [
    {
      id: "1",
      title: "How do I verify my account?",
      content:
        "<p>After signing up, you will receive a verification email. Click on the link provided in the email to verify your account.</p>",
    },
    {
      id: "2",
      title: "What should I do if I don't receive a verification email?",
      content:
        "<p>After signing up, you will receive a verification email. Click on the link provided in the email to verify your account. </p>",
    },
    {
      id: "3",
      title: "How can I update my profile information?",
      content:
        "<p> After signing up, you will receive a verification email. Click on the link provided in the email to verify your account.</p>",
    },
    {
      id: "4",
      title: "What if I don’t receive the verification email?",
      content:
        "<p> After signing up, you will receive a verification email. Click on the link provided in the email to verify your account.</p>",
    },
    {
      id: "5",
      title: "Can I search for agents based on specific criteria?",
      content:
        "<p>After signing up, you will receive a verification email. Click on the link provided in the email to verify your account. </p>",
    },
    {
      id: "6",
      title: "Can I search for agents based on specific criteria?",
      content:
        "<p>After signing up, you will receive a verification email. Click on the link provided in the email to verify your account.</p>",
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
