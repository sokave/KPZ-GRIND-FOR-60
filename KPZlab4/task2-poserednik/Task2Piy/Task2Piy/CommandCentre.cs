using System;
using System.Linq;
using System.Collections.Generic;

namespace DesignPatterns.Mediator
{
    public class CommandCentre : IAirTrafficControl
    {
        private readonly List<Runway> _runways = new List<Runway>();
        private readonly Dictionary<Runway, Aircraft?> _occupancy = new Dictionary<Runway, Aircraft?>();

        public void RegisterRunway(Runway runway)
        {
            _runways.Add(runway);
            _occupancy[runway] = null;
        }

        public void RegisterAircraft(Aircraft aircraft)
        {
        }

        public void RequestLanding(Aircraft aircraft)
        {
            Console.WriteLine($"[ATC] Запит на посадку: {aircraft.Name}");
            var freeRunway = _runways.FirstOrDefault(r => _occupancy[r] == null);
            if (freeRunway != null)
            {
                Console.WriteLine($"[ATC] Виділено смугу {freeRunway.Id}");
                freeRunway.HighLightRed();
                Console.WriteLine($"[ATC] Літак {aircraft.Name} успішно приземлився");
                _occupancy[freeRunway] = aircraft;
            }
            else
            {
                Console.WriteLine($"[ATC] Помилка: вільних смуг немає, {aircraft.Name} не може сісти");
            }
        }

        public void RequestTakeOff(Aircraft aircraft)
        {
            Console.WriteLine($"[ATC] Запит на зліт: {aircraft.Name}");
            var entry = _occupancy.FirstOrDefault(kvp => kvp.Value == aircraft);
            if (entry.Key != null)
            {
                var runway = entry.Key;
                Console.WriteLine($"[ATC] Літак {aircraft.Name} злітає зі смуги {runway.Id}");
                runway.HighLightGreen();
                Console.WriteLine($"[ATC] Літак {aircraft.Name} успішно злетів");
                _occupancy[runway] = null;
            }
            else
            {
                Console.WriteLine($"[ATC] Помилка: {aircraft.Name} не знаходиться на жодній смузі");
            }
        }
    }
}
