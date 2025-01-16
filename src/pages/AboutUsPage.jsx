import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brown-800 mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-brown-800 leading-relaxed">
          Welcome to <span className="font-semibold">Pawfect Supplies</span>,
          your trusted destination for premium pet food and accessories! At
          Pawfect Supplies, we believe that pets are family, and they deserve
          the very best care, love, and nutrition. Whether you're shopping for
          your playful pup, curious kitten, or any furry friend, we’re here to
          make sure they’re happy and healthy.
        </p>

        <h2 className="text-2xl font-semibold text-brown-800 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-brown-800 leading-relaxed">
          Our mission is simple: to provide high-quality, nutritious pet food
          and safe, reliable accessories that enrich the lives of your pets.
          We’re passionate about offering products that not only meet but exceed
          your expectations. From organic pet food to durable toys, we carefully
          curate every item to ensure the utmost quality.
        </p>

        <h2 className="text-2xl font-semibold text-brown-800 mt-8 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-lg text-brown-800 leading-relaxed">
          <li>Wide selection of pet food for every dietary need.</li>
          <li>
            Fun and durable accessories for playtime, training, and grooming.
          </li>
          <li>Eco-friendly and organic product options.</li>
          <li>Passionate team with expert knowledge on pet care.</li>
          <li>Committed to giving back to local pet shelters and charities.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brown-800 mt-8 mb-4">
          Our Story
        </h2>
        <p className="text-lg text-brown-800 leading-relaxed">
          Pawfect Supplies was born out of a love for pets and a desire to make
          a difference in their lives. What started as a small local shop has
          now grown into a trusted name in pet care. We’ve built our reputation
          on honesty, quality, and a deep commitment to the well-being of
          animals. Every pet deserves love and care, and we’re honored to be a
          part of that journey with you.
        </p>

        <p className="text-lg text-brown-800 leading-relaxed mt-6">
          Thank you for choosing{" "}
          <span className="font-semibold">Pawfect Supplies</span>. We’re excited
          to serve you and your furry friends. Let’s make every tail wag, every
          paw step, and every purr count!
        </p>

        <div className="text-center mt-12">
          <button className="bg-brown-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-brown-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
