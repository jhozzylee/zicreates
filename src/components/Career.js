import React from "react";
import careerImage from "../assets/images/Career-img.jpg";

const Careers = () => {
  return (
    <section className="bg-background text-neutral font-poppins py-20 px-6">
      <div className="max-w-[1280px] mx-auto space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-semibold">Careers at Zi Creates</h1>
          <p className="text-lg leading-relaxed">
            At <strong>Zi Creates</strong>, we’re always on the lookout for <strong>passionate, creative, and driven individuals</strong> who want to help brands stand out with impactful design and digital experiences.
            While we don’t have any open positions at the moment, we’re growing fast — and new opportunities will be announced as we expand our team.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 max-w-[1280px] mx-auto">
          <img
            src={careerImage}
            alt="Creative team collaboration at Zi Creates"
            className="rounded-xl shadow-lg mb-8 lg:mb-0 lg:w-1/2 object-cover"
          />
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-primary">Join Us — We’re Growing Fast!</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><strong>Creative Freedom:</strong> We believe great ideas come from collaboration and experimentation.</li>
              <li><strong>Innovative Culture:</strong> Stay on the cutting edge of branding, motion design, and digital marketing.</li>
              <li><strong>Growth Opportunities:</strong> As a growing agency, your career can grow with us.</li>
              <li><strong>Supportive Team:</strong> Work alongside passionate experts who care about quality and results.</li>
              <li><strong>Make an Impact:</strong> Contribute to projects that create meaningful, lasting brand experiences.</li>
            </ul>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Stay Connected</h2>
          <p className="text-lg leading-relaxed">
            Interested in joining our team in the future? Send us your resume and portfolio at{" "}
            <a href="mailto:careers@zicreates.com" className="text-primary underline">
              careers@zicreates.com
            </a>
            , and we’ll keep you in mind when new roles open up.
          </p>
        </div>

        {/* Equal Opportunity Note */}
        <p className="mt-12 text-sm text-neutral/70 italic max-w-3xl mx-auto text-center">
          💡 Zi Creates is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
        </p>
      </div>
    </section>
  );
};

export default Careers;
