using System.Collections.Generic;
using System.Threading.Tasks;
using dotnet_core_load_tested.Models;

namespace dotnet_core_load_tested.Repositories
{
    public interface IPizzasRepository
    {
        Task<List<Pizza>> getAll();
    }
}