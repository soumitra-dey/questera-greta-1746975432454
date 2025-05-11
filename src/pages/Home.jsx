import React from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee, FiStar, FiClock, FiUsers } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1600"
            alt="Coffee Beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center text-cafe-text">
            <FiCoffee className="text-6xl md:text-7xl mx-auto text-cafe-accent mb-6" />
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-cafe-accent">Abashar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cafe-text-light">
              Experience the perfect blend of taste and ambiance
            </p>
            <Link
              to="/menu"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cafe-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: FiStar, title: "Premium Coffee", desc: "Sourced from the finest beans around the world" },
              { icon: FiClock, title: "Cozy Atmosphere", desc: "A perfect space to relax and unwind" },
              { icon: FiUsers, title: "Expert Baristas", desc: "Crafting the perfect cup just for you" }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-cafe-card hover:bg-cafe-darker transition-colors duration-300"
              >
                <div className="mb-6">
                  <feature.icon className="text-5xl text-cafe-accent mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cafe-text">{feature.title}</h3>
                <p className="text-cafe-text-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;