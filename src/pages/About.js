import burger from "../assets/img/burger-image.png"; 

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-wrap mx-4 my-10 space-x-10">
        
        <div className="flex flex-wrap mt-20 ml-40 flex-col justify-start items-start overflow-hidden">
            <h1 className="text-[80px] text-red-500">
              Welcome to the world of <br />
              <span className="bg-red-600 px-10 pb-5 rounded-lg text-white">Tasty & Fresh Food</span>
            </h1>
            <h4 className="text-2xl mt-6 ml-12 italic text-light items-center">
              "Better you will feel if you eat a Snack<span className="text-red-600">Dash</span> healthy
              meal"
            </h4>
        </div>
        <img src={burger} alt="Burger Image" />
        
      </div>
    </div>
  );
};

export default About;
