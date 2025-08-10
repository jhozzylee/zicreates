import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-background text-neutral font-poppins py-20 px-6">
      <div className="max-w-[1280px] mx-auto space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-semibold">We help ambitious brands stand out with visuals that inspire action.</h1>
          <p className="text-lg leading-relaxed">
            We believe modern businesses shouldn’t have to choose between beautiful design and measurable results.
            Zi Creates was built to solve that — a creative partner that transforms every project into a long-term brand asset, delivering not just designs and websites, but a growing library of motion graphics, marketing visuals, and digital experiences built to achieve your goals.
          </p>
        </div>

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 max-w-[1280px] mx-auto">
          <img
            src="https://media.istockphoto.com/id/1488871811/photo/business-people-laptop-and-meeting-in-planning-above-for-web-design-strategy-or-brainstorming.jpg?s=612x612&w=0&k=20&c=tAiRqxqlilEy0QZX535lRvfcNEX1xXN3otVACm5uCIM="
            alt="Team working on branding"
            className="rounded-xl shadow-lg mb-8 lg:mb-0 lg:w-1/2 object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
            <p>
              We’re a team of brand strategists, designers, and motion artists who build high-impact visual identities for startups, growing businesses, and forward-thinking brands.
            </p>
            <p>
              We’re known for world-class branding and digital experiences, but our scope goes far beyond.
              Think: brand identity systems, motion graphics, web design, social media campaigns — created to ship fast, scale wide, and connect deeply with your audience.
            </p>
            <p>
              Zi Creates was founded by John Zidah with one goal: to help brands communicate their story in a way that is clear, consistent, and unforgettable.
              Every project is handled with a focus on storytelling, innovation, and measurable brand growth.
            </p>
          </div>
        </div>

        {/* Our Process */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 max-w-[1280px] mx-auto">
          <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
            <h2 className="text-3xl font-semibold text-primary">Our Process</h2>
            <p>
              Our approach is end-to-end by design. From the first concept sketch to the final asset, we use proven creative frameworks refined across multiple industries.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Branding:</strong> We craft logos, colors, and design systems that reflect your business DNA.</li>
              <li><strong>Web & UI/UX:</strong> We design and build websites that not only look beautiful but also convert.</li>
              <li><strong>Motion & Marketing Assets:</strong> From animations to social ads, we create visuals that work across all platforms.</li>
            </ul>
            <p>
              We integrate creative infrastructure so your brand can move fast without losing quality.
            </p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1368019362/photo/brainstorm-diversity-work-team.jpg?s=612x612&w=0&k=20&c=6UQFObelNE-4dm1qdclNMlKwBmG34XU0Kwl9SzoMgo0="
            alt="Design process illustration"
            className="rounded-xl shadow-lg mb-8 lg:mb-0 lg:w-1/2 object-cover order-1 lg:order-2"
          />
        </div>

        {/* Our Results */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Our Results</h2>
          <p>
            We work with brands who want to make a lasting impression.
            Our designs, campaigns, and motion graphics have helped businesses increase engagement, drive sales, and build strong brand loyalty.
          </p>
          <p>
            Whether you’re launching your first brand or refreshing an established one, we help you create visuals and experiences that make your audience remember you for the right reasons.
          </p>
          <p className="mt-6 text-primary text-lg font-semibold">
            💡 If your brand is ready to win with creative, let’s make something unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
