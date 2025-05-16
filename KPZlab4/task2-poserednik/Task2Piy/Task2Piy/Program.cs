using System;
using System.Text;
using DesignPatterns.Mediator;

namespace DesignPatterns.Mediator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            Console.InputEncoding = Encoding.UTF8;

            var atc = new CommandCentre();

            var r1 = new Runway(atc);
            var r2 = new Runway(atc);

            var a1 = new Aircraft("A1", atc);
            var a2 = new Aircraft("B1", atc);
            a1.Land();    
            a2.Land();    
            a1.TakeOff(); 
            a2.TakeOff(); 

            Console.ReadLine();
        }
    }
}
