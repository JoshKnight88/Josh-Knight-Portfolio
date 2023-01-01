import React from "react";
import { SegmentCard } from "../../page-layout/card";
import { ContactForm } from "../../contact-form";
import '../../../assets/page-segments/title.css';

export const Contact: React.FC = () => {
  return (
    <section>
      <h1 className='title'>Contact</h1>
      <ContactForm />
    </section>
  );
};
