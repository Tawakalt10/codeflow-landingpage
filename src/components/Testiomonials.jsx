
const testimonials = [
    {
        name:"Sarah Chen",
        role: "Senior Developer",
        image: " https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content :" This is an AI-powered development platform has revolutionized how we write code The intelligent suggestions save us hours everyday."
    },

     {
        name:"Marcus Rome",
        role: "Tech Lead",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content :" The automated testing and debugging features are game-changers. we ship code faster with more confidence than ever before"
     },

     {
        name:"Emily Wilson",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content :" Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member."
    },
    


]

export default function Testimonials () {
    return (
        <section id="testimonials"
     className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
    
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">

          
            {/* left side - Header */}
       <div className="lg:w-1/2 w-full text-center lg:text-left"> 
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
            What developers are saying about us
        </h2>
        <p className="text-gray-400 text-base  sm:text-lg max-w-2xl mx-auto"> Choose the perfect plan for your needs. All plans in lud a 14-day 
            Everything you need to build, test, and deploy application with
            AI-powered development tools.
            </p>
        </div>
        
        {/* Right Side - testimonials */}
        <div className="lg:w-1/2 w-full">
         <div className="space-y-6 sm:space-y-8">
            {testimonials.map((testimonial, key) =>(
                
                <div key={key} className ="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm boder border-slate-600 rounded-xl sm:rounded-2xl" >
                 
                 <div className="flex items-start space-x-3 sm:space-x-4 ">
                    <div className="flex-shrink-0">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            "
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}

                        </p>
                        <div className="flex items-center space-x-2 sm:space-x-3 ">  
                            <img src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                        <div>
                             <h4 className="font-semibold text-white text-sm sm:text-base"> {testimonial.name}</h4>
                             <p className="text-xs sm:text-sm text-gray-400"> {testimonial.role}</p>
                        </div>
                        
                         </div>
                    </div>
                 </div>
               
               </div>
            ))}
         </div>

        </div>
        </div>
    </div>
    </section>
    
);
}    