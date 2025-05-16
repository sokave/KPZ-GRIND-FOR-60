using System;

namespace DesignPatterns.Mediator
{
    public class Runway
    {
        public Guid Id { get; } = Guid.NewGuid();

        public Runway(IAirTrafficControl atc)
        {
            atc.RegisterRunway(this);
        }

        public void HighLightRed()
        {
            Console.WriteLine($"Runway {Id}: ?? (зайнята)");
        }

        public void HighLightGreen()
        {
            Console.WriteLine($"Runway {Id}: ?? (вільна)");
        }
    }
}
