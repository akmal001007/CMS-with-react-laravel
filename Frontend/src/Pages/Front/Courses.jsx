
const Courses = () => {
  return (
      <div className="container mx-auto px-4 py-10  ">
          <h1 className="text-center text-4xl text-buttonColor font-bold mb-7">
              Our Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center shadow-lg">
                  <div className="relative">
                      <img
                          src="../public/images/computer.jpeg"
                          alt="Image 1"
                          className="max-w-full rounded-lg mb-4"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-slate-500
                       opacity-0 transition-opacity duration-1000 hover:opacity-80 rounded-md">
                          <div className="flex items-center justify-center h-full p-4">
                              <p className="text-white font-medium">
                                  We are using the american system for this
                                  coures and
                              </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="text-black text-lg font-bold">MS Office</h2>
                  <p className="text-gray-700 dark:text-white p-4">
                      We are using the combridge system in teaching english.
                  </p>
                  <p className="text-buttonColor pb-2">300AF</p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
                  <div className="relative">
                      <img
                          src="../public/images/computer.jpeg"
                          alt="Image 1"
                          className="max-w-full rounded-lg mb-4"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-slate-500
                       opacity-0 transition-opacity duration-1000 hover:opacity-80 rounded-md">
                          <div className="flex flex-col items-center justify-center h-full p-4">
                              <p className="text-white font-medium">
                                  We are using the american system for this
                                  coures and
                              </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="text-black text-lg font-bold">
                      Graphic Design
                  </h2>
                  <p className="text-gray-700 dark:text-white p-2">
                      The newest version of math and formula is used.
                  </p>
                  <p className="text-buttonColor">300AF</p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0 shadow-lg">
                  <div className="relative">
                      <img
                          src="../public/images/computer.jpeg"
                          alt="Image 1"
                          className="max-w-full rounded-lg mb-4"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-slate-500
                       opacity-0 transition-opacity duration-1000 hover:opacity-80 rounded-md">
                          <div className="flex items-center justify-center h-full p-4">
                              <p className="text-white font-medium">
                                  We are using the american system for this
                                  coures and
                              </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="text-black text-lg font-bold">Computer</h2>
                  <p className="text-gray-700 dark:text-white p-4">
                      We dicover the new technologies and versions for.
                  </p>
                  <p className="text-buttonColor mb-2">300AF</p>
              </div>
          </div>
      </div>
  );
};

export default Courses;
