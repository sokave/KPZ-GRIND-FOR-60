using System;

namespace DesignPatterns.Mediator
{
    public interface IAirTrafficControl
    {
        void RegisterRunway(Runway runway);
        void RegisterAircraft(Aircraft aircraft);
        void RequestLanding(Aircraft aircraft);
        void RequestTakeOff(Aircraft aircraft);
    }
}
