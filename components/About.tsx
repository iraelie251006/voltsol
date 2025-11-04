const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className=" flex container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-primary-glow">us</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            VoltSol Global Ltd is a Rwandan-based company
            dedicated to delivering innovative electric solutions that
            make everyday life more efficient, sustainable, and
            affordable. Founded with the vision of driving Africa’s
            transition to clean and smart energy, VoltSol combines
            creativity, technology, and environmental responsibility
            to create products that solve real problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
