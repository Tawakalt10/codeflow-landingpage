const features = [
    {
   title: "AI Code Completion",
   description: "Intelligent code suggestions powered by advance I that learns from you",
   image: "code-completion",
   imagePosition: 'left',

},


{
   title: "Automaed Testing",
   description: "Generate comprehensive test suites automatically. Our AI analyzes your",
   image: "testing",
   imagePosition: 'right',

},

{
   title: "Smart debugging",
   description: "Identify and fix bugs before they reach production. AI-powered error debugging",
   image: "debugging",
   imagePosition: 'left',

},

];

export default function Features () {
    return <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div>
       <div>
        <h2> <span></span></h2>
        </div>    
        </div>
    </section>;
}    