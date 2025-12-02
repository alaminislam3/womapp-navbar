import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Car Rental Service",
      date: "Available Now",
      description: "Book your perfect ride for any occasion. Choose from economy cars, luxury vehicles, or spacious SUVs. Flexible pickup and drop-off locations across the city with 24/7 customer support."
    },
    {
      id: 2,
      title: "Professional Room Cleaning",
      date: "Same Day Service",
      description: "Expert cleaning services for your home or office. Our trained professionals use eco-friendly products to ensure a spotless environment. Schedule one-time deep cleans or recurring maintenance."
    },
    {
      id: 3,
      title: "Event Space Booking",
      date: "Book in Advance",
      description: "Reserve elegant venues for weddings, conferences, or private parties. Our spaces feature modern amenities, catering options, and dedicated event coordinators to make your occasion memorable."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
              <h3 className="text-3xl font-semibold">Our Services</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-600 dark:text-gray-400">
                Easy Booking Platform
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300 dark:before:bg-gray-700">
              {timelineData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-gray-400">
                    {item.date}
                  </time>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;