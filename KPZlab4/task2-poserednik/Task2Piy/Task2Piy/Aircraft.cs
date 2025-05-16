using System;

namespace DesignPatterns.Mediator
{
    public class Aircraft
    {
        private readonly IAirTrafficControl _atc;
        public string Name { get; }

        public Aircraft(string name, IAirTrafficControl atc)
        {
            Name = name;
            _atc = atc;
            _atc.RegisterAircraft(this);
        }

        public void Land()
        {
            _atc.RequestLanding(this);
        }

        public void TakeOff()
        {
            _atc.RequestTakeOff(this);
        }
    }
}
