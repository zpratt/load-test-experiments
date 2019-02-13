using System.Collections.Generic;
using System.Threading.Tasks;
using dotnet_core_load_tested.Models;
using dotnet_core_load_tested.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_core_load_tested.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzasController : ControllerBase
    {
        private readonly IPizzasRepository _repository;

        public PizzasController(IPizzasRepository repository)
        {
            _repository = repository;
        }
        
        [Route("test")]
        public string Test()
        {
            return "hello";
        }

        [Route("")]
        public async Task<List<Pizza>> getAll()
        {
            return await _repository.getAll();
        }
    }
}