const Contact = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
          <h1 className="text-4xl font-extrabold mb-6 text-indigo-700 text-center">Contact Us</h1>
          <form className="flex flex-col">
            <input
              type="text"
              className="border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Name"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md py-3 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  