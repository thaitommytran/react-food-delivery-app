import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <HeadlineCard
          title="Sun's Out, BOGO's Out"
          description="Through 8/26"
          url="https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg"
        />
        <HeadlineCard
          title="New Restaurants"
          description="Added Daily"
          url="https://images.pexels.com/photos/9650087/pexels-photo-9650087.jpeg"
        />
        <HeadlineCard
          title="We Deliver Desserts Too"
          description="Tasty Treats"
          url="https://images.pexels.com/photos/8753550/pexels-photo-8753550.jpeg"
        />
      </section>
      <Food />
      <Category />
    </div>
  );
}

export default App;
