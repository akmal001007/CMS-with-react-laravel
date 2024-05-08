
const Teachers = () => {
  return (
      <div className="container mx-auto px-4 py-16 border-b-2 dark:border-gray-500">
          <h1 className="text-center text-4xl text-buttonColor font-bold mb-7">
              Our Teachers
          </h1>
          <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/3">
                  <img
                      src="../public/images/allTecher.jpeg"
                      alt="Image 1"
                      className="rounded-lg"
                  />
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 mx-2">
                  {/* <img
                      src="../public/images/.jpeg"
                      alt="Image 2"
                      className="rounded-lg"
                  /> */}
                  <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                  >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                          <path
                              fill="#000000"
                              d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
                          ></path>
                      </g>
                  </svg>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                  {/* <img
            src="/images/cover.jpg"
            alt="Image 3"
            className="rounded-lg"
          /> */}
                  <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                  >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                          <path
                              fill="#000000"
                              d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
                          ></path>
                      </g>
                  </svg>
              </div>
          </div>
      </div>
  );
};

export default Teachers;
