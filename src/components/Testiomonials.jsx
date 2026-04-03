
const testimonials = [
    {
        name:"Sarah Chen",
        role: "Senior Developer",
        image: "",
        content :" This is an AI-powered development platform has revolutionized how we write code."
    },

     {
        name:"Marcus Rome",
        role: "Tech Lead",
        image: "",
        content :" The automated testing and debugging features are gae-changers. we ship code"
     },

     {
        name:"Emily Wilson",
        role: "CTO",
        image: "",
        content :" Our development velocity increased by 300% since adopting this platform. It'."
    },
    


]

export default function Testimonials () {
    return (
        <section id="testimonials"
     className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
    
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">

          
            {/* left side - Header */}
       <div className="lg:w-1/2 w-full"> 
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
            What developers are saying about us
        </h2>
        <p className="text-gray-400 text-base  sm:text-lg max-w-2xl mx-auto"> Choose the perfect plan for your needs. All plans in lud a 14-day 
            Everything you need to build, test, and deploy application with
            AI-powered development tools.
            </p>
        </div>

        </div>
    </div>
    </section>
    
);
}    