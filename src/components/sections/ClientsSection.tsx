export default function ClientsSection() {
  const clients = [
    { name: "GTCS", desc: "Russian Company" },
    { name: "GASC", desc: "General Authority for Supply Commodities" },
    { name: "ECFC", desc: "Egyptian Company for Fertilizers Marketing" },
    { name: "INVICTUS", desc: "Investment Company PLC" }
  ];

  return (
    <section id="clients" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-ocean mb-2">Trusted By</p>
          <h2 className="text-2xl font-heading font-bold text-navy">OUR ESTEEMED CLIENTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-sm bg-off-white/50 hover:bg-white hover:shadow-lg hover:border-ocean/30 transition-all duration-300 group text-center min-h-[160px]"
            >
              <h3 className="text-2xl font-heading font-black text-navy/40 group-hover:text-navy transition-colors duration-300 mb-2 uppercase tracking-wide">
                {client.name}
              </h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider max-w-[200px]">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
