import { phone, clock, address } from "../../assets/icons";

const ContactForm = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl lg:text-5xl dark:text-white">
          Get In Touch With Us
        </h1>
        <p className="mt-3 text-lg text-gray-600 sm:text-xl md:text-2xl dark:text-gray-400">
          For more information about our products & services, feel free to
          drop us an email. Our staff is always ready to assist you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-y-12 lg:gap-8">
        {/* Contact Options */}
        <div className="space-y-8">
          {[
            {
              title: "Email",
              description: "Our friendly team is here to help.",
              value: "hello@merakiui.com",
              icon: address,
            },
            {
              title: "Live Chat",
              description: "Our team is available to assist you.",
              value: "Start new chat",
              icon: phone,
            },
            {
              title: "Phone",
              description: "Mon-Fri from 8am to 5pm.",
              value: "+1 (555) 000-0000",
              icon: clock,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-b pb-4 last:border-b-0"
            >
              <img
                src={item.icon}
                alt={`${item.title} Icon`}
                className="w-10 h-10 text-blue-500"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
                <p className="mt-1 text-blue-500 dark:text-blue-400">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg border dark:bg-gray-900">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 h-32 text-gray-700 bg-gray-50 border rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-lg font-medium text-white bg-[#B88E2F] rounded-lg hover:bg-[#a7905b] focus:outline-none focus:ring-2 focus:ring-yellow-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
